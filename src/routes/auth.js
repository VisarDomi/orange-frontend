const AuthLayout = () => import("@/pages/Dashboard/Layout/AuthLayout.vue");

// Auth pages
const Role = () => import("@/pages/Dashboard/Pages/Auth/Role.vue");
const Logout = () => import("@/pages/Dashboard/Pages/Auth/Logout.vue");
const Login = () => import("@/pages/Dashboard/Pages/Auth/Login.vue");
const Register = () => import("@/pages/Dashboard/Pages/Auth/Register.vue");
const Lock = () => import("@/pages/Dashboard/Pages/Auth/Lock.vue");

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
