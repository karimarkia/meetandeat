<template>
  <section>
    <form class="main-filter-home flex align-center space-around" @submit.prevent="getFilter">
      <h1>Book unforgettable culinary experiences</h1>
      <div>
        <span class="where">WHERE</span>
        <el-input class="search-city" type="text" placeholder="Anywhere..." v-model="filterBy"></el-input>
      </div>
      <div>
        <router-link to="/meal">
          <el-button class="main-search" @click="getFilter" type="success">Search</el-button>
        </router-link>
      </div>
    </form>
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
      this.$store.commit("setMainFilter", this.filterBy);
      this.$router.push("/meal");
    }
  }
};
</script>







