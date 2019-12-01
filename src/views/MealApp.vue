<template>
  <div>
    <NavHeader  @toggleRegister="toggleRegister" @toggleLogIn="toggleLogIn"></NavHeader>
       <MealFilter class="filer-companenet" />
       <hr>
        <Register-module @toggleRegister="toggleRegister" :class="{ active: isActive}"></Register-module>
        <LogIn @toggleLogIn="toggleLogIn" :class="{ active: isLogIn}"></LogIn>

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