import EmployeeDashboardLayout from "@/pages/Dashboard/Layout/EmployeeDashboardLayout.vue";
import EmployeeReservations from "@/pages/Dashboard/Pages/Employee/EmployeeReservations.vue";
// Employee pages
import EmployeeReservationDetail from "@/pages/Dashboard/Pages/Employee/EmployeeReservationDetail.vue";

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
