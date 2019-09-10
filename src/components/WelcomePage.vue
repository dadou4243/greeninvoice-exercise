<template>
  <div class="login-container">
    <h1>Welcome</h1>
    <div>{{user.firstName}}</div>
    <div>{{user.lastName}}</div>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    logout() {
      console.log("logout");
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    this.$store
      .dispatch("getUserInfo")
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        console.log(error);
        this.$router.push("/login");
      });
    // this.$store.dispatch("getBusinesses");
    // this.$store.dispatch("getJwtToken");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-container {
}
</style>
