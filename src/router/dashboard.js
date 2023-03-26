import Dashboard from "../views/dashboard/dashboard.vue";

import KongaOrders from "../views/dashboard/konga/orders.vue";
import AmazonOrders from "../views/dashboard/amazon/orders.vue";
import Users from "../views/dashboard/user/index.vue";
import OrderView from "@/views/dashboard/order.vue";

import JumiaLayout from "@/views/dashboard/jumia/layout.vue";

import JumiaRoutes from "./jumia";
import CompanyRoutes from "./company";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },

  {
    path: "jumia",
    component: JumiaLayout,
    children: JumiaRoutes,
  },
  {
    path: "companies",
    component: () => import("@/views/dashboard/company/layout.vue"),
    children: CompanyRoutes,
  },
  {
    path: "/order/:id",
    name: "order",
    component: OrderView,
  },

  // {
  //   path: "/jumia-orders",
  //   name: "jumiaOrders",
  //   component: JumiaOrders,
  // },
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
    path: "/demo",
    name: "demo",
    component: () => import("@/views/dashboard/demo/index.vue"),
  },
  {
    path: "/admin-transactions",
    name: "adminTransactions",
    component: () =>
      import("@/views/dashboard/transactions/admin_transactions.vue"),
  },
];
export default dashboardRoutes;
