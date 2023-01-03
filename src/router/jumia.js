import JumiaOrders from "@/views/dashboard/jumia/orders.vue";
// import JumiaView from "../views/dashboard/jumia/view.vue";

const JumiaRoutes = [
  {
    path: "/jumia",
    name: "jumiaOrders",
    component: JumiaOrders,
  },
  // {
  //   path: "/jumia/order/:id",
  //   name: "jumia-view",
  //   component: JumiaView,
  // },
];
export default JumiaRoutes;
