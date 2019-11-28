<template>
  <section v-if="meal" class="detailsPage flex">
    <section>
      <h1>{{meal.title}}</h1>
      <h3>
        <i class="fas fa-star"></i>
        {{meal.rate}}. {{meal.country}} {{meal.city}}
      </h3>
    </section>
    <div class="imgs-gallery">
      <img
        :data-i="idx"
        class="imgDetails"
        v-for="(img , idx) in meal.imgUrl"
        :key="idx"
        :src="(img)"
      />
    </div>
    <section class="flex">
      <div class="description">
        <p>{{meal.description}}</p>
      </div>
      <div class="priceDetails">
        <h1>{{meal.price}}$</h1>
      </div>
    </section>
    <section class="mealMenu">
      <h2>Menu</h2>
      <h3>Appetizers</h3>
      <div class="dish">
        <h4>
          <span>{{meal.dishes.appetizers[0].name}}</span>...
          <span>{{meal.dishes.appetizers[0].count}}</span>
        </h4>
        <h4>
          <span>{{meal.dishes.appetizers[1].count}}</span>...
          <span>{{meal.dishes.appetizers[1].name}}</span>
        </h4>
      </div>
      <h3>Mains</h3>
      <div class="dish">
        <h4>
          <span>{{meal.dishes.mains[0].name}}</span>...
          <span>{{meal.dishes.mains[0].count}}</span>
        </h4>
        <h4>
          <span>{{meal.dishes.mains[1].count}}</span>...
          <span>{{meal.dishes.mains[1].name}}</span>
        </h4>
      </div>
      <h3>Appetizers</h3>
      <div class="dish">
        <h4>
          <span>{{meal.dishes.dessert[0].name}}</span>...
          <span>{{meal.dishes.dessert[0].count}}</span>
        </h4>
        <h4>
          <span>{{meal.dishes.dessert[1].count}}</span>...
          <span>{{meal.dishes.dessert[1].name}}</span>
        </h4>
      </div>
    </section>
    <section class="reviewArea">
      <h2>reviews place</h2>
    </section>
    <h4>The place & Amenities</h4>
    <h5>The full address will be provided once the booking is confirmed</h5>
    <Map class="locationMap" :location="location" />
  </section>
</template>

<script>
import Map from "@/components/map.vue";
export default {
  name: "mealdetails",
  components: {
    Map
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("loadMeals");
    const mealId = this.$route.params.id;

    if (!mealId) return;
    this.$store.dispatch({ type: "setCurrMeal", mealId });
  },
  computed: {
    meal() {
      console.log(this.$store.getters.currMeal);
      return this.$store.getters.currMeal;
    },
    location() {
      console.log(this.$store.getters.currMeal.location);
      return this.$store.getters.currMeal.location;
    }
  },
  methods: {}
};
</script>

<style scoped>
.imgs-gallery {
  max-width: 100%;
  display: grid;
  height: 50vh;
  gap: 10px;
  grid-template-rows: 50% 50%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-areas:
    "a a b c"
    "a a d e";
  margin: 10px;
  margin-top: 20px;
  border: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
}

img.imgDetails {
  width: 100%;
  height: 100%;
}
.detailsPage {
  max-width: 90%;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
}

[data-i="0"] {
  grid-area: a;
}
[data-i="1"] {
  grid-area: b;
}
[data-i="2"] {
  grid-area: c;
}
[data-i="3"] {
  grid-area: d;
}
[data-i="4"] {
  grid-area: e;
}

/* .imgs-gallery:first-child img{
width: 50%;
} */

.locationMap {
  width: 100%;
  margin-bottom: 20px;
}
.reviewArea {
  width: 100%;
  border: 1px solid black;
}
.priceDetails {
  width: 35%;
}
.description {
  width: 65%;
}

.dish {
  display: flex;
  justify-content: space-around;
}

h3, h2{
  text-align: center;
}
</style>