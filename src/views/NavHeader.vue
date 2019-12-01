<template>
   <nav class="sec-nav">
    <div class="row-sec">
      <!-- <img src="@/img/logo-white.png" alt="Omnifood logo" class="logo-sec" /> -->
      <img src="@/img/logo.png" alt="Omnifood logo" class="logo-black-sec" />
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
          <li v-if="!user" @click="logIn">
            <a>LogIn</a>
          </li>
          <li v-else @click="doLogout">
            <a>LogOut</a>
          </li>
          <li v-if="!user" @click="SignUp"> <a>SignUp</a></li>
          <li v-else>
            <router-link :to="'/user/' + user._id">my account</router-link>
          </li>

          <li class="userTest">{{user}}</li>
      </ul>
    </div>
  <hr>
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
.active {
  display: block;
}
.sec-nav{
  width: 100% !important;
  background-color: #e6e6e657;
  margin-bottom: 50px;
}
.row-sec {
  display: flex;
   justify-content: space-between;
  margin: 0 40px;
}
/* .logo-sec {
  height: 100px;
  width: auto;
  float: left;
  margin-top: 20px;
} */

.logo-black-sec {
  height: 60px;
  width: auto;
  float: left;
  margin-top: 20px;
 
}

/* Main navi */
.main-nav-sec {
  float: right;
  list-style: none;
  margin-top: 45px;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
}

.main-nav-sec li {
  display: inline-block;
  margin-left: 40px;
  color: black;
}

.main-nav-sec li a:link,
.main-nav-sec li a:visited {
  padding: 8px 0;
  color: rgb(0, 0, 0);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.1rem;
  border-bottom: 2px solid transparent;
  -webkit-transition: border-bottom 0.2s;
  transition: border-bottom 0.2s;
}

.main-nav-sec li a:hover,
.main-nav-sec li a:active {
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
  color: rgb(5, 5, 5);
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