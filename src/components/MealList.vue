<template>
  <section class="cards-container">
    <MealPreview v-for="(meal) in meals" :key="meal._id" :meal="meal"/>
  </section>
</template>

<script>

import MealPreview from '@/components/MealPreview.vue'
export default {
    name: "meals",
   props:['meals'],
  components:{
    MealPreview,
  }
}
</script>
