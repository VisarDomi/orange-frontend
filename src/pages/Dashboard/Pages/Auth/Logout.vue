<template>
  <div>Logging you out...</div>
</template>
<script>
import { LOGOUT } from "@/store/actions.type";
export default {
  name: "Logout",
  created() {
    console.log("logging out");
    this.$store.dispatch(LOGOUT).then(() => {
      console.log("completed logout, redirecting");
      this.$router.push({ name: "Role" });
    });
  }
};
</script>

<style></style>
