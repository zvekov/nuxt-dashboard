<template>
  <div class="flex flex-col">
    <div class="text-xs uppercase font-light text-gray-500">User</div>
    <h1>User Profile</h1>
    <div class="w-4/5 mx-auto md:w-1/2 text-center my-12">
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <h1 class="font-bold text-2xl md:text-4xl mt-5">Login</h1>
      <div>
        <button
          @click.prevent="logoutUser"
          class="button--green"
          type="submit"
        >
          Login
        </button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     identifier: "",
  //     password: "",
  //     error: ""
  //   };
  // }
  methods: {
    async logoutUser(e) {
      e.preventDefault();
      const user = await this.$strapi.logout();
      if (user == null) {
        this.$nuxt.$router.push("/");
        document.documentElement.classList.remove("aside-compact");
      }
    }
  }
};
</script>
<style></style>
