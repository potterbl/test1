import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from "@/page/ProductsPage";
import OrdersPage from "@/page/OrdersPage";

const routes = [
  {
    path: "/",
    component: ProductsPage,
  },
  {
    path: "/orders",
    component: OrdersPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
