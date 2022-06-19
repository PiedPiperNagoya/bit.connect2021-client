import Vue from "vue";
import VueRouter from "vue-router";
import ShopList from "../views/ShopList.vue";
import ShopDetail from "../views/ShopDetail.vue";
import Registration from "../views/Registration.vue";
import RegistrationCompleted from "../views/RegistrationCompleted.vue";
import Signin from "../views/Signin.vue";
import ProductList from "../views/ProductList.vue";
import ProductDescription from "../views/ProductDescription.vue";
import CartCheck from "../views/CartCheck.vue";
import ChildCreate from "../views/ChildCreate";
import ChildManage from "../views/ChildManage";
import ShoppingList from '../views/child/ShoppingList'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ShopList",
    component: ShopList,
    meta: {
      title: "お店一覧",
    },
  },
  {
    path: "/shop_detail",
    name: "ShopDetail",
    component: ShopDetail,
    meta: {
      title: "商品一覧",
    },
  },
  {
    path: "/signup",
    name: "Registration",
    component: Registration,
    meta: {
      title: "アカウント登録",
    },
  },
  {
    path: "/registrationCompleted",
    name: "RegistrationCompleted",
    component: RegistrationCompleted,
    meta: {
      title: "登録完了",
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    meta: {
      title: "サインイン",
    },
  },
  {
    path: "/product_list/:id",
    name: "ProductList",
    component: ProductList,
    meta: {
      title: "商品一覧",
    },
  },
  {
    path: "/product_description",
    name: "ProductDescription",
    component: ProductDescription,
    meta: {
      title: "商品詳細",
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
  {
    path: "/child",
    name: "ChildManage",
    component: ChildManage,
    meta: {
      title: "お子様情報の管理",
    },
  },
  {
    path: "/child/create",
    name: "ChildCreate",
    component: ChildCreate,
    meta: {
      title: "お子様情報の追加",
    },
  },
  {
    path: "/quest",
    name: "ShoppingList",
    component: ShoppingList,
    meta: {
      mode: "quest",
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
