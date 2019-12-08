<template>
  <section class="guest-container">
    <previewGuest v-for="(guest) in guests" :key="guest._id" :guest="guest" />
  </section>
</template>

<script>
import previewGuest from "@/components/previewGuest";

export default {
    props: ["meal"],
  name: "meal",
  components: {
    previewGuest
  },
  computed: {
    // meal() {
    //   console.log(this.$store.getters.currMeal);
      
    //   return this.$store.getters.currMeal;
    // },
    guests() {
      return this.meal.guests;
    }
  }
};
</script>


