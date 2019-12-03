<template>
  <section>
    <AppHeader v-if="header==='/'" @toggleRegister="toggleRegister" @toggleLogIn="toggleLogIn"></AppHeader>
    <NavHeader v-else @toggleRegister="toggleRegister" @toggleLogIn="toggleLogIn"></NavHeader>
    <router-view class="page-body" />
    <Register-module @toggleRegister="toggleRegister" :class="{ active: isActive}"></Register-module>
    <LogIn @toggleLogIn="toggleLogIn" :class="{ active: isLogIn}"></LogIn>
    <Footer></Footer>
  </section>
</template>

<script>
import NavHeader from "@/views/NavHeader.vue";
import AppHeader from "@/views/AppHeader.vue";
import RegisterModule from "@/components/RegisterModule.vue";
import LogIn from "@/components/LogIn.vue";
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
    NavHeader,
    AppHeader,
    RegisterModule,
    LogIn
  },
  data() {
    return {
      isActive: false,
      isLogIn: false,
      isLogOut: true
    };
  },
  methods: {
    toggleRegister() {
      this.isActive = !this.isActive;
    },
    toggleLogIn() {
      this.isLogIn = !this.isLogIn;
    }
  },
  created() {
    this.$store.dispatch("loadMeals");
  },
  computed: {
    header() {
      return this.$route.path;
    },
    meals() {
      return this.$store.getters.mealsToShow;
    }
  }
};
</script>
