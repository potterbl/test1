import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      productList: [],
      products: [
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "В ремонте",
          garanty: "02 / Авг / 2023",
          garantySmall: "04 / 12",
          priceUAH: 2000,
          priceUSD: 100,
          id: "0",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "В ремонте",
          garanty: "03 / Сен / 2025",
          garantySmall: "06 / 09",
          priceUAH: 1500,
          priceUSD: 250.5,
          id: "1",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "Свободен",
          garanty: "03 / Сен / 2025",
          garantySmall: "04 / 12",
          priceUAH: 2000,
          priceUSD: 400,
          id: "2",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "Свободен",
          garanty: "03 / Авг / 2025",
          garantySmall: "04 / 12",
          priceUAH: 1500,
          priceUSD: 250.5,
          id: "3",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "В ремонте",
          garanty: "03 / Июн / 2025",
          garantySmall: "06 / 09",
          priceUAH: 5000,
          priceUSD: 400,
          id: "4",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "В ремонте",
          garanty: "03 / Июн / 2025",
          garantySmall: "06 / 09",
          priceUAH: 2000,
          priceUSD: 250.5,
          id: "5",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "Занят",
          garanty: "03 / Авг / 2025",
          garantySmall: "04 / 12",
          priceUAH: 5000,
          priceUSD: 400,
          id: "6",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "Свободен",
          garanty: "03 / Сен / 2023",
          garantySmall: "06 / 09",
          priceUAH: 1500,
          priceUSD: 400,
          id: "7",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "В ремонте",
          garanty: "03 / Авг / 2025",
          garantySmall: "04 / 12",
          priceUAH: 5000,
          priceUSD: 250.5,
          id: "8",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "Свободен",
          garanty: "03 / Июн / 2026",
          garantySmall: "06 / 09",
          priceUAH: 2000,
          priceUSD: 125,
          id: "9",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "В ремонте",
          garanty: "03 / Авг / 2024",
          garantySmall: "06 / 09",
          priceUAH: 1500,
          priceUSD: 250.5,
          id: "10",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "Свободен",
          garanty: "03 / Авг / 2025",
          garantySmall: "06 / 09",
          priceUAH: 2000,
          priceUSD: 125,
          id: "11",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "Занят",
          garanty: "03 / Сен / 2025",
          garantySmall: "04 / 12",
          priceUAH: 2000,
          priceUSD: 125,
          id: "12",
          inCart: [],
        },
        {
          image:
            "https://content2.rozetka.com.ua/goods/images/big/152569007.jpg",
          title: "DJI Mini 2 (CP.MA.00000312.03) (6941565905185)",
          type: "В ремонте",
          garanty: "03 / Авг / 2025",
          garantySmall: "04 / 12",
          priceUAH: 5000,
          priceUSD: 3000,
          id: "13",
          inCart: [],
        },
      ],
      counterId: 0,
      count: 0,
    };
  },
  getters: {
    getProductList(state) {
      return state.productList;
    },
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    prodListNew(state) {
      const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear() + 2;
      const fulldate = `${day}/${monthNames[month - 1]}/${year}`;
      const smallDate = `${day}/${month}`;

      const newProduct = {
        title: "Название прихода",
        count: state.count,
        dateAddSmaller: smallDate,
        dateAdd: fulldate,
        sumUAH: 0,
        sumUSD: 0,
        id: state.counterId,
        cart: [],
        isDeleted: false,
      };

      state.counterId++;
      state.productList.push(newProduct);
    },
    prodListDel(state, productId) {
      const productIndex = state.productList.findIndex(
        (p) => p.id === productId
      );
      if (productIndex !== -1) {
        state.productList[productIndex].isDeleted = true;
      }
    },

    addToCart(state, payload) {
      const { productId, listId } = payload;
      const product = state.productList.find((p) => p.id === listId);
      const cart = state.products.find((p) => p.id === productId);

      product.sumUAH += cart.priceUAH;
      product.sumUSD += cart.priceUSD;

      if (!product.cart.includes(productId)) {
        product.count += 1;
        product.cart.push(productId);
      }
      if (!cart.inCart.includes(listId)) {
        cart.inCart.push(listId);
      }
    },

    delFromCart(state, payload) {
      const { productId, listId } = payload;
      const product = state.productList.find((p) => p.id === listId);
      const cart = state.products.find((p) => p.id === productId);

      if (product.cart.includes(productId)) {
        product.sumUAH -= cart.priceUAH;
        product.sumUSD -= cart.priceUSD;
        product.count -= 1;
        product.cart = product.cart.filter((id) => id !== productId);
      }

      if (cart.inCart.includes(listId)) {
        cart.inCart = cart.inCart.filter((id) => id !== listId);
      }
    },
  },
});

export default store;
