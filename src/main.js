import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPlugin from "./material-dashboard";
import { CHECK_AUTH } from "./store/actions.type";
import { ApiService } from "./common/api.service";
import { yearFormat, hourFormat } from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

// Plugins
import App from "./App.vue";
import Chartist from "chartist";

// router setup
import routes from "./routes";
import store from "./store";

// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);

Vue.config.productionTip = false;
// filter
Vue.filter('money', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
  });
  return formatter.format(value);
});

Vue.filter("yearFormat", yearFormat);
Vue.filter("hourFormat", hourFormat);
Vue.filter("error", ErrorFilter);

ApiService.init();

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

// global library setup
Object.defineProperty(Vue.prototype, "$Chartist", {
  get() {
    return this.$root.Chartist;
  }
});

// Ensure we checked auth before each page load.
router.beforeEach(
  (to, from, next) => {
    Promise.all([store.dispatch(CHECK_AUTH)]).then(next);
  }
);
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
