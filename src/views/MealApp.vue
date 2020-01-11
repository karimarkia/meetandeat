<template>
  <div v-if="isloading" class="meal-app">
    <h2>Find unique food experiences with hand-selected hosts</h2>
    <p>Book now before they sold out!</p>
    <MealFilter />
    <div class="sescrt"></div>
    <MealList :meals="meals"></MealList>
  </div>
  <div v-else class="lds-dual-ring"></div>
</template>

<script>
import MealList from "@/components/MealList";
import MealFilter from "@/components/MealFilter.vue";

export default {
  components: {
    MealList,
    MealFilter
  },
  data() {
    return {
      isloading: false
    };
  },
  created() {
    setTimeout(() => (this.isloading = !this.isloading), 1250);
    this.$store.dispatch("loadMeals");
    window.scroll({
      top: 0,
      left: 0
    });
  },
  computed: {
    meals() {
      return this.$store.getters.mealsToShow;
    }
  }
};
</script>