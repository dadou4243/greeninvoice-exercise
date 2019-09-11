<template>
  <header class="header">
    <nav>
      <green-logo></green-logo>
      <button @click="logout" class="logout-btn">יציאה</button>
    </nav>
  </header>
</template>

<script>
import GreenLogo from "./GreenLogo";

export default {
  name: "app-header",
  components: { GreenLogo },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 70px;
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);

  nav {
    padding-right: 1.25rem;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .logout-btn {
      color: #18c746;
      border: 1px solid #18c746;
    }
  }
}
</style>