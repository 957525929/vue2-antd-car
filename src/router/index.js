import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index.vue"),
      },
      //安全设置 -首页
      {
        path: "/safe",
        name: "Safe",
        component: () => import("../views/safe/index.vue"),
      },
      {
        path: "/password",
        name: "Password",
        component: () => import("../views/safe/password.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
