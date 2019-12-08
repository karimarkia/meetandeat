<template>
  <section class="mealMenu2">
    <h1>Menu</h1>
    <div class="dish2">
      <h2>Appetizers</h2>
      <div class="appetizers flex menu2">
        <div class="dish-details-con">
          <div>
            <h3>
              <i class="fa fa-thumbs-up" @click="incCounter('appetizers',0,1)"></i>
              <span class="count">{{this.vote.appetizers.opt1}}</span>
            </h3>
          </div>
          <div>
            <h3>{{meal.dishes.appetizers[0].name }}</h3>
            <h5
              v-if="meal.dishes.appetizers[0].description.length > 0"
            >{{meal.dishes.appetizers[0].description}}</h5>
          </div>
        </div>
        <div class="dish-details-con">
          <div>
            <h3>
              <i class="fa fa-thumbs-up" @click="incCounter('appetizers',1,0)"></i>
              <span class="count">{{this.vote.appetizers.opt2}}</span>
            </h3>
          </div>
          <div>
            <h3>{{meal.dishes.appetizers[1].name}}</h3>
            <h5
              v-if="meal.dishes.appetizers[1].description.length > 0"
            >{{meal.dishes.appetizers[1].description}}</h5>
          </div>
        </div>
      </div>
      <div class="border"></div>
    </div>
    <div class="dish2">
      <h2>Mains</h2>
      <div class="appetizers flex menu2">
        <div class="dish-details-con">
          <div>
            <h3>
              <i class="fa fa-thumbs-up" @click="incCounter('mains',0,1)"></i>
              <span class="count">{{this.vote.mains.opt1}}</span>
            </h3>
          </div>
          <div>
            <h3>{{meal.dishes.mains[0].name }}</h3>
            <h5
              v-if="meal.dishes.mains[0].description.length > 0"
            >{{meal.dishes.mains[0].description}}</h5>
          </div>
        </div>
        <div class="dish-details-con">
          <div>
            <h3>
              <i class="fa fa-thumbs-up" @click="incCounter('mains',1,0)"></i>
              <span class="count">{{this.vote.mains.opt2}}</span>
            </h3>
          </div>
          <div>
            <h3>{{meal.dishes.mains[1].name}}</h3>
            <h5
              v-if="meal.dishes.mains[1].description.length > 0"
            >{{meal.dishes.mains[1].description}}</h5>
          </div>
        </div>
      </div>
      <div class="border"></div>
    </div>
    <div class="dish2">
      <h2>Desserts</h2>
      <div class="appetizers flex menu2">
        <div class="dish-details-con">
          <div>
            <h3>
              <i class="fa fa-thumbs-up" @click="incCounter('dessert',0,1)"></i>
              <span class="count">{{this.vote.dessert.opt1}}</span>
            </h3>
          </div>
          <div>
            <h3>{{meal.dishes.dessert[0].name }}</h3>
            <h5
              v-if="meal.dishes.dessert[0].description.length > 0"
            >{{meal.dishes.dessert[0].description}}</h5>
          </div>
        </div>
        <div class="dish-details-con">
          <div>
            <h3>
              <i class="fa fa-thumbs-up" @click="incCounter('dessert',1,0)"></i>
              <span class="count">{{this.vote.dessert.opt2}}</span>
            </h3>
          </div>
          <div>
            <h3>{{meal.dishes.dessert[1].name}}</h3>
            <h5
              v-if="meal.dishes.dessert[1].description.length > 0"
            >{{meal.dishes.dessert[1].description}}</h5>
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
      IsFirstClick: true,
      IsFirstMainsClick: true,
      IsFirstDessertClick: true,
      isZeroIdxClick: false,
      isOneIdxClick: false
    };
  },
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
      };
    }
  },
  methods: {
    async incCounter(typeOfMeal, idx, idx2) {
      let Meal = JSON.parse(JSON.stringify(this.meal));
      switch (typeOfMeal) {
        case "appetizers":
          {
            if (this.IsFirstClick) {
              this.isZeroIdxClick = false;
              this.isOneIdxClick = false;
              console.log(Meal.dishes.appetizers[idx].count);
              Meal.dishes.appetizers[idx].count++;
              console.log(Meal.dishes.appetizers[idx].count);
              this.IsFirstClick = false;
              if (idx === 0) {
                this.isZeroIdxClick = true;
              } else {
                this.isOneIdxClick = true;
              }
            } else {
              if (
                (idx === 0 && this.isZeroIdxClick) ||
                (idx === 1 && this.isOneIdxClick)
              ) {
                console.log(idx, this.isZeroIdxClick, this.IsFirstClick);
              } else {
                if (idx === 0) {
                  this.isZeroIdxClick = true;
                  this.isOneIdxClick = false;
                } else {
                  this.isOneIdxClick = true;
                  this.isZeroIdxClick = false;
                }
                Meal.dishes.appetizers[idx].count++;
                Meal.dishes.appetizers[idx2].count--;
              }
            }
          }
          break;
        case "mains":
          {
            if (this.IsFirstMainsClick) {
              this.isZeroIdxClick = false;
              this.isOneIdxClick = false;
              console.log(Meal.dishes.mains[idx].count);
              Meal.dishes.mains[idx].count++;
              console.log(Meal.dishes.mains[idx].count);
              this.IsFirstMainsClick = false;
              if (idx === 0) {
                this.isZeroIdxClick = true;
              } else {
                this.isOneIdxClick = true;
              }
            } else {
              if (
                (idx === 0 && this.isZeroIdxClick) ||
                (idx === 1 && this.isOneIdxClick)
              ) {
                console.log(idx, this.isZeroIdxClick, this.IsFirstMainsClick);
              } else {
                if (idx === 0) {
                  this.isZeroIdxClick = true;
                  this.isOneIdxClick = false;
                } else {
                  this.isOneIdxClick = true;
                  this.isZeroIdxClick = false;
                }
                Meal.dishes.mains[idx].count++;
                Meal.dishes.mains[idx2].count--;
              }
            }
          }
          break;
        case "dessert": {
          if (this.IsFirstDessertClick) {
            this.isZeroIdxClick = false;
            this.isOneIdxClick = false;
            console.log(Meal.dishes.dessert[idx].count);
            Meal.dishes.dessert[idx].count++;
            console.log(Meal.dishes.dessert[idx].count);
            this.IsFirstDessertClick = false;
            if (idx === 0) {
              this.isZeroIdxClick = true;
            } else {
              this.isOneIdxClick = true;
            }
          } else {
            if (
              (idx === 0 && this.isZeroIdxClick) ||
              (idx === 1 && this.isOneIdxClick)
            ) {
              console.log(idx, this.isZeroIdxClick, this.IsFirstDessertClick);
            } else {
              if (idx === 0) {
                this.isZeroIdxClick = true;
                this.isOneIdxClick = false;
              } else {
                this.isOneIdxClick = true;
                this.isZeroIdxClick = false;
              }
              Meal.dishes.dessert[idx].count++;
              Meal.dishes.dessert[idx2].count--;
            }
          }
        }
        default:
          break;
      }
      SocketService.emit("created", Meal);
      await this.$store.dispatch({ type: "editMeal", currMeal: Meal });
    }
  }
};
</script>
