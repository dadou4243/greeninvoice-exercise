<template>
  <div class="login-footer">
    <div>חשבונית ירוקה &copy; 2019</div>
    <div class="bottom-line">
      <div>הפקת חשבוניות ומסמכים עסקיים באינטרנט</div>
      <a class="join-link">להצתרף חינם</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-footer"
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.login-footer {
  font-size: 0.8rem;
  width: 100%;
  padding: 2rem 0 1rem 0;
  line-height: 1.5rem;

  .bottom-line {
    display: flex;
    justify-content: space-between;

    a.join-link {
      color: $primary-color;
      text-decoration: underline;
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>
