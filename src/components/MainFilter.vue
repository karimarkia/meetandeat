<template>
  <section class="main-filter-home flex align-center space-around">
    <h1>Book unforgettable culinary experiences</h1>
    <div>
      <label class="where">WHERE</label>
      <el-input type="text" placeholder="Anywhere" v-model="filterBy"></el-input>
    </div>

    <div>
      <router-link to="/meal">
        <el-button type="success" @click="getFilter">  Search</el-button>
      </router-link>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
        filterBy: ''
    };
  },
     methods: {
        getFilter() {          
        console.log("Parent got filter:", this.filterBy);
        this.$store.commit("setMainFilter",  this.filterBy);
        }
    }
};
</script>







