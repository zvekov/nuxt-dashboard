<template>
  <div class="flex flex-col w-full md:max-w-md md:px-12">
    <div class="py-6 px-8 bg-white rounded-lg shadow-xs">
      <h1>Signup</h1>
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <form @submit="createUser">
        <div>
          <input
            v-model="email"
            class="p-3 my-5 border w-full"
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <input
            v-model="username"
            class="p-3 my-5 border w-full"
            type="text"
            placeholder="username"
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
            class="button--green"
            :disabled="email === '' || password === '' || username === ''"
            type="submit"
          >
            Signup
          </button>
          or
          <nuxt-link to="/auth/signin">Sign
            <In></In>
          </nuxt-link>
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
