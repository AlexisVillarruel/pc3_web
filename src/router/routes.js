import Loging from "src/components/Auth/Loging.vue";
import Product from "components/Auth/Product.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/Loging",
    component: () => import("components/Auth/Loging.vue"),
  },

  {
    path: "/Product",
    component: () => import("components/Auth/Product.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
