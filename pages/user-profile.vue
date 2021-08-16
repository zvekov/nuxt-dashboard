<template>
  <div class="flex flex-col">
    <div class="text-xs uppercase font-light text-gray-500">User</div>
    <h1>User Profile</h1>
    {{ user }}
    <div class="w-4/5 mx-auto md:w-1/2 text-center my-12">
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <button
        @click.prevent="logoutUser"
        class="button--green"
        type="submit"
      >
        Logout
      </button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$strapi.user;
    }
  },
  methods: {
    logoutUser() {
      this.$strapi.logout();
      this.$router.push("/");
    }
  }
};
</script>
<style></style>
