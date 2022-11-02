import Vue from "vue";
import VueRouter from "vue-router";
import dashboardRoutes from "./dashboard";
import publicRoutes from "./public";
import Layout from "../views/dashboard/layout/layout.vue";
import PublicLayout from "../views/public/layout/layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: PublicLayout,
    children: publicRoutes,
  },
  {
    path: "",
    component: Layout,
    children: dashboardRoutes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
