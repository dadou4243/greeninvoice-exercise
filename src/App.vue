<template>
  <div id="app">
    <app-header v-show="$route.path !=='/login'"></app-header>

    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "app",
  components: { AppHeader }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .router-link-exact-active {
    color: #18c746;
  }
}
</style>
