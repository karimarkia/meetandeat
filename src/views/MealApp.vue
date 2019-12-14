<template>
  <div class="meal-app">
    <h2>Find unique food experiences with hand-selected hosts</h2>
    <p>Book now before they sold out!</p>
    <MealFilter />
    <div class="sescrt"></div>
    <MealList :meals="meals"></MealList>
  </div>
</template>

<script>
import MealList from "@/components/MealList";
import MealFilter from "@/components/MealFilter.vue";

export default {
  components: {
    MealList,
    MealFilter
  },
  created() {
    this.$store.dispatch("loadMeals");
        window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },
  computed: {
    meals() {
      return this.$store.getters.mealsToShow;
    }
  }
};
</script>