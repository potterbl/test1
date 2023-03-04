<template>
  <div class="products">
    <button
      class="btn btn-outline-success button__custom"
      @click="addNewProduct"
      v-if="isProdList"
    >
      +
    </button>
    <div class="shop__buttons" v-if="isShop">
      <button @click="back" class="btn btn-outline-success button__custom">
        &lt;
      </button>
      <select
        name="types"
        id="types"
        class="form-select select__sort"
        @change="sortProducts($event.target.value)"
      >
        <option value="null" default>Choose sort</option>
        <option value="Свободен">Свободен</option>
        <option value="В ремонте">В ремонте</option>
        <option value="Занят">Занят</option>
      </select>
    </div>
    <div class="products__list" v-if="isProdList">
      <div
        v-for="listItem in productList"
        :key="listItem.id"
        class="list__item"
        @click="openShop(listItem.id)"
        v-show="listItem.isDeleted === false"
      >
        <p>{{ listItem.title }}</p>
        <div class="product__count">
          <p>{{ listItem.count }}</p>
          <p>Продукта</p>
        </div>
        <div class="date__add">
          <p>{{ listItem.dateAddSmaller }}</p>
          <p>{{ listItem.dateAdd }}</p>
        </div>
        <div class="sum">
          <p>{{ listItem.sumUSD }}$</p>
          <p>{{ listItem.sumUAH }}UAH</p>
        </div>
        <button
          class="btn btn-outline-danger"
          @click.stop
          @click="confirmDel(listItem.id)"
        >
          Del
        </button>
        <div
          class="confirm"
          v-if="showConfirm && currentList === listItem.id"
          @click="hideConfirm"
        >
          <div class="confirm__inner" @click.stop>
            <button class="cancel" @click="hideConfirm">X</button>
            <h1>Вы уверены, что хотите удалить этот элемент?</h1>
            <div class="element__del__confirm">
              <p>{{ listItem.title }}</p>
              <p>Кол-во добавленных элементов: {{ listItem.count }}</p>
            </div>
            <div class="confirm__footer">
              <button class="btn-cancel" @click="hideConfirm">Отменить</button>
              <button class="btn-remove" @click="delList(listItem.id)">
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="shop__list" v-if="isShop">
      <div
        class="list__shop__item"
        v-for="product in products"
        :key="product.id"
      >
        <img
          :src="product.image"
          alt="image product"
          style="height: 70%; self-align: center"
        />
        <p>{{ product.title }}</p>
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
        <div class="garanty">
          <p>{{ product.garantySmall }}</p>
          <p>{{ product.garanty }}</p>
        </div>
        <p>{{ product.priceUAH }}UAH</p>
        <p>{{ product.priceUSD }}$</p>
        <button
          class="btn btn-success"
          @click="
            addToCart(
              product.id,
              currentList,
              product.priceUAH,
              product.priceUSD
            )
          "
          :style="{
            'pointer-events':
              product.type === 'Занят'
                ? 'none'
                : product.type === 'В ремонте'
                ? 'none'
                : '',
            opacity:
              product.type === 'Занят'
                ? '50%'
                : product.type === 'В ремонте'
                ? '50%'
                : '',
          }"
          v-if="!product.inCart.includes(currentList)"
        >
          Add
        </button>
        <p v-else>Already in Cart</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "product-list",
  data() {
    return {
      isProdList: true,
      isShop: false,
      currentList: 0,
      showConfirm: false,
      selectedListId: 0,
    };
  },
  methods: {
    addNewProduct() {
      this.$store.commit("prodListNew");
      console.log(this.$store.state.productList);
    },
    delList(productId) {
      this.$store.commit("prodListDel", productId);
    },
    openShop(index) {
      this.currentList = index;
      this.isProdList = !this.isProdList;
      this.isShop = !this.isShop;
    },
    back() {
      this.isProdList = !this.isProdList;
      this.isShop = !this.isShop;
      this.currentList = 0;
      this.products.sort((a, b) => a.id - b.id);
    },
    addToCart(productId, listId) {
      this.$store.commit("addToCart", { productId, listId });
    },
    sortProducts(value) {
      switch (value) {
        case "Свободен":
          this.products.sort((a, b) =>
            a.type === value && b.type !== value
              ? -1
              : a.type !== value && b.type === value
              ? 1
              : a.type.localeCompare(b.type)
          );
          break;
        case "В ремонте":
          this.products.sort((a, b) =>
            a.type === value && b.type !== value
              ? -1
              : a.type !== value && b.type === value
              ? 1
              : a.type.localeCompare(b.type)
          );
          break;
        case "Занят":
          this.products.sort((a, b) =>
            a.type === value && b.type !== value
              ? -1
              : a.type !== value && b.type === value
              ? 1
              : a.type.localeCompare(b.type)
          );
          break;
        default:
          this.products.sort((a, b) => a.id - b.id);
      }
    },
    confirmDel(listId) {
      this.showConfirm = true;
      this.currentList = listId;
    },
    hideConfirm() {
      this.showConfirm = false;
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
.products {
  width: 100%;
  height: auto;
  display: grid;
}

.products__list {
  margin-top: 100px;
  height: auto;
  width: 100%;
  cursor: pointer;
}
.list__item {
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 5px;
  height: 100px;
  width: calc(100% - 2px);
  margin: 10px 0;
  align-items: center;
}
.types {
  position: absolute;
  top: 0;
  left: 200px;
  height: 50px;
  width: 200px;
  font-size: 18px;
}
.shop__list {
  margin-top: 100px;
}
.list__shop__item {
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  height: 100px;
  width: calc(100% - 2px);
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.btn-del-cart {
  cursor: pointer;
  font-size: 14px;
  width: 50px;
  height: 50px;
  background-color: #6aa84f;
  border: 5px solid #93c47d;
  border-radius: 10px;
}
.btn-add-cart {
  cursor: pointer;
  font-size: 14px;
  width: 50px;
  height: 50px;
  background-color: #6aa84f;
  border: 5px solid #93c47d;
  border-radius: 10px;
}
.shop__buttons {
  display: flex;
}
.button__custom {
  width: 60px;
}
.select__sort {
  margin-left: 20px;
  width: 150px;
}
.garanty {
  text-align: center;
  color: black;
}
.garanty p:first-child {
  color: rgba(0, 0, 0, 0.5);
}
.date__add {
  text-align: center;
}
.date__add p:first-child {
  color: rgba(0, 0, 0, 0.5);
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
.product__count p:last-child {
  color: rgba(0, 0, 0, 0.5);
}
.sum p:first-child {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
}
</style>
