<template>
  <section class="register-container">
    <button @click="toggleRegister" class="exit-btn">X</button>
    <form class="secondery-reg-container">
      <span>Full Name*</span>
      <el-input v-model="signupCred.fullname" type="text"></el-input>
      <span>Country*</span>
      <el-input v-model="signupCred.location.country" type="text"></el-input>
      <span>City*</span>
      <el-input v-model="signupCred.location.city" type="text"></el-input>
      <span>Email*</span>
      <el-input v-model="signupCred.email" type="email"></el-input>
      <div class="mini-container flex align-center">
        <span>Gender*</span>
        <el-select v-model="signupCred.gender" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span>Birthday*</span>
        <el-date-picker v-model="signupCred.birthDay" value-format="timestamp" type="date"></el-date-picker>
      </div>
      <span>User Name*</span>
      <el-input v-model="signupCred.username" type="text"></el-input>
      <span>Password*</span>
      <el-input v-model="signupCred.password" placeholder="Please input password" show-password></el-input>
      <span>Reapet Password*</span>
      <el-input v-model="password" placeholder="Please input password" show-password></el-input>
      <button @click="doSignup">signup</button>
    </form>
  </section>
</template>

<script >
export default {
  data: () => ({
    signupCred: {
      location: {
        country: null,
        city: null
      }
    },
    password: null,
    options: [
      {
        value: "Male",
        label: "Male"
      },
      {
        value: "Female",
        label: "Female"
      }
    ]
  }),

  methods: {
    toggleRegister() {
      this.$emit("toggleRegister");
    },
    doSignup() {
        console.log(this.signupCred);
      const cred = this.signupCred;
      if (!cred.email || !cred.password || !cred.username)
      return (this.msg = "Please fill up the form");
      this.$store.dispatch({ type: "signup", userCred: cred })
      .then(()=> console.log('user added')
      )
    }
  }
};
</script>