import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPlugin from "./material-dashboard";
import { ApiService } from "./store/services/api";
import { getToken } from "./store/services/jwt";
import { getUser } from "./store/services/userstorage";
import { loginReroute } from "@/common/functions";
import { yearFormat, hourFormat, prettyDate } from "./common/date.filter";
import ErrorFilter from "./common/error.filter";
import * as VueGoogleMaps from "vue2-google-maps";

// Plugins
import App from "./App";
import Chartist from "chartist";

// router setup
import routes from "./routes";
import store from "./store";
import "./registerServiceWorker";
console.log("first");
console.log("getToken()", getToken());
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw",
    libraries: "places"
  }
});
// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);

Vue.config.productionTip = false;
// filter
Vue.filter("money", function(value) {
  if (typeof value !== "number") {
    return value;
  }
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});

Vue.filter("yearFormat", yearFormat);
Vue.filter("hourFormat", hourFormat);
Vue.filter("prettyDate", prettyDate);
Vue.filter("error", ErrorFilter);

ApiService.init();

// configure router
const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: routes,
  linkExactActiveClass: "nav-item active"
});

// global library setup
Object.defineProperty(Vue.prototype, "$Chartist", {
  get() {
    return this.$root.Chartist;
  }
});

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {
  console.log("router.beforeEach to: ", to);
  console.log("router.beforeEach from: ", from);
  console.log("router.beforeEach next: ", next);
  ApiService.setHeader();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (getToken() == null) {
      next({
        name: "Login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    if (getToken() != null) {
      console.log("should reroute to respective role homepage");
      let role = "";
      role = getUser().role;
      console.log("role is", role);
      loginReroute(router, role);
    } else {
      next();
    }
  }
});

// dinamically change title and other metadata
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );
  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();
  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));
  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
