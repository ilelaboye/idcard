import Dashboard from "../views/dashboard/dashboard.vue";
import JumiaOrders from "../views/dashboard/jumia/orders.vue";
import KongaOrders from "../views/dashboard/konga/orders.vue";
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
    name: "jumiaOrders",
    component: JumiaOrders,
  },
  {
    path: "/konga-orders",
    name: "kongaOrders",
    component: KongaOrders,
  },
  {
    path: "/amazon-orders",
    name: "amazonOrders",
    component: AmazonOrders,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/transactions",
    name: "transactions",
    component: () => import("@/views/dashboard/transactions/index.vue"),
  },
  {
    path: "/admin-transactions",
    name: "adminTransactions",
    component: () =>
      import("@/views/dashboard/transactions/admin_transactions.vue"),
  },
];
export default dashboardRoutes;
