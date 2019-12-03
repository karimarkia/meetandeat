<template>
  <section class="mealMenu">
    <h2>Menu</h2>

    <div class="dish">
      <h2>Appetizers</h2>
      <div class="appetizers flex menu">
        <div @click="incCounter">
          <h3>
            {{meal.dishes.appetizers[0].name }}
            <i class="fa fa-thumbs-up" ></i>
            <span class="count">{{this.vote.appetizers.opt1}}</span>
          </h3>
          <h5
            v-if="meal.dishes.appetizers[0].description.length > 0"
          >{{meal.dishes.appetizers[0].description}}</h5>
        </div>
        <h4>Or</h4>
        <div @click="incCounter">
          <h3>
            {{meal.dishes.appetizers[1].name}}
            <i class="fa fa-thumbs-up" @click="incCounter('appetizers',1)"></i>
            <span class="count">{{this.vote.appetizers.opt2}}</span>
          </h3>
          <h5
            v-if="meal.dishes.appetizers[1].description.length > 0"
          >{{meal.dishes.appetizers[1].description}}</h5>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="dish">
      <h2>Mains</h2>
      <div class="Mains flex menu">
        <div>
          <h3>
            {{meal.dishes.mains[0].name}}
            <i class="fa fa-thumbs-up" @click="incCounter"></i>
            <span class="count">{{this.vote.mains.opt1}}</span>
          </h3>
          <h5
            v-if="meal.dishes.mains[0].description.length > 0"
          >{{meal.dishes.mains[0].description}}</h5>
        </div>
        <h4>Or</h4>
        <div>
          <h3>
            {{meal.dishes.mains[1].name}}
            <i class="fa fa-thumbs-up" @click="incCounter"></i>
            <span class="count">{{this.vote.mains.opt2}}</span>
          </h3>
          <h5
            v-if="meal.dishes.mains[1].description.length > 0"
          >{{meal.dishes.mains[1].description}}</h5>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="dish">
      <h2>Dessert</h2>
      <div class="Dessert flex menu">
        <div>
          <h3>
            {{meal.dishes.dessert[0].name}}
            <i class="fa fa-thumbs-up" @click="incCounter"></i>
            <span class="count">{{this.vote.dessert.opt1}}</span>
          </h3>
          <h5
            v-if="meal.dishes.dessert[0].description.length > 0"
          >{{meal.dishes.dessert[0].description}}</h5>
        </div>
        <h4>Or</h4>
        <div>
          <h3>
            {{meal.dishes.dessert[1].name}}
            <i class="fa fa-thumbs-up" @click="incCounter"></i>
            <span class="count">{{this.vote.dessert.opt2}}</span>
          </h3>
          <h5
            v-if="meal.dishes.dessert[1].description.length > 0"
          >{{meal.dishes.dessert[1].description}}</h5>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="dish">
      <h2>Drinks</h2>
      <div class="drinks flex menu">
        <span v-for="(drink, idx) in meal.dishes.drinks" :key="idx">{{drink }} ,</span>
        <span>Guests can bring alcohol</span>
      </div>
    </div>
  </section>
</template>
<script>
  import SocketService from '@/services/SocketService';
export default {
  props: ["meal"],
  data() {
    return {
      // count: this.meal.dishes.appetizers[0].count,
      vote:{
          appetizers:{
            opt1:this.meal.dishes.appetizers[0].count,
            opt2:this.meal.dishes.appetizers[1].count
          },
          mains:{
            opt1:this.meal.dishes.mains[0].count,
            opt2:this.meal.dishes.mains[1].count
          },
          dessert:{
            opt1:this.meal.dishes.dessert[0].count,
            opt2:this.meal.dishes.dessert[1].count
          }
      }
    }
  },
  methods: {
    async incCounter(typeOfMeal, idx){
      let Meal = JSON.parse(JSON.stringify(this.meal));

      switch (typeOfMeal) {
        case 'appetizers':{
          Meal.dishes.appetizers[idx].count++;
        }
        // break;
        case 'mains':{
            Meal.dishes.mains[idx].count++;
        }
          // break;
            case 'dessert':{
            Meal.dishes.dessert[idx].count++;
        }
        default:
          break;
      }
        
      SocketService.emit('created',Meal)
        await this.$store.dispatch({ type: "editMeal", currMeal:Meal });
      //  console.log(Meal);
    },
   
  },
  created() {
    SocketService.on('inc counter',data=>{
      console.log(data)
    })
       
    
  },
};
</script>
