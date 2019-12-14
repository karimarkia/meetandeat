<template>
  <section class="meal-card" v-if="meal">
    <router-link class="routerToDetails" :to="'/details/' + meal._id">
      <div class="imgContainer">
        <img class="img-card img-card2 ratio-16-9" v-if="meal.imgUrl" :src="(meal.imgUrl[0])" />
        <span
          v-if="(meal.maxUsers - meal.guests.length) > 1"
          class="seats-left"
        >{{meal.maxUsers - meal.guests.length}} Seats left</span>
        <span v-else-if="(meal.maxUsers - meal.guests.length) === 1" class="seats-left sold-out">One Seat left</span>
        <span v-else class="seats-left sold-out">Sold out</span>
      </div>
      <div class="cardTitle">
        <h4>
          Dinner in {{meal.location.city}}
          <span>{{mealDate}}</span>
        </h4>
        <h4>
          <i class="fa fa-star"></i>
          {{meal.rate}}
        </h4>
      </div>
      <div class="test">
        <h4>{{meal.title}}</h4>
      </div>
      <span class="price">
        {{meal.price}}$
        <span>Per guest</span>
      </span>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ["meal"],
  methods: {
    removeMeal(mealId) {
      this.$store.dispatch({ type: "removeMeal", mealId });
    }
  },
  computed: {
    editURL() {
      return `/edit/${this.meal._id}`;
    },
    mealDate() {
      let date = new Date(+this.meal.atDate) + "";
      date = date.substring(3, 10);
      return date;
    }
  }
};
</script>