<template>
  <section class="meal-card" v-if="meal">
     <router-link class="routerToDetails" :to="'/details/' + meal._id">
    <img class="img-card img-card2 ratio-16-9" v-if="meal.imgUrl" :src="(meal.imgUrl[0])">
    <div class="cardTitle">
    <h4>Dinner in {{meal.location.city}} <span>{{mealDate}}</span></h4> 
     <h4><i class="fa fa-star"></i> {{meal.rate}}</h4>
      </div>
    <div class="test">
    <h4>{{meal.title}}</h4>
   
    </div>
   <span class="price">{{meal.price}}$<span>/Per guest</span></span>
  
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
    },
        mealDate() {
      let date = new Date(+this.meal.atDate)+'';
         date = date.substring(3, 10)
      // date=date.toLocaleDateString()
      //  date = date.toGMTString();
      // let age = today - birthDate;
      // age = age / (60000 * 60 * 24 * 365);
      return date
    }
  },
 

};
</script>