<template>
  <header>
    <nav>
      <div class="row">
        <img src="@/img/logo-white.png" alt="Omnifood logo" class="logo" />
        <ul class="main-nav">
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
          <li class="pointer" v-if="!user" @click="SignUp"> <a>SignUp</a></li>
          <li v-else>
            <router-link :to="'/user/' + user._id">my account</router-link>
          </li>

          <li v-if="user" class="userTest">Hello {{user.username}}!</li>
        </ul>
      </div>
    </nav>
  </header>
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
      this.$store.dispatch({type: 'logout'})
    },
    
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    }
  }
};
</script>

<style>
header {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1)
    ),
    url(../img/img2.jpg);
  background-size: cover;
  background-position: center;
  height: 95vh;
  background-attachment: fixed;
}

.hero-text-box {
  color: whitesmoke;
  position: absolute;
  /* width: 1140px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.row {
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
}
.logo {
  height: 60px;
  width: auto;
  float: left;
  margin-top: 20px;
}

.userTest{
  color: white;
}
/* Main navi */
.main-nav {
  float: right;
  list-style: none;
  margin-top: 55px;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
}

.main-nav li {
  display: inline-block;
  margin-left: 40px;
}

.main-nav li a,
.main-nav li a:visited {
  padding: 8px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 90%;
  border-bottom: 2px solid transparent;
  -webkit-transition: border-bottom 0.2s;
  transition: border-bottom 0.2s;
}

.main-nav li a:hover,
.main-nav li a:active {
  border-bottom: 2px solid #e67e22;
}

/* Mobile navi */
.mobile-nav-icon {
  float: right;
  margin-top: 30px;
  cursor: pointer;
  display: none;
}

.mobile-nav-icon i {
  font-size: 200%;
  color: #fff;
}

/* Sticky navi */
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  -webkit-box-shadow: 0 2px 2px #efefef;
  box-shadow: 0 2px 2px #efefef;
  z-index: 9999;
}

.sticky .main-nav {
  margin-top: 18px;
}

.sticky .main-nav li a:link,
.sticky .main-nav li a:visited {
  padding: 16px 0;
  color: #555;
}

.sticky .logo {
  display: none;
}
.sticky .logo-black {
  display: block;
}
</style>



