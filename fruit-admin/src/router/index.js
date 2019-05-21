import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import * as types from "../store/types";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: resolve => require(["@/components/Home"], resolve),
    children:[{
      path：'/employees'，
      name：'employees'，
      components：resolve => require(["@/components/employees"]
    }]
  },
  {
    path: "/login",
    name: "Login",
    component: resolve => require(["@/components/Login"], resolve)
  }
];

// 页面刷新时，重新赋值token
if (window.sessionStorage.getItem("token")) {
  store.commit(types.LOGIN, window.sessionStorage.getItem("token"));
}

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
