<template>
  <section class="meal-card" v-if="meal">
     <router-link class="routerToDetails" :to="'/details/' + meal.id">
    <img class="img-card" v-if="meal.imgUrl" :src="(meal.imgUrl[0])">
    <h4>{{meal.title}}</h4>
</router-link>
     <button @click="removeMeal(meal.id)">DELETE</button>
      <router-link :to="editURL">
      <button class="cards-btns">EDIT</button>
    </router-link>
</section>
</template>

<script>
export default {
  props: ['meal'],
  methods: {
     removeMeal(mealId) {
      this.$store.dispatch({ type: "removeMeal", mealId });
    }
  },
  computed:{
     editURL() {
      return `/edit/${this.meal.id}`;
    }
  },

};
</script>