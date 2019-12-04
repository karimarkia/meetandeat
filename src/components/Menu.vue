<template> 
  <section class="mealMenu">
    <h1>Menu</h1>

    <div class="dish">
      <h2>Appetizers</h2>
      <div class="appetizers flex menu">
        <div class="dish-details-con">
          <h3>
            {{meal.dishes.appetizers[0].name }}
            <i
              class="fa fa-thumbs-up"
              @click="incCounter('appetizers',0)"
            ></i>
            <span class="count">{{this.vote.appetizers.opt1}}</span>
          </h3>
          <h5
            v-if="meal.dishes.appetizers[0].description.length > 0"
          >{{meal.dishes.appetizers[0].description}}</h5>
        </div>
        <h3 class="or">Or</h3>
        <div class="dish-details-con">
          <h3>
            {{meal.dishes.appetizers[1].name}}
            <i
              class="fa fa-thumbs-up"
              @click="incCounter('appetizers',1)"
            ></i>
            <span class="count">{{this.vote.appetizers.opt2}}</span>
          </h3>
          <h5
            v-if="meal.dishes.appetizers[1].description.length > 0"
          >{{meal.dishes.appetizers[1].description}}</h5>
        </div>
        
      </div>
      <div class="border"></div>
    </div>
    <div class="dish">
      <h2>Mains</h2>
      <div class="Mains flex menu">
        <div class="dish-details-con">
          <h3>
            {{meal.dishes.mains[0].name}}
            <i class="fa fa-thumbs-up" @click="incCounter('mains',0)"></i>
            <span class="count">{{this.vote.mains.opt1}}</span>
          </h3>
          <h5
            v-if="meal.dishes.mains[0].description.length > 0"
          >{{meal.dishes.mains[0].description}}</h5>
        </div>
        <h3 class="or">Or</h3>
        <div class="dish-details-con">
          <h3>
            {{meal.dishes.mains[1].name}}
            <i class="fa fa-thumbs-up" @click="incCounter('mains',1)"></i>
            <span class="count">{{this.vote.mains.opt2}}</span>
          </h3>
          <h5
            v-if="meal.dishes.mains[1].description.length > 0"
          >{{meal.dishes.mains[1].description}}</h5>
        </div>
      </div>
      <div class="border"></div>
    </div>
    <div class="dish">
      <h2>Dessert</h2>
      <div class="Dessert flex menu">
        <div class="dish-details-con">
          <h3>
            {{meal.dishes.dessert[0].name}}
            <i
              class="fa fa-thumbs-up"
              @click="incCounter('dessert',0)"
            ></i>
            <span class="count">{{this.vote.dessert.opt1}}</span>
          </h3>
          <h5
            v-if="meal.dishes.dessert[0].description.length > 0"
          >{{meal.dishes.dessert[0].description}}</h5>
        </div>
        <h3 class="or">Or</h3>
        <div class="dish-details-con">
          <h3>
            {{meal.dishes.dessert[1].name}}
            <i
              class="fa fa-thumbs-up"
              @click="incCounter('dessert',1)"
            ></i>
            <span class="count">{{this.vote.dessert.opt2}}</span>
          </h3>
          <h5
            v-if="meal.dishes.dessert[1].description.length > 0"
          >{{meal.dishes.dessert[1].description}}</h5>
        </div>
      </div>
      <div class="border"></div>
    </div>
    <div class="dish">
      <h2>Drinks</h2>
      <div class="drinks flex">
        <h4 v-for="(drink, idx) in meal.dishes.drinks" :key="idx">{{drink }} ,</h4>
        
      </div>
    </div>
  </section>
</template>
<script>
import SocketService from "@/services/SocketService";
export default {
  props: ["meal"],
  // data() {
  //   return {
  //     // count: this.meal.dishes.appetizers[0].count,
  //     // meall: this.meal,
  //     vote: {
  //       appetizers: {
  //         opt1: this.meal.dishes.appetizers[0].count,
  //         opt2: this.meal.dishes.appetizers[1].count
  //       },
  //       mains: {
  //         opt1: this.meal.dishes.mains[0].count,
  //         opt2: this.meal.dishes.mains[1].count
  //       },
  //       dessert: {
  //         opt1: this.meal.dishes.dessert[0].count,
  //         opt2: this.meal.dishes.dessert[1].count
  //       }
  //     }
  //   };
  // },
  computed: {
    vote() {
      return {
        appetizers: {
          opt1: this.meal.dishes.appetizers[0].count,
          opt2: this.meal.dishes.appetizers[1].count
        },
        mains: {
          opt1: this.meal.dishes.mains[0].count,
          opt2: this.meal.dishes.mains[1].count
        },
        dessert: {
          opt1: this.meal.dishes.dessert[0].count,
          opt2: this.meal.dishes.dessert[1].count
        }
      }
    }
  },
  methods: {
    async incCounter(typeOfMeal, idx) {
      let Meal = JSON.parse(JSON.stringify(this.meal));
      switch (typeOfMeal) {
        case "appetizers":
          {
            Meal.dishes.appetizers[idx].count++;
          }
          break;
        case "mains":
          {
            Meal.dishes.mains[idx].count++;
          }
          break;
        case "dessert": {
          Meal.dishes.dessert[idx].count++;
        }
        default:
          break;
      }
      SocketService.emit("created", Meal);
      await this.$store.dispatch({ type: "editMeal", currMeal: Meal });   
    }
  },

 

};
</script>
