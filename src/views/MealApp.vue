<template>
  <div>
      <MealList :meals="meals"></MealList>
  </div>
</template>

<script>
import MealList from '@/components/MealList'
export default {
  components: {
    MealList
  },
  computed: {
    meals() {
      console.log(this.$store.getters.mealsToShow);
      
      return this.$store.getters.mealsToShow;
    }
  },
}
</script>