<template>
  <form @submit.prevent="searchMeals" class="filter-container align-center flex">
    <div class="searchMeals">
      <el-input  @input="searchMeals" placeholder="Please input"  v-model="filterBy.searchStr"></el-input>
      <!-- <input
        @input="searchMeals"
        type="text"
        class="searchInput"
        placeholder="🔎 Search"
        v-model="filterBy.searchStr"
      /> -->
    </div>
    <el-select @change="searchMeals" v-model="filterBy.mealType" multiple placeholder="Select">
      <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div>
      <button class="sortPrice" @click="sortMeals">Price</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "MealFilter",
  data() {
    return {
      filterBy: {
        searchStr: "",
        mealType: []
      },
      options: [
        {
          value: "Asian",
          label: "Asian"
        },
        {
          value: "Italian",
          label: "Italian"
        },
        {
          value: "BBQ",
          label: "BBQ"
        },
        {
          value: "vegitarian",
          label: "Vegitarian"
        },
        {
          value: "other",
          label: "Other"
        }
      ],
     

    };
  },
  methods: {
    searchMeals() {
      this.$store.commit("setMealsFilter", { ...this.filterBy });
      console.log(this.filterBy);
    },
    sortMeals(sortBy) {
      this.$store.commit("sortMeals", "price");
    }
  }
};
</script>
