import Dashboard from "../views/dashboard/dashboard.vue";
import JumiaOrders from "../views/dashboard/jumia/orders.vue";
import AmazonOrders from "../views/dashboard/amazon/orders.vue";
import Users from "../views/dashboard/user/index.vue";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/jumia-orders",
    name: "jumia-orders",
    component: JumiaOrders,
  },
  {
    path: "/amazon-orders",
    name: "amazon-orders",
    component: AmazonOrders,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
];
export default dashboardRoutes;
