<template>
  <section>
    <AppHeader v-if="header==='/'"></AppHeader>
    <NavHeader v-else ></NavHeader>
    <router-view class="page-body"/>
    <Footer></Footer>
  </section>
</template>

<script>
  import NavHeader from '@/views/NavHeader.vue'
  import AppHeader from '@/views/AppHeader.vue'
import Footer from '@/components/Footer'
export default {
  components:{

    Footer,
    NavHeader,
    AppHeader
  },
    created() {
    this.$store.dispatch("loadMeals");
    console.log(this.$route);
  },

  computed: {
    header(){
      return this.$route.path
    }
  },
 
}
</script>

<style >
  .page-body{
    min-height: 85vh; 
  }
  
</style>