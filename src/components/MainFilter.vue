<template>
  <section class="main-filter-home flex align-center space-between">
    <h1>Book unforgettable culinary experiences</h1>
    <div>
      <el-input type="text" placeholder="Choose a city..." v-model="city"></el-input>
    </div>
    <div>
      <el-date-picker value-format="timestamp" type="date" placeholder="Choose a date..."></el-date-picker>
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







