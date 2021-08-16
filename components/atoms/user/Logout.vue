<template>
  <button
    @click.prevent="logoutUser"
    type="submit"
  >
    Logout
  </button>
</template>

<script>
export default {
  methods: {
    logoutUser() {
      this.$strapi.logout();
      this.$router.push("/");
    }
  }
};
</script>
