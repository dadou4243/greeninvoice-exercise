<template>
  <div class="login-container">
    <div class="left-part"></div>

    <div class="right-part">
      <div class="logo">
        <span class="bold">חשבונית</span>

        <span class="light">ירוקה</span>

        <img src="../assets/svg/green_leaf.svg" class="leaf-logo" alt="leaf logo" />
      </div>

      <div class="form-container">
        <h1>התחברות לחשבונית ירוקה</h1>
        <form>
          <div class="field-container">
            <div>
              <label class="label-container">Email</label>
            </div>
            <input type="text" placeholder="מייל" />
          </div>

          <div class="field-container">
            <div class="label-container">
              <label>password</label>
            </div>
            <input type="password" placeholder="סיסמה" />
          </div>
        </form>

        <div class="buttons">
          <button>כניסה</button>
          <button class="google">כניסה עם גוגל</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
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
    padding: 1rem 4rem;

    .logo {
      color: #18c746;
      font-size: 42px;
      // text-align: right;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;

      .light {
        font-weight: 400;
      }

      .bold {
        font-weight: 900;
        margin-left: 5px;
      }

      .leaf-logo {
        width: 25px;
        margin-left: 5px;
      }
    }

    .form-container {
      h1 {
        color: #506aed;
      }

      form {
        input {
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

        button {
          font-size: 1rem;
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
          -webkit-transition: width 0.25s ease-in-out;
          -moz-transition: width 0.25s ease-in-out;
          transition: width 0.25s ease-in-out;
          outline: none;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;

          &.google {
            background: #ffffff;
            color: #506aed;
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
