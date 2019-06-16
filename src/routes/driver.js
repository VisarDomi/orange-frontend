const DriverDashboardLayout = () => import("@/pages/Dashboard/Layout/DriverDashboardLayout.vue");
const DriverIncomingReservations = () => import("@/pages/Dashboard/Pages/Driver/DriverIncomingReservations.vue");
const DriverAcceptedReservations = () => import("@/pages/Dashboard/Pages/Driver/DriverAcceptedReservations.vue");
const DriverReservationDetails = () => import("@/pages/Dashboard/Pages/Driver/DriverReservationDetails.vue");

import { setMeta } from './common';

export const driver = {
  path: "/driver",
  component: DriverDashboardLayout,
  children: [
    {
      path: "/driver-reservationdetail-:id",
      name: "DriverReservationDetail",
      components: { default: DriverReservationDetails},
      meta: setMeta("Your itinerary details")
    },
    {
      path: "/driver-incoming-reservations",
      name: "DriverIncomingReservations",
      components: {default : DriverIncomingReservations},
      meta: setMeta("Your incoming reservations")
    },
    {
        path: "/driver-accepted-reservations",
        name: "DriverAcceptedReservations",
        components: {default : DriverAcceptedReservations},
        meta: setMeta("Your accepted reservations")
      }
  ]
};
