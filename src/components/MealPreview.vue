<template>
  <section class="meal-card" v-if="meal">
     <router-link class="routerToDetails" :to="'/details/' + meal.id">
    <img class="img-card" :src="(meal.imgUrl[0])">
    <h4>{{meal.title}}</h4>
</router-link>
</section>
</template>

<script>
export default {
  props: {
    meal: Object
  },
  methods: {
    // removeToy() {
    //   this.$emit("remove", this.toy._id);
    // }
  }
};
</script>