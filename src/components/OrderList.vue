<template>
  <div class="cart">
    <div class="wrap">
      <div class="list__wrapper">
        <div
          v-for="listItem in productList"
          :key="listItem.id"
          class="cart__list"
          v-show="listItem.isDeleted === false"
        >
          <p v-if="showCart === false">
            {{ listItem.title }}
          </p>
          <button @click="openCart(listItem.id)" class="btn-open">!!!</button>
          <div class="product__count">
            <p>{{ listItem.count }}</p>
            <p>Продукта</p>
          </div>
          <div class="date__add">
            <p>{{ listItem.dateAddSmaller }}</p>
            <p>{{ listItem.dateAdd }}</p>
          </div>
          <div class="sum" v-if="showCart === false">
            <p>{{ listItem.sumUSD }}$</p>
            <p>{{ listItem.sumUAH }}UAH</p>
          </div>
          <button
            @click="hideCart"
            v-if="showCart === true && listItem.id == currentList"
            class="btn-back"
          >
            Back
          </button>
        </div>
      </div>
    </div>
    <div class="cart__items" v-if="showCart">
      <h1>{{ productList[currentList].title }}</h1>
      <p v-if="productList[currentList].count == 0">
        Элементов в списке еще нет, добавьте их на странице Приход!
      </p>
      <div
        v-else
        class="cart__order__list"
        v-for="product in products"
        :key="product.id"
        v-show="product.inCart.includes(currentList)"
      >
        <div class="cart__item">
          <div
            class="circle__type"
            :style="{
              'background-color':
                product.type === 'Свободен'
                  ? 'green'
                  : product.type === 'В ремонте'
                  ? 'yellow'
                  : 'red',
            }"
          ></div>
          <img
            :src="product.image"
            alt="image product"
            style="height: 70%; self-align: center"
          />
          {{ product.title }}
          <p
            :style="{
              color:
                product.type === 'Свободен'
                  ? 'green'
                  : product.type === 'В ремонте'
                  ? 'yellow'
                  : 'red',
            }"
          >
            {{ product.type }}
          </p>
          <button class="btn-remove" @click="showForm(product.id)">
            Remove
          </button>
          <div
            class="confirm"
            v-if="showConfirm && selectedProductId === product.id"
            @click="hideConfirm"
          >
            <div class="confirm__inner" @click.stop>
              <button class="cancel" @click="hideConfirm">X</button>
              <h1>Вы уверены, что хотите удалить этот элемент?</h1>
              <div class="element__del__confirm">
                <img :src="product.image" alt="product image" />
                {{ product.title }}
              </div>
              <div class="confirm__footer">
                <button class="btn-cancel" @click="hideConfirm">
                  Отменить
                </button>
                <button
                  class="btn-remove"
                  @click="removeFromCart(product.id, currentList)"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "order-list",
  data() {
    return {
      currentList: 0,
      showCart: false,
      showConfirm: false,
      selectedProductId: null,
    };
  },
  methods: {
    openCart(index) {
      this.currentList = index;
      this.selectedProductId = null; // reset selectedProductId
      this.showCart = true;
    },
    hideCart() {
      this.currentList = 0;
      this.selectedProductId = null;
      this.showCart = false;
    },
    removeFromCart(productId, listId) {
      this.$store.commit("delFromCart", { productId, listId });
    },
    showForm(productId) {
      this.showConfirm = true;
      this.selectedProductId = productId;

      document.querySelector("#scrollBlock").style.overflow = "hidden";
    },
    hideConfirm() {
      this.showConfirm = false;

      document.querySelector("#scrollBlock").style.overflow = "auto";
    },
  },

  computed: {
    ...mapGetters(["getProducts", "getProductList"]),
    productList() {
      return this.getProductList;
    },
    products() {
      return this.getProducts;
    },
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  position: relative;
  min-height: 100%;
}
.list__wrapper {
  width: 100%;
  transition: all 0.3s;
}
.wrap {
  position: sticky;
  top: 200px;
  width: 100%;
  transition: all 0.3s;
}
.cart__list {
  background-color: white;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  transition: all 0.3s;
}
.cart__items {
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  height: fit-content;
  width: 100vw;
  margin-left: 20px;
}

.cart__items h1 {
  margin: 0;
}

.cart__order__list {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}
.cart__item {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
}

.circle__type {
  width: 20px;
  height: 20px;
  border-radius: 2.5rem;
}
.confirm {
  position: fixed;
  width: calc(100vw - 500px);
  height: calc(100vh - 300px);
  top: 200px;
  left: 400px;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.confirm__inner {
  position: relative;
  width: 700px;
  height: 250px;
  background-color: white;
}
.confirm__inner h1 {
  margin: 10px 50px;
  height: 75px;
  font-size: 30px;
}
.element__del__confirm {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  width: 100%;
}
.element__del__confirm img {
  height: 80%;
}
.confirm__footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 75px;
  width: 100%;
  background-color: green;
  position: relative;
}
.btn-remove {
  background-color: white;
  color: red;
  padding: 10px 20px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 1rem;
  border: 0;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.btn-remove:hover {
  background-color: red;
  color: white;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5);
}
.btn-cancel {
  background-color: unset;
  border: 0;
  color: white;
  font-size: 14px;
  cursor: pointer;
}
.cancel {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 0;
  background-color: white;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 2.5rem;
  box-shadow: 0 0 5px 0 black;
  cursor: pointer;
}
.btn-open {
  width: 50px;
  height: 50px;
  border-radius: 2.5rem;
  border: 1px solid black;
  transform: rotate(90deg);
  font-size: 20px;
  cursor: pointer;
}
.btn-back {
  position: absolute;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 50px;
  border: 0;
  cursor: pointer;
  color: white;
}
.date__add {
  text-align: center;
}
.date__add p:first-child {
  color: rgba(0, 0, 0, 0.5);
}
.product__count p:last-child {
  color: rgba(0, 0, 0, 0.5);
}
.sum p:first-child {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
}
</style>
