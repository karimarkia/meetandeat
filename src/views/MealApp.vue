<template>
  <div>
    <NavHeader></NavHeader>
       <MealFilter class="filer-companenet" />
       <hr>
      <MealList :meals="meals"></MealList>
  </div>
</template>

<script>
import NavHeader from '@/views/NavHeader.vue'
import MealList from '@/components/MealList';
import MealFilter from "@/components/MealFilter.vue";

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