<template>
  <section class="main-filter-home flex align-center space-between">
    <div>
      <el-input type="text" placeholder="Choose a city..."></el-input>
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


<style scoped>
.main-filter-home {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  position: absolute;
  top: 70%;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 760px;
  padding: 15px;
  border-radius: 10px;
  /* z-index: 10; */
}
</style>