<template>
  <section class="register-container">
    <form class="secondery-reg-container">
      <button @click="toggleLogIn" class="exitLogIn-btn">X</button>
      <span>User Name*</span>
      <el-input v-model="loginUser.username" type="text"></el-input>
      <span>Password*</span>
      <el-input v-model="loginUser.password" placeholder="Please input password" show-password></el-input>
      <el-button class="loginBtn" @click="doLogin" type="success">LogIn</el-button>
    </form>
  </section>
</template>


<script >
export default {
  data() {
    return {
      loginUser: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    toggleLogIn() {
      this.$emit("toggleLogIn");
    },
    async doLogin() {
      console.log("amit", this.loginUser.username);
      const cred = this.loginUser;
      if (!cred.username || !cred.password)
        return (this.msg = "Please enter user/password");
      await this.$store.dispatch({ type: "login", userCred: cred });
      this.toggleLogIn();
      this.loginUser = {};
    }
  }
};
</script>

<style scoped>
.register-container {
  max-width: 500px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 15px;
  position: absolute;
  top: 50px;
  right: 10%;
  left: 10%;
  margin: auto;
  z-index: 100;
  display: none;
  position: fixed;
}
.secondery-reg-container {
  display: flex;
  flex-direction: column;
}
.secondery-reg-container > * {
  margin-bottom: 10px;
}
.mini-container > *:not(:last-child) {
  margin-right: 7px;
}
.exitLogIn-btn {
  background-color: transparent;
  border: 0;
  font-size: 1.2rem;
  margin: 10px 10px 0 0;
  outline: none;
  display: flex;
  justify-content: flex-end;
}
.loginBtn {
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
}
/* .exitLogIn-btn:hover {
font-size: 1.4rem;
} */
</style>

