<template>
  <div id="app">
    <!-- Route Outlet -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from "./components/Login.vue";

export default {
  name: "app"
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
}
</style>
