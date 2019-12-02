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
import LogIn from "../components/LogIn.vue";
export default {
  components: {
    RegisterModule,
    LogIn
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




