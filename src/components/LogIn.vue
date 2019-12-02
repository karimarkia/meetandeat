<template>
  <section class="register-container">
    <form class="secondery-reg-container">
      <button @click="toggleLogIn" class="exit-btn">X</button>
      <span>User Name*</span>
      <el-input v-model="loginUser.username" type="text"></el-input>
      <span>Password*</span>
      <el-input v-model="loginUser.password" placeholder="Please input password" show-password></el-input>
      <button @click="doLogin">LogIn</button>
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
      const cred = this.loginUser;
      if (!cred.username || !cred.password)
        return (this.msg = "Please enter user/password");
      await this.$store.dispatch({ type: "login", userCred: cred });
      this.loginUser = {};
    }
  }
};
</script>

