import AuthLayout from "@/pages/Dashboard/Layout/AuthLayout.vue";

// Auth pages
import Role from "@/pages/Dashboard/Pages/Auth/Role.vue";
import Logout from "@/pages/Dashboard/Pages/Auth/Logout.vue";
import Login from "@/pages/Dashboard/Pages/Auth/Login.vue";
import Register from "@/pages/Dashboard/Pages/Auth/Register.vue";
import Lock from "@/pages/Dashboard/Pages/Auth/Lock.vue";

import { setMeta } from './common';

export const auth = {
  path: "/auth",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "/logout",
      name: "Logout",
      components: {default: Logout},
      meta: setMeta("Logout")
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: setMeta("Login", true)
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: setMeta("Register", true)
    },
    {
      path: "/role",
      name: "Role",
      component: Role,
      meta: setMeta("Role", true)
    },
    {
      path: "/lock",
      name: "Lock",
      component: Lock,
      meta: setMeta("Lock", true)
    }
  ],
  meta: setMeta("Authentication", true)
};
