import Dashboard from "../views/dashboard/dashboard.vue";
import Users from "../views/dashboard/users.vue";
import User from "../views/dashboard/user.vue";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/user/:id",
    name: "user",
    component: User,
  },
];
export default dashboardRoutes;
