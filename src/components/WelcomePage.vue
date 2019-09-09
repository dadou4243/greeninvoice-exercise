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
      // const loginInfo = {
      //   email: this.email,
      //   password: this.password
      // };
      // console.log("loginInfo:", loginInfo);
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
    this.$store.dispatch("getUserInfo");
    this.$store.dispatch("getBusinesses");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-container {
}
</style>
