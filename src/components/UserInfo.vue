<template>
  <main class="user-info-container" v-if="user.id">
    <h1>החשבון שלי</h1>
    <section>
      <div class="personal-info">
        <h2>אישי</h2>
        <div class="info-field">
          <div class="info-title">שם פרטי</div>
          <div class="info-value">{{user.firstName}}</div>
        </div>

        <div class="info-field">
          <div class="info-title">שם משפחה</div>
          <div class="info-value">{{user.lastName}}</div>
        </div>

        <div class="info-field">
          <div class="info-title">מייל</div>
          <div class="info-value">{{user.email}}</div>
        </div>
      </div>

      <div class="business-info">
        <h2>עסק</h2>

        <div class="info-field">
          <div class="info-title">שם</div>
          <div class="info-value">{{user.businesses[0].name}}</div>
        </div>

        <div class="info-field">
          <div class="info-title">כתובת</div>
          <div class="info-value">{{user.businesses[0].address}}</div>
        </div>

        <div class="info-field">
          <div class="info-title">עיר</div>
          <div class="info-value">{{user.businesses[0].city}}</div>
        </div>

        <div class="info-field">
          <div class="info-title">מייל</div>
          <div class="info-value">{{user.businesses[0].taxId}}</div>
        </div>

        <div class="info-field">
          <div class="info-title">מטבע</div>
          <div class="info-value">{{user.businesses[0].settings.documentCurrency}}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "user-info",
  data() {
    return {};
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
        .then(response => {})
        .catch(error => {
          this.$router.push("/login");
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.user-info-container {
  section {
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin: 20px 0;
    padding: 3rem 3rem;
    display: flex;

    .personal-info,
    .business-info {
      flex: 1;
    }

    h2 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .info-title {
      color: #586d7b;
      font-size: 0.9rem;
      white-space: nowrap;
    }

    .info-value {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.02rem;
      margin-bottom: 1.5rem;
    }
  }
}

@media screen and (max-width: 980px) {
  section {
    flex-direction: column;
  }
  .business-info {
    margin-top: 2rem;
  }
}
</style>