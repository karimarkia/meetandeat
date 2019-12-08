<template>
  <section class="guest-container">
    <previewGuest v-for="(guest) in guests" :key="guest._id" :guest="guest" />
  </section>
</template>

<script>
import previewGuest from "@/components/previewGuest";

export default {
  name: "meal",
  // props: ["meal"],
  components: {
    previewGuest
  },
  // created(){
    
  //   const mealId = this.$route.params._id;
  //   if (!mealId) return;
  //    this.$store.dispatch({ type: "setCurrMeal", mealId });
  //   console.log(this.meal);
    
  // },
  computed: {
    meal() {
      
 return  this.$store.getters.currMeal;
    },
    guests() {
      return this.meal.guests;
    },
  }
};
</script>


