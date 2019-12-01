<template>
  <section class="flex align-center space-between">
    <div>
      <h3>What are you looking for?</h3>
      <el-input type="text" placeholder="City"></el-input>
    </div>
    <div>
      <h3>When are you available?</h3>
      <el-date-picker value-format="timestamp" type="date"></el-date-picker>
    </div>
    <div>
      <h3>How many guests are going?</h3>
      <el-input aria-placeholder="number" type="number"></el-input>
    </div>
    <div>
      <h3>click to eat</h3>
      <router-link to="/meal">
        <el-button type="success" round>Search</el-button>
      </router-link>
    </div>
  </section>
</template>


<style scoped>
section {
  background-color: white;
  position: absolute;
  top: 500px;
  left: 1%;
  right: 1%;
  margin: auto;
  max-width: 1000px;
  padding: 15px;
  border-radius: 10px;
  z-index: 10;
}
</style>