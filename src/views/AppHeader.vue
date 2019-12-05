<template>
  <header>
    <nav :class="{'sticky': scrolled}" @on="handleScroll">
      <div class="row">
        <!-- <li v-if="user" class="userTest">Hello {{user.username}}!</li> -->
        <router-link to="/">
          <img src="@/img/logo.png" alt="meetandeat logo" class="logo" />
        </router-link>
        <i id="menu-btn" :class="{openMenu:openMenu}" @click="getOpenMenu" class="fa fa-bars"></i>
        <div :class="{openMenu:openMenu }" class="screen" @click="getOpenMenu"></div>
        <ul class="main-nav">
          <li @click="getOpenMenu">
            <router-link class="route-nav" to="/">Home</router-link>
          </li>
          <li @click="getOpenMenu">
            <router-link class="route-nav" to="/about">About</router-link>
          </li>
          <li @click="getOpenMenu">
            <router-link class="route-nav" to="/add">HOST A MEAL</router-link>
          </li>
          <li class="pointer" v-if="!user" @click="logIn">
            <a>LOGIN</a>
          </li>
          <li class="pointer" v-else @click="doLogout">
            <a>LOGOUT</a>
          </li>
          <li class="pointer" v-if="!user" @click="SignUp">
            <a>SIGNUP</a>
          </li>
          <li v-else>
            <router-link :to="'/user/' + user._id">
              <!-- <a>My account</a> -->
              <el-avatar :size="40" :src="user.imgUrl"></el-avatar>
            </router-link>
          </li>
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
      openMenu: false,
      limitPosition: 400,
      scrolled: false,
      lastPosition: 500
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
    },
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
        // move up!
      }

      if (this.lastPosition >= window.scrollY) {
        this.scrolled = false;
        // move down
      }

      // this.lastPosition = window.scrollY;
      this.scrolled = window.scrollY > 250;
    }
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 2px #efefef;
  z-index: 9999;
  transition: 0.5s all;
}
.sticky .main-nav {
    margin-top: 18px;
}

.sticky .main-nav li a:link,
.sticky .main-nav li a:visited {
    padding: 16px 0;
    color: #555;
}

.sticky a img {
    display: block;
}
</style>


