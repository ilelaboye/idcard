import Register from "../views/public/register.vue";
import AdminLogin from "../views/public/login.vue";
import Verify from "../views/public/verify.vue";

const publicRoutes = [
  {
    path: "",
    component: Verify,
    name: "verify",
  },
  {
    path: "/verify",
    component: Verify,
    name: "verify",
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];
export default publicRoutes;
