<template>
  <div class="flex flex-col w-full md:max-w-md md:px-12">
    <div class="py-6 px-8 bg-white rounded-lg shadow-xs">
      <h1 class="mb-4">Signin</h1>
      <p class="opacity-50">Email: demo@demo.com</p>
      <p class="opacity-50">Password: demo@demo.com</p>
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <form @submit="loginUser">
        <div>
          <ui-input-float class="my-5"
                          :text.sync="identifier"
                          :label="'Your Email'"
                          :type="'email'"
                          :name="'email'"
                          :placeholder="'Your Email'"
                          :required="true"
          />
        </div>
        <div>
          <ui-input-float class="my-5"
                          :text.sync="password"
                          :label="'Password'"
                          :name="'password'"
                          :type="'password'"
                          :placeholder="'Password'"
                          :required="true"
          />
        </div>
        <div class="mt-8 mb-5">
          <button
            :disabled="identifier === '' || password === ''"
            class="bg-green-800 text-gray-100 rounded-lg px-4 py-2"
            type="submit"
          >
            Login
          </button>
          <span class="px-2">or</span>
          <nuxt-link to="/auth/signup" class="lowercase">SignUp</nuxt-link>
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
      identifier: "",
      password: "",
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
