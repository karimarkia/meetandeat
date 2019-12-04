<template>
  <section class="main-filter-home flex align-center space-around">
    <h1>Book unforgettable culinary experiences</h1>
    <div>
      <el-input type="text" placeholder="Choose a city..." v-model="filterBy"></el-input>
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
        filterBy: ""
    };
  },
     methods: {
        getFilter() {          
        console.log("Parent got filter:", this.filterBy);
        // this.filterBy = filterBy;
        this.$store.commit("setMainFilter",  this.filterBy );
      
    
        }
    }
};
</script>







