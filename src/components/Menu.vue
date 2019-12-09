<template>
  <section class="mealMenu2">
    <h2 class="choose">Choose your dish</h2>
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
            <h3>
              <i
                class="fa fa-check-circle"
                :class="{sigend: clickedDish.appetizers === idx}"
                @click="incCounter('appetizers', idx)"
              ></i>
              <span class="count">{{appetizer.count}}</span>
            </h3>
          </div>
          <div>
            <h3>{{appetizer.name }}</h3>
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
            <h3>
              <i
                class="fa fa-check-circle"
                :class="{sigend: clickedDish.mains === idx}"
                @click="incCounter('mains',idx)"
              ></i>
              <span class="count">{{main.count}}</span>
            </h3>
          </div>
          <div>
            <h3>{{main.name }}</h3>
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
            <h3>
              <i
                class="fa fa-check-circle"
                :class="{sigend: clickedDish.dessert === idx}"
                @click="incCounter('dessert',idx)"
              ></i>
              <span class="count">{{Dessert.count}}</span>
            </h3>
          </div>
          <div>
            <h3>{{Dessert.name }}</h3>
            <h5
              v-if="Dessert.description.length > 0"
            >{{Dessert.description}}</h5>
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
      }

    };
  },
  computed: {
  },
  methods: {
    async incCounter(typeOfMeal, idx) {
      let Meal = JSON.parse(JSON.stringify(this.meal));
      if (this.clickedDish[typeOfMeal] === idx) return;
      this.clickedDish[typeOfMeal] = idx;
      if (this.IsFirstClick[typeOfMeal]) {
        Meal.dishes[typeOfMeal][idx].count++;
        this.IsFirstClick[typeOfMeal] = false;
      } else {
        Meal.dishes[typeOfMeal][idx].count += 2;
        Meal.dishes[typeOfMeal].forEach(element => {
          element.count--;
        });
      }
      SocketService.emit("created", Meal);
      await this.$store.dispatch({ type: "editMeal", currMeal: Meal });
    }
  }
};
</script>
