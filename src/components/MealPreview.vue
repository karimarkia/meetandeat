<template>
  <section class="meal-card" v-if="meal">
     <router-link class="routerToDetails" :to="'/details/' + meal._id">
    <img class="img-card img-card2" v-if="meal.imgUrl" :src="(meal.imgUrl[0])">
    <!-- <h4>{{meal.location.city}}</h4> -->
    <div class="test">
    <h4>{{meal.title}}</h4>
    <h4>{{meal.rate}}<span><i class="fa fa-star"></i></span></h4>
    </div>
    <p><span>{{meal.price}}$</span> Meal</p>
</router-link>
     <button @click="removeMeal(meal._id)">DELETE</button>
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
      return `/edit/${this.meal._id}`;
    }
  },
 

};
</script>