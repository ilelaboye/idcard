import Register from "../views/public/register.vue";
import Login from "../views/public/login.vue";

const publicRoutes = [
  {
    path: "",
    redirect: "/register",
  },
  {
    path: "/admin/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];
export default publicRoutes;
