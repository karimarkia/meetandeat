<template>
  <div>
    <NavHeader></NavHeader>
       <MealFilter class="filer-companenet" />
       <hr>
      <MealList :meals="meals"></MealList>
  </div>
</template>

<script>

import MealList from '@/components/MealList';
import MealFilter from "@/components/MealFilter.vue";
import NavHeader from '@/views/NavHeader.vue'

export default {
  components: {
    MealList,
    MealFilter,
    NavHeader
     
  },
  computed: {
    meals() {
      // console.log(this.$store.getters.mealsToShow);
      
      return this.$store.getters.mealsToShow;
    }
  },
  
}
</script>