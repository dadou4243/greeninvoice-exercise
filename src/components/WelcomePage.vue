<template>
  <main class="welcome-container">
    <h1>שלום {{user.firstName}} {{user.lastName}}</h1>
    <div></div>
    <div></div>
    <!-- <button @click="logout">logout</button> -->
  </main>
</template>

<script>
export default {
  name: "welcome-page",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // logout() {
    //   this.$store.dispatch("logout");
    //   this.$router.push("/login");
    // }
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
.welcome-container {
}
</style>
