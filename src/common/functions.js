export function loginReroute(router, role) {
  if (role == "admin") {
    router.push({ name: "Reservations" });
  }
  if (role == "secretary") {
    router.push({ name: "CompanyReservations" });
  }
  if (role == "employee") {
    router.push({ name: "EmployeeReservations" });
  }
  if (role == "driver"){
    router.push({ name: "DriverIncomingReservations"})
  }
}