<template>
  <div class="login-container">
    <div class="login-image"></div>

    <div class="login-form">
      <div class="logo-container">
        <green-logo></green-logo>
      </div>

      <div class="form-container">
        <div class="main-part">
          <h1>התחברות לחשבונית ירוקה</h1>
          <form>
            <div class="field-container">
              <div class="label-container">
                <label :class="{ 'on-focus': (isEmailFocus || email.length) }">מייל</label>
              </div>
              <input
                type="text"
                v-model="email"
                ref="emailInput"
                :class="{ invalid: !isEmailValid }"
                @focus="isEmailFocus = true"
                @blur="isEmailFocus = false"
              />
              <div class="validation-text active">
                <span
                  v-show="!isEmailValid && !isEmailFocus"
                  class="error-message"
                >כתובת המייל אינה תקינה</span>
                <span v-show="isEmailValid || isEmailFocus">כתובת המייל איתה נרשמת לחשבונית ירוקה</span>
              </div>
            </div>

            <div class="field-container">
              <div class="label-container">
                <label class="on-focus">סיסמה</label>
              </div>
              <input
                type="password"
                minlength="6"
                maxlength="16"
                placeholder="8-16 תווים"
                v-model="password"
                :class="{ invalid: !isPasswordValid && isPasswordDirty }"
                @focus="isPasswordFocus = true; isPasswordDirty = true;"
                @blur="isPasswordFocus = false"
              />
              <div
                class="validation-text"
                :class="{active: !isPasswordValid && !isPasswordFocus && isPasswordDirty}"
              >
                <span class="error-message">סיסמה קצרה מדי</span>
              </div>
            </div>
          </form>

          <div class="errors">{{errors}}</div>

          <div class="buttons">
            <button @click="login" class="login">כניסה</button>
            <button class="google">כניסה עם גוגל</button>
          </div>
        </div>

        <login-footer></login-footer>
      </div>
    </div>
  </div>
</template>

<script>
import GreenLogo from "./GreenLogo";
import LoginFooter from "./LoginFooter";

export default {
  name: "login-page",
  components: { GreenLogo, LoginFooter },
  data() {
    return {
      email: "",
      password: "",
      errors: "",
      isEmailFocus: true,
      isPasswordFocus: false,
      isPasswordDirty: false
    };
  },
  methods: {
    login() {
      if (!this.isEmailValid) {
        this.errors = "error";
        return;
      }

      const loginInfo = {
        email: this.email,
        password: this.password
      };

      this.$store
        .dispatch("login", loginInfo)
        .then(res => {
          this.$router.push("/welcome");
        })
        .catch(error => {
          if (error.response.data) {
            this.errors = error.response.data.errorMessage;
          }
        });
    }
  },
  computed: {
    isEmailValid() {
      return this.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    },
    isPasswordValid() {
      return this.password.length >= 8 && this.password.length <= 16;
    }
  },
  mounted() {
    // Auto focus the email input on start
    this.$refs.emailInput.focus();
  }
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.login-container {
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;

  .login-form {
    flex: 1;
    display: flex;
    flex-direction: column;

    .logo-container {
      padding: 2rem 4rem;
    }

    .form-container {
      width: 365px;
      margin: 0 15%;
      flex: 1;
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .main-part {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;

        h1 {
          color: $secondary-color;
          margin-bottom: 10%;
          letter-spacing: -0.05rem;
          font-weight: 900;
          font-size: 37px;
          transform: scale(1, 1.4);
        }

        form {
          .field-container {
            margin-top: 2rem;
            position: relative;
          }

          input {
            width: 100%;
            border: 0;
            border-bottom: 1px solid #a2adb5;
            background: 0;
            font-size: 0.9rem;
            line-height: 2.5rem;
            // padding: 5px 10px;

            &.invalid {
              border-bottom: 1px solid $alert-color;
            }

            &:focus {
              border-bottom: 1px solid $primary-color;
            }
          }
        }

        label {
          position: absolute;
          right: 0;
          top: 0.8rem;
          transition: 0.2s ease-out;
          font-size: 1rem;
          pointer-events: none;

          &.on-focus {
            font-size: 0.85rem;
            transform: translateY(-140%);
          }
        }

        .validation-text {
          color: #a2adb5;
          font-size: 0.9rem;
          opacity: 0;
          transition: 0.2s opacity ease-out, 0.2s color ease-out;

          .error-message {
            color: $alert-color;
            height: 2rem;
          }

          &.active {
            opacity: 1;
            transition: 0.2s opacity ease-out, 0.2s color ease-out;
          }
        }
      }

      .buttons {
        margin: 2rem 0 0 0;
        display: flex;

        button {
          background: $secondary-color;
          border: 1px solid $secondary-color;
          color: #ffffff;
          font-size: 0.8rem;

          &.login {
            flex: 1;
            margin-left: 1rem;
          }

          &.google {
            background: #ffffff;
            color: $secondary-color;
            background: url(../assets/svg/Google_G.svg) #fff no-repeat 0.75rem
              center;
            background-size: 20px;
            padding: 0 1.75rem 0 2.75rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  .login-image {
    background: url(../assets/svg/green_login_page.svg);
    // height: 100%;
    background-repeat: no-repeat;
    background-color: #ffdcdc;
    background-position: right center;
    background-size: 80%;
    flex: 1;
  }
}
</style>
