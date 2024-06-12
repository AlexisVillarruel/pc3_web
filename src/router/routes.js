import Loging from "src/components/Auth/Loging.vue";
import ProductPage from "src/components/Auth/ProductPage"

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
    path: "/ProductPage",
    component: () => import("components/Auth/ProductPage.vue"),
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
