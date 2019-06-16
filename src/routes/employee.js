const EmployeeDashboardLayout = () => import("@/pages/Dashboard/Layout/EmployeeDashboardLayout.vue");
const EmployeeReservations = () => import("@/pages/Dashboard/Pages/Employee/EmployeeReservations.vue");
// Employee pages
const EmployeeReservationDetail = () => import("@/pages/Dashboard/Pages/Employee/EmployeeReservationDetail.vue");

import { setMeta } from './common';

export const employee = {
  path: "/employee",
  component: EmployeeDashboardLayout,
  children: [
    {
      path: "/employee-reservationdetail-:id",
      name: "EmployeeReservationDetail",
      components: { default: EmployeeReservationDetail},
      meta: setMeta("Your itinerary details")
    },
    {
      path: "/employee-reservations",
      name: "EmployeeReservations",
      components: {default : EmployeeReservations},
      meta: setMeta("Your reservations")
    }
  ]
};
