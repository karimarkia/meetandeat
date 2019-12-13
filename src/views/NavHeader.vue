<template>
  <nav class="sec-nav">
    <div class="row-sec">
      <div class="flex">
        <router-link to="/">
          <img src="@/img/logo.png" alt="Omnifood logo" class="logo-black-sec" />
        </router-link>
         <form class="search" @submit.prevent="getFilter">
                            <svg class="searchIcon" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height: 18px; width: 18px; display: block; fill: currentcolor;"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>

        <el-input 
          v-if="(header==='/meal' )"
          class="searchCityNav"
          type="text"
   
          v-model="filterBy"
        ></el-input>

         </form>

      </div>
      <i id="menu-btn" :class="{openMenu:openMenu}" @click="getOpenMenu" class="fa fa-bars"></i>
      <div :class="{openMenu:openMenu }" class="screen" @click="getOpenMenu"></div>

      <ul class="main-nav-sec">
        <li @click="getOpenMenu">
          <router-link class="route-nav" to="/meal">All Meals</router-link>
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
            <el-avatar title="My Account" :size="40" :src="user.imgUrl"></el-avatar>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import RegisterModule from "../components/RegisterModule.vue";
export default {
  components: {
    RegisterModule
  },
  data() {
    return {
      openMenu: false,
      filterBy: ""
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
        getFilter() {
      console.log(this.filterBy);
      this.$store.commit("setMainFilter", this.filterBy);
      // this.$router.push("/meal");
    }
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
    header() {
      return this.$route.path;
    },
  },
    created() {
      this.filterBy = this.$store.getters.mainFilter;
      console.log( this.filterBy);
      
    },
  
};
</script>