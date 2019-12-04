<template>
  <nav class="sec-nav">
    <div class="row-sec">
      <!-- <img src="@/img/logo-white.png" alt="Omnifood logo" class="logo-sec" /> -->
      <router-link to="/"><img src="@/img/logo.png" alt="Omnifood logo" class="logo-black-sec" /></router-link>
      <ul class="main-nav-sec">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/add">Become a host</router-link>
        </li>
        <li class="pointer" v-if="!user" @click="logIn">
          <a>LogIn</a>
        </li>
        <li class="pointer" v-else @click="doLogout">
          <a>LogOut</a>
        </li>
        <li class="pointer" v-if="!user" @click="SignUp">
          <a>SignUp</a>
        </li>
        <li v-else>
          <router-link :to="'/user/' + user._id">my account</router-link>
        </li>
      </ul>
    </div>
    <hr />
  </nav>
</template>

<script>
import RegisterModule from "../components/RegisterModule.vue";
// import NavHeader from './NavHeader.vue'
export default {
  components: {
    RegisterModule
    // NavHeader
  },
  methods: {
    SignUp() {
      this.$emit("toggleRegister");
    },
    logIn() {
      this.$emit("toggleLogIn");
    },
    doLogout() {
      this.$store.dispatch({ type: "logout" });
    }
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    }
  }
};
</script>