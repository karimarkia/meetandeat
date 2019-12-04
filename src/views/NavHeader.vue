<template>
  <nav class="sec-nav">
    <div class="row-sec">
      <!-- <img src="@/img/logo-white.png" alt="Omnifood logo" class="logo-sec" /> -->
      <router-link to="/"><img src="@/img/logo.png" alt="Omnifood logo" class="logo-black-sec" /></router-link>
              <i id="menu-btn" :class="{openMenu:openMenu}" @click="getOpenMenu" class="fa fa-bars"></i>
        <div :class="{openMenu:openMenu }"  class="screen" @click="getOpenMenu"></div>

      <ul class="main-nav-sec">
          <li @click="getOpenMenu">
            <router-link class="route-nav" to="/">Home</router-link>
          </li>
          <li @click="getOpenMenu">
            <router-link class="route-nav" to="/about">About</router-link>
          </li>
          <li @click="getOpenMenu">
            <router-link class="route-nav" to="/add">Become a host</router-link>
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
            <router-link :to="'/user/' + user._id">
             <el-avatar title="My Account" :size="40" :src="user.imgUrl"></el-avatar>
              <!-- <a>My account</a> -->
            </router-link>
          </li>
<!-- 
          <li v-if="user" class="userTest">Hello {{user.username}}!</li> -->
        </ul>
      </div>
 
   
  </nav>
</template>

<script>
import RegisterModule from "../components/RegisterModule.vue";
// import NavHeader from './NavHeader.vue'
export default {
  components: {
    RegisterModule
  },
    data() {
    return {
      openMenu: false
    };
  },
  methods: {
    SignUp() {
        this.openMenu = !this.openMenu;
      this.$emit("toggleRegister");
    },
    logIn() {
        this.openMenu = !this.openMenu;
      this.$emit("toggleLogIn");
    },
    doLogout() {
        this.openMenu = !this.openMenu;
      this.$store.dispatch({ type: "logout" });
    },
        getOpenMenu() {
      this.openMenu = !this.openMenu;
    }
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    }
  }
};
</script>