import EmployeeDashboardLayout from "@/pages/Dashboard/Layout/EmployeeDashboardLayout.vue";

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
      meta: setMeta("Employee Reservation Detail")
    },
  ]
};
