<template>
  <section class="cards-container">
    <MealPreview v-for="(meal, idx) in meals" :key="idx" :meal="meal"/>
  </section>
</template>

<script>
import MealPreview from '@/components/MealPreview.vue'
export default {
    name: "meals",
   props:['meals'],
  components:{
    MealPreview
  }
}
</script>
