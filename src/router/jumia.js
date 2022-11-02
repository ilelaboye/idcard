import Jumia from "../views/dashboard/jumia/index.vue";
import JumiaProductView from "../views/dashboard/jumia/view.vue";
import JumiaCart from "../views/dashboard/jumia/cart.vue";
import JumiaCheckout from "../views/dashboard/jumia/checkout.vue";

const JumiaRoutes = [
  {
    path: "/jumia",
    name: "jumia",
    component: Jumia,
  },
  {
    path: "/jumia/product/:link",
    name: "jumia-product-view",
    component: JumiaProductView,
  },
  {
    path: "/jumia/cart",
    name: "jumia-cart",
    component: JumiaCart,
  },
  {
    path: "/jumia/checkout",
    name: "jumia-checkout",
    component: JumiaCheckout,
  },
];
export default JumiaRoutes;
