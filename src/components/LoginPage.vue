<template>
  <div class="login-container">
    <div class="left-part"></div>

    <div class="right-part">
      <div class="logo">
        <img src="../assets/svg/green_leaf.svg" class="leaf-logo" alt="leaf logo" />

        <span class="bold">חשבונית</span>

        <span class="light">ירוקה</span>
      </div>

      <div class="form-container">
        <h1>התחברות לחשבונית ירוקה</h1>
        <form>
          <div class="field-container">
            <div>
              <label class="label-container">Email</label>
            </div>
            <input type="text" placeholder="מייל" v-model.lazy="email" />
          </div>

          <div class="field-container">
            <div class="label-container">
              <label>password</label>
            </div>
            <input type="password" placeholder="סיסמה" v-model="password" />
          </div>
        </form>

        <div class="buttons">
          <button @click="login" class="login">כניסה</button>
          <button class="google">כניסה עם גוגל</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const loginInfo = {
        email: this.email,
        password: this.password
      };
      console.log("loginInfo:", loginInfo);
      this.$store.dispatch("login", loginInfo).then(res => {
        console.log("res:", res);
        // this.$router.push("/welcome");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-container {
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  width: 100%;

  .right-part {
    flex: 1;
    display: flex;
    flex-direction: column;

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

    .form-container {
      width: 365px;
      margin: 0 20%;
      flex: 1;
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        color: #506aed;
        margin-bottom: 10%;
        letter-spacing: -0.05rem;
        font-weight: 900;
        font-size: 37px;
        transform: scale(1, 1.4);
      }

      form {
        input {
          width: 100%;
          border: 0;
          border-bottom: 1px solid black;
          background: 0;
          font-size: 16px;
          padding: 5px 10px;
          margin: 0 0 20px 0;
        }
      }

      .buttons {
        margin: 2rem 0 0 0;
        display: flex;

        button {
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 5rem;
          background: #506aed;
          border: 1px solid #506aed;
          margin: 0 0.5rem;
          color: #ffffff;
          cursor: pointer;
          display: inline-block;
          padding: 0 2rem;
          line-height: 2.5rem;
          text-decoration: none;
          white-space: nowrap;
          text-align: center;
          transition: width 0.25s ease-in-out;
          outline: none;

          &.login {
            flex: 1;
          }

          &.google {
            background: #ffffff;
            color: #506aed;
            background: url(../assets/svg/Google_G.svg) #fff no-repeat 0.75rem
              center;
            background-size: 20px;
            padding: 0 1.75rem 0 2.75rem;
          }
        }
      }
    }
  }

  .left-part {
    background: url(../assets/svg/green_login_page.svg);
    height: 100%;
    background-repeat: no-repeat;
    background-color: #ffdcdc;
    background-position: right center;
    background-size: 80%;
    flex: 1;
  }
}
</style>
