<template>
  <section class="guest-container">
    <previewGuest v-for="(guest) in guests" :key="guest._id" :guest="guest" />
  </section>
</template>

<script>
import previewGuest from "@/components/previewGuest";

export default {
  name: "meal",
  props: ["meal"],
  components: {
    previewGuest
  },
  computed: {
    guests() {
      console.log(this.meal.guests);
      
      return this.meal.guests;
    },
  }
};
</script>


