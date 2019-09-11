<template>
  <main>
    <h1>User Info</h1>
  </main>
</template>

<script>
export default {
  name: "user-info",
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

<style>
</style>