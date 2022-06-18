import Vue from "vue";
import VueRouter from "vue-router";
import ShopList from "../views/ShopList.vue";
import ShopDetail from "../views/ShopDetail.vue";
import Registration from "../views/Registration.vue";
import Signin from "../views/Signin.vue";
import ProductList from "../views/ProductList.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
