<template>
  <div>
       <MealFilter class="filer-companenet" />
      <MealList :meals="meals"></MealList>
  </div>
</template>

<script>
import MealList from '@/components/MealList';
import MealFilter from "@/components/MealFilter.vue";

export default {
  components: {
    MealList,
    MealFilter
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