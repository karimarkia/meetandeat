<template>
  <section class="main-filter-home flex align-center space-around">
    <h1>Book unforgettable culinary experiences</h1>
    <div>
      <h4>Where?</h4>
      <el-input type="text" placeholder="Choose a city..." v-model="city"></el-input>
    </div>

    <div>
      <router-link to="/meal">
        <el-button type="success" round>Search</el-button>
      </router-link>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
        city: ""
    };
  },
  create(){
    console.log(this.city);
  }
};
</script>







