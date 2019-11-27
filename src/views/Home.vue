<template>
  <section class="main-img">
    <h1>Meet&Eat</h1>
    <img src="../img/hero.jpg" />

    <div class="container">
      <input type="text" placeholder="Search..." />
      <div class="search">

      </div>
    <router-link to="/meal">Search</router-link>
    </div>
    <!-- <button ></button> -->

    <!-- <router-link to="/list">list</router-link> -->
  </section>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>


<style scoped>
.main-img img {
  filter: brightness(50%);
  width: 100%;
  height: 100%;
}

.main-img h1 {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: whitesmoke;
  font-size: 5rem;
}


</style>