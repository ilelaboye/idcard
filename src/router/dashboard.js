import Dashboard from "../views/dashboard/dashboard.vue";
import Users from "../views/dashboard/users.vue";

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
];
export default dashboardRoutes;
