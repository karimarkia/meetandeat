<template>
  <header>
   <!-- <NavHeader></NavHeader> -->
    <div class="hero-text-box">
      <h1>Meet&Eat</h1>
      <router-link to="/meal">Search</router-link>
    </div>
  </header>
</template>




<script>
  import NavHeader from './NavHeader.vue'
export default {
  components:{
    NavHeader
  }
}
</script>

<style>
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
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



