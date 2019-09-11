<template>
  <main class="welcome-container">
    <div v-if="isLoginLoading">loading...</div>
    <h1 v-if="!isLoginLoading">שלום {{user.firstName}} {{user.lastName}}</h1>
    <div></div>
    <div></div>
  </main>
</template>

<script>
export default {
  name: "welcome-page",
  data() {
    return {
      loading: true
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isLoginLoading() {
      return this.$store.getters.getIsLoginLoading;
    }
  },
  mounted() {
    if (!this.user.id) {
      this.$store
        .dispatch("getUserInfo")
        .then(response => {
          // console.log("response:", response);
          this.loading = false;
        })
        .catch(error => {
          // console.log(error);
          this.$router.push("/login");
          this.loading = false;
        });
    }
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
