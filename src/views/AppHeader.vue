<template>
  <header>
    <nav>
      <div class="row">
        <router-link to="/">
          <img src="@/img/logo-white.png" alt="Omnifood logo" class="logo" />
        </router-link>
        <i id="menu-btn" :class="{openMenu:openMenu}" @click="getOpenMenu" class="fa fa-bars"></i>
        <div :class="{openMenu:openMenu }"  class="screen" @click="getOpenMenu"></div>
        <ul class="main-nav">
          <li>
            <router-link class="route-nav" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="route-nav" to="/about">About</router-link>
          </li>
          <li>
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
              <a>My account</a>
            </router-link>
          </li>

          <li v-if="user" class="userTest">Hello {{user.username}}!</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import RegisterModule from "../components/RegisterModule.vue";
import LogIn from "../components/LogIn.vue";
export default {
  components: {
    RegisterModule,
    LogIn
  },
  data() {
    return {
      openMenu: false
    };
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

<style>
</style>




