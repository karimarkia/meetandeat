<template>
  <section class="meal-card" v-if="meal">
     <router-link class="routerToDetails" :to="'/details/' + meal._id">
    <img class="img-card img-card2" v-if="meal.imgUrl" :src="(meal.imgUrl[0])">
    <div class="cardTitle">
    <h4>{{meal.location.city}}</h4>
     <h4><i class="fa fa-star"></i> {{meal.rate}}</h4>
      </div>
    <div class="test">
    <h4>{{meal.title}}</h4>
   
    </div>
   <span>{{meal.price}}$</span>
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