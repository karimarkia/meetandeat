<template>
  <section>
    <AppHeader></AppHeader>
    
    <router-view class="page-body"/>
    <Footer></Footer>
  </section>
</template>

<script>
import AppHeader from '@/views/AppHeader'
import Footer from '@/components/Footer'
export default {
  components:{
    AppHeader,
    Footer
  }
}
</script>

<style >
  /* @import url('./style/components/_AppHeader.scss'); */
  .page-body{
    min-height: 85vh; 
  }
</style>