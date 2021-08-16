<template>
  <div class="flex flex-col w-full md:max-w-md md:px-3">
    <div class="py-6 px-8 bg-white rounded-lg shadow-xs">
      <h1 class="mb-3">Sign Up to Nuxt dashboard</h1>
      <div class="mb-3">We use
        <a href="https://strapi.io" target="_blank" class="text-green-700 hover:text-green-900">
          Strapi</a> for REST & GraphQL quiries.
      </div>
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <form @submit="createUser">
        <div>
          <ui-input-float class="my-5"
                          :text.sync="email"
                          :label="'Email'"
                          :name="'email'"
                          :type="'email'"
                          :placeholder="'Email'"
                          :required="true"
          />
        </div>
        <div>
          <ui-input-float class="my-5"
                          :text.sync="username"
                          :label="'Username'"
                          :name="'username'"
                          :type="'text'"
                          :placeholder="'Username'"
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
          <div>
            <ui-input-float class="my-5"
                            :text.sync="password"
                            :label="'Repeat Password'"
                            :name="'repeat-password'"
                            :type="'password'"
                            :placeholder="'Repeat Password'"
                            :required="true"
            />
          </div>
        </div>
        <div class="mt-5 mb-5 flex flex-wrap justify-between items-center">
          <div class="w-full flex items-center">
            <ui-input-checkbox />
            I agree with the terms of use privacy policy.
          </div>
          <div class="mt-6">Have an Account
            <nuxt-link to="/auth/signin" class="text-green-700 hover:text-green-900">Sign In</nuxt-link>
          </div>
          <button
            class="bg-green-800 text-gray-100 rounded-lg px-6 py-3 font-bold mt-6"
            :disabled="email === '' || password === '' || username === ''"
            type="submit"
          >
            Sign Up
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
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async createUser(e) {
      e.preventDefault();
      try {
        const newUser = await this.$strapi.register({
          email: this.email,
          username: this.username,
          password: this.password
        });
        console.log(newUser);
        if (newUser !== null) {
          this.error = "";
          this.$nuxt.$router.push("/");
        }
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>
<style></style>
