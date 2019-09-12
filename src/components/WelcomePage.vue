<template>
  <main class="welcome-container">
    <h1 v-if="user.id">שלום {{user.firstName}} {{user.lastName}}</h1>
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
    }
  },
  mounted() {
    if (!this.user.id) {
      this.$store
        .dispatch("getUserInfo")
        .then(() => {})
        .catch(error => {
          if (error.status === "401") {
            this.$router.push("/login");
            this.loading = false;
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
.welcome-container {
}
</style>
