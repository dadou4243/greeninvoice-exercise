<template>
  <div id="app">
    <!-- Route Outlet -->
    <app-header v-show="$route.path !=='/login'"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from "./components/Login.vue";
import AppHeader from "./components/AppHeader";

export default {
  name: "app",
  components: { AppHeader },
  created() {
    // this.$store.dispatch("getUserInfo").then(response => {
    //   console.log("response", response);
    // });
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
