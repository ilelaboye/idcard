import Login from "../views/public/login.vue";

const publicRoutes = [
  {
    path: "",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];
export default publicRoutes;
