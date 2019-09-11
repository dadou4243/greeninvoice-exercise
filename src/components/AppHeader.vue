<template>
  <header class="header">
    <nav>
      <green-logo></green-logo>
      <ul class="menu">
        <li>
          <router-link to="/welcome">לובי</router-link>
        </li>
        <li>
          <router-link to="/user">החשבון שלי</router-link>
        </li>
        <li>
          <div @click="logout" class="logout-btn">יציאה</div>
        </li>
      </ul>
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
@import "../scss/_variables.scss";

.header {
  height: $header-height;
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
  opacity: 0.95;

  nav {
    padding-right: 1.25rem;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    ul.menu {
      display: block;
      position: relative;
      padding-right: 1.25rem;

      li {
        white-space: nowrap;
        text-align: center;
        display: inline-block;
        margin: 0 1.75rem 0 0;

        a {
          color: #1b3445;
          text-decoration: none;
          display: block;
          line-height: 60px;

          &:hover {
            color: $primary-color;
          }
        }

        .logout-btn {
          line-height: 34px;
          border-radius: 34px;
          margin: 0 2px;
          font-weight: 400;
          padding: 0 1.4em;
        }
      }
    }

    .logout-btn {
      color: $primary-color;
      border: 1px solid $primary-color;
      cursor: pointer;
      transition: all 0.3s ease 0s;

      &:hover {
        background: #75bdcd;
        color: #fff;
        border: 1px solid #75bdcd;
        transition: all 0.3s ease 0s;
      }
    }
  }
}
</style>