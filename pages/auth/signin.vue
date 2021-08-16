<template>
  <div class="flex flex-col w-full md:max-w-md md:px-3">
    <div class="py-6 px-8 bg-white rounded-lg shadow-xs">
      <h1 class="mb-3">Sign In to Your Account</h1>
      <div class="mb-3">To keep connected with us please login with your personal info.</div>
      <div class="p-3 border rounded-lg">
        <p class="opacity-50">Email: demo@demo.com</p>
        <p class="opacity-50">Password: demo@demo.com</p>
      </div>
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
        <div class="mt-5 mb-5 flex flex-wrap justify-between items-center">
          <div class="w-1/2 flex items-center">
            <ui-input-checkbox />
            Remember me
          </div>
          <div class="text-right w-1/2">
            <nuxt-link to="/auth/forgot" class="text-green-700 hover:text-green-900">Forgot the password?</nuxt-link>
          </div>
          <div class="mt-6">Create an Account
            <nuxt-link to="/auth/signup" class="text-green-700 hover:text-green-900">Sign Up</nuxt-link>
          </div>
          <button
            :disabled="identifier === '' || password === ''"
            class="bg-green-800 text-gray-100 rounded-lg px-6 py-3 font-bold mt-6"
            type="submit"
          >
            Sign In
          </button>
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
