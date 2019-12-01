<template>
  <section>
    <!-- <NavHeader></NavHeader> -->
    <router-view class="page-body"/>
    <Footer></Footer>
  </section>
</template>

<script>
  import NavHeader from '@/views/NavHeader.vue'
import Footer from '@/components/Footer'
export default {
  components:{
  NavHeader,
    Footer
  },
    created() {
    this.$store.dispatch("loadMeals");
   
  }
}
</script>

<style >
  .page-body{
    min-height: 85vh; 
  }
  
</style>