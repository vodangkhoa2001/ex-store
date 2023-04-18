import config from "~/config";
import HeaderAndFooter from "~/layouts/HeaderAndFooter";
import Home from "~/pages/Home";
import SignUp from "~/pages/SignUp";
import Login from "~/pages/Login";
import Contact from "~/pages/Contact";
import About from "~/pages/About";
import Account from "~/pages/Account";
import Cart from "~/pages/Cart";
import ProductDetail from "~/pages/ProductDetail";
import CommingSoon from "~/pages/CommingSoon";

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.sign_up, component: SignUp, layout: null },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.about, component: About, layout: HeaderAndFooter },
  { path: config.routes.contact, component: Contact, layout: HeaderAndFooter },
  { path: config.routes.account, component: Account, layout: HeaderAndFooter },
  { path: config.routes.cart, component: Cart, layout: HeaderAndFooter },
  {
    path: config.routes.comming_soon,
    component: CommingSoon,
    layout: HeaderAndFooter,
  },
  {
    path: config.routes.product_detail,
    component: ProductDetail,
    layout: HeaderAndFooter,
  },
];
