<template>
  <section class="meal-menu2">
    <div class="choose-your-meal">
      <span>
    <h2 class="choose">    Choose 
    your dish</h2></span>
     <img class="choose-sticker"  src="https://res.cloudinary.com/artyompogosov/image/upload/v1576228365/oppra75l3adbpqdayq3u.png" />
    </div>
    <h1>Menu</h1>
    <div class="dish2">
      <h2>Appetizers</h2>
      <div
        v-for="(appetizer, idx) in meal.dishes.appetizers"
        :key="idx"
        class="appetizers flex menu2"
      >
        <div class="dish-details-con">
          <div>
            <h3 class="dish-name">
              <i
                class="fa fa-check-circle"
                :class="{sigend: clickedDish.appetizers === idx}"
                @click="incCounter('appetizers', idx)"
              ></i>
              <span class="count">{{appetizer.count}}</span>
            </h3>
          </div>
          <div>
            <h3 class="dish-name">{{appetizer.name }}</h3>
            <h5 v-if="appetizer.description.length > 0">{{appetizer.description}}</h5>
          </div>
        </div>
      </div>
      <div class="border"></div>
    </div>
    <div class="dish2">
      <h2>Mains</h2>
      <div class="appetizers flex menu2">
        <div v-for="(main, idx) in meal.dishes.mains" :key="idx" class="dish-details-con">
          <div>
            <h3 class="dish-name">
              <i
                class="fa fa-check-circle"
                :class="{sigend: clickedDish.mains === idx}"
                @click="incCounter('mains',idx)"
              ></i>
              <span class="count">{{main.count}}</span>
            </h3>
          </div>
          <div>
            <h3 class="dish-name">{{main.name }}</h3>
            <h5 v-if="main.description.length > 0">{{main.description}}</h5>
          </div>
        </div>
      </div>
      <div class="border"></div>
    </div>
    <div class="dish2">
      <h2>Desserts</h2>
      <div class="appetizers flex menu2">
        <div v-for="(Dessert, idx) in meal.dishes.dessert" :key="idx" class="dish-details-con">
          <div>
            <h3 class="dish-name">
              <i
                class="fa fa-check-circle"
                :class="{sigend: clickedDish.dessert === idx}"
                @click="incCounter('dessert',idx)"
              ></i>
              <span class="count">{{Dessert.count}}</span>
            </h3>
          </div>
          <div>
            <h3 class="dish-name">{{Dessert.name }}</h3>
            <h5 v-if="Dessert.description.length > 0">{{Dessert.description}}</h5>
          </div>
        </div>
      </div>
      <div class="border"></div>
    </div>
    <div class="dish2">
      <h2>Drinks</h2>
      <div class="drinks flex">
        <h4 v-for="(drink, idx) in meal.dishes.drinks" :key="idx">
          {{drink}}
          <span v-if="idx < meal.dishes.drinks.length-1">,</span>
        </h4>
      </div>
    </div>
  </section>
</template>
<script>
import SocketService from "@/services/SocketService";
export default {
  props: ["meal"],
  data() {
    return {
      IsFirstClick: {
        appetizers: true,
        mains: true,
        dessert: true
      },
      clickedDish: {
        appetizers: null,
        mains: null,
        dessert: null
      },
      prevIdx: {
        appetizers: -1,
        mains: -1,
        dessert: -1
      }
    };
  },
  computed: {},
  methods: {
    async incCounter(typeOfMeal, idx) {
      let Meal = JSON.parse(JSON.stringify(this.meal));
      if (this.clickedDish[typeOfMeal] === idx) return;
      this.clickedDish[typeOfMeal] = idx;
      if (this.IsFirstClick[typeOfMeal]) {
        Meal.dishes[typeOfMeal][idx].count++;
        this.IsFirstClick[typeOfMeal] = false;
        this.prevIdx[typeOfMeal] = idx;
      } else {
        Meal.dishes[typeOfMeal][idx].count++;
        Meal.dishes[typeOfMeal][this.prevIdx[typeOfMeal]].count--;
        this.prevIdx[typeOfMeal] = idx;

      }
      SocketService.emit("created", Meal);
      await this.$store.dispatch({ type: "editMeal", currMeal: Meal });
    }
  }
};
</script>
