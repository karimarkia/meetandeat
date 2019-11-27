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
  created(){
   console.log(this.$store.getters.mealsToShow);

  },
  computed: {
    meals() {
      return this.$store.getters.mealsToShow;
    }
  },
}
</script>