<template>
  <div class="logo">
    <img src="../assets/svg/green_leaf.svg" class="leaf-logo" alt="leaf logo" />

    <span class="bold">חשבונית</span>

    <span class="light">ירוקה</span>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped lang="scss">
.logo {
  color: #18c746;
  font-size: 36px;
  display: flex;
  flex-direction: row;
  padding: 2rem 4rem;

  .light {
    font-weight: 400;
  }

  .bold {
    font-weight: 900;
    margin-left: 5px;
  }

  .leaf-logo {
    width: 23px;
    margin-left: 7px;
  }
}
</style>
