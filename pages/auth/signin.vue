<template>
  <div class="flex flex-col w-full md:max-w-md md:px-12">
    <div class="py-6 px-8 bg-white rounded-lg shadow-xs">
      <h1>Signin</h1>
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <form @submit="loginUser">
        <div>
          <input
            v-model="identifier"
            class="p-3 my-5 border w-full"
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <input
            v-model="password"
            class="p-3 my-5 border w-full"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <button
            :disabled="identifier === '' || password === ''"
            class="button--green"
            type="submit"
          >
            Login
          </button>
          or
          <nuxt-link to="/auth/signup">Sign Up</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      identifier: "demo@demo.com",
      password: "demo@demo.com",
      error: ""
    };
  },
  methods: {
    async loginUser(e) {
      e.preventDefault();
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password
        });
        console.log(user);
        if (user !== null) {
          this.error = "";
          this.$nuxt.$router.push("/");
        }
      } catch (error) {
        this.error = "Error in login credentials";
      }
    }
  }
};
</script>
<style></style>
