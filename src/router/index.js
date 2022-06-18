import Vue from "vue";
import VueRouter from "vue-router";
import ShopList from "../views/ShopList.vue";
import ShopDetail from "../views/ShopDetail.vue";
import Registration from "../views/Registration.vue";
import Signin from "../views/Signin.vue";
import ProductList from "../views/ProductList.vue";
import ProductDescription from "../views/ProductDescription.vue";
import CartCheck from "../views/CartCheck.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ShopList",
    component: ShopList,
    meta: {
      title: 'お店一覧'
    },
  },
  {
    path: "/shop_detail",
    name: "ShopDetail",
    component: ShopDetail,
    meta: {
      title: '商品一覧'
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
    meta: {
      title: 'アカウント登録'
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    meta: {
      title: 'サインイン'
    },
  },
  {
    path: "/product_list",
    name: "ProductList",
    component: ProductList,
    meta: {
      title: '商品一覧'
    },
  },
  {
    path: "/product_description",
    name: "ProductDescription",
    component: ProductDescription,
    meta: {
      title: '商品詳細'
    },
  },
  {
    path: "/cart_check",
    name: "CartCheck",
    component: CartCheck,
    meta: {
      title: '買物内容確認'
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
