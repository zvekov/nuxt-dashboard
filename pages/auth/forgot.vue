<template>
  <div class="flex flex-col w-full md:max-w-md md:px-3">
    <div class="py-6 px-8 bg-white rounded-lg shadow-xs">
      <h1 class="mb-3">Forgot your password?</h1>
      <div class="mb-3">Enter your email address and we'll send you an email with instructions to reset your password.
      </div>
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <form @submit="loginUser">
        <div>
          <ui-input-float class="mt-5"
                          :text.sync="email"
                          :label="'Your Email'"
                          :type="'email'"
                          :name="'email'"
                          :placeholder="'Your Email'"
                          :required="true"
          />
        </div>
        <div class="mb-5 flex flex-wrap justify-between items-center">
          <div class="mt-6">Remember password
            <nuxt-link to="/auth/signin" class="text-green-700 hover:text-green-900">Sign In</nuxt-link>
          </div>
          <button
            :disabled="email === ''"
            class="bg-green-800 text-gray-100 rounded-lg px-6 py-3 font-bold mt-6"
            type="submit"
          >
            Reset
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
      email: "",
      error: ""
    };
  },
  methods: {
    async loginUser(e) {
      e.preventDefault();
      try {
        const user = await this.$strapi.forgotPassword({
          email: this.email
        });
        console.log(user);
        if (user !== null) {
          this.error = "";
          this.$nuxt.$router.push("/");
        }
      } catch (error) {
        this.error = "Email not found";
      }
    }
  }
};
</script>
<style></style>
