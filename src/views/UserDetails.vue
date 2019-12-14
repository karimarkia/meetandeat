<template>
  <section class="user-account flex" v-if="user">
    <section class="user-profile flex">
      <h1>Hi, {{user.fullname}}</h1>
      <div class="profile-details-sec">
      <div class="img-user">
        <el-avatar :size="200" :src="user.imgUrl"></el-avatar>
      </div>

      <section class="user-details flex">
        <span>Name: {{ user.fullname}}</span>
        <!-- <el-input class="main-user-details" v-model="user.fullname"></el-input> -->
        <span>Email: {{user.email}}</span>
        <!-- <el-input class="main-user-details" v-model="user.email"></el-input> -->
        <span>Country: {{user.location.country}}</span>
        <!-- <el-input
          v-if="user.location.country"
          class="main-user-details"
          v-model="user.location.country"
        ></el-input>-->
        <span>City: {{user.location.city}}</span>
        <!-- <el-input v-if="user.location.city" class="main-user-details" v-model="user.location.city"></el-input> -->
        <span>Gender: {{user.gender}}</span>
        <!-- <el-input class="main-user-details" v-model="user.gender"></el-input> -->
        <span>BirthDay: {{birthDaya}}</span>
        <!-- <el-input class="main-user-details" v-model="birthDaya"></el-input> -->
        <div class="flex">
          <el-button type="info" @click="OnYourEvent">My events</el-button>
          <el-button type="info" @click="OnGoingEvent" plain>Bookd events</el-button>
        </div>
      </section>
      </div>
    </section>
    <section class="user-meals">
      <section v-if="meals.length > 0 && createdEvent">
        <h2 v-if="meals">My Events</h2>
        <div v-for="(meal, idx) in meals" :key="idx">
          <div class="my-meal flex">
            <img class="img-profile-list" v-if="meal.imgUrl" :src="(meal.imgUrl[0])" />
            <div class="flex column justify-center">
              <div class="test">
                <h4 class="your-meal-title">{{meal.title}}</h4>
              </div>
              <div>
                <h4>{{mealDate(meal._id)}}</h4>
              </div>
              <div class="control-btn">
                <router-link :to="'/details/' + meal._id">
                  <el-button class="events-profile-btn" type="danger">DETAILS</el-button>
                </router-link>
                <router-link :to="'/edit/'+ meal._id">
                  <el-button class="cards-btns events-profile-btn" type="danger">EDIT</el-button>
                </router-link>
                <el-button
                  class="events-profile-btn"
                  @click="removeMeal(meal._id)"
                  type="danger"
                >DELETE</el-button>
              </div>
            </div>
          </div>
          <div class="event-guests">
            <h2>Event guests</h2>
            <MealGuest class="myguest" :meal="meal" />
          </div>
          <hr class="hr-user" />
        </div>
      </section>
      <div v-if="goingEvents">
        <h2 v-if="user.meals">My Booking Meals</h2>
        <div v-for="(userMeal, idx) in userMeals" :key="idx">
          <div class="booked-meals">
            <router-link class="router-to-details" :to="'/details/' + userMeal.id">
              <img class="img-profile-list2" v-if="userMeal.img" :src="(userMeal.img)" />
            </router-link>
            <div class="flex column">
            <h4 class="name-meal">{{userMeal.name}}</h4>
            <h4 class="date-meal">{{mealDate(userMeal.id)}} </h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import UserService from "../services/UserService";
import MealGuest from "@/components/MealGuest.vue";
export default {
  components: {
    MealGuest
  },
  data() {
    return {
      birthDaya: "20/06/1990",
      createdEvent: true,
      goingEvents: false,
      user: {
        location: {
          country: null,
          city: null
        }
      }
    };
  },
  computed: {
    meals() {
      this.$store.commit("userMeals", { userId: this.user._id });
      return this.$store.getters.userMeals;
    },
    editURL() {
      return `/edit/${this.meal._id}`;
    },
    userMeals() {
      return this.user.meals;
    },
    birthDay() {
      let date = new Date(+this.meal.atDate) + "";
      date = date.substring(3, 10);
      return date;
    },
    allMeals() {
      return this.$store.getters.mealsToShow;
    } 
  },
  methods: {
    removeMeal(mealId) {
      this.$store.dispatch({ type: "removeMeal", mealId });
    },
    OnYourEvent() {
      this.createdEvent = true;
      this.goingEvents = false;
    },
    OnGoingEvent() {
      this.createdEvent = false;
      this.goingEvents = true;
    },
    mealDate(mealId) {
      let currMeal = this.allMeals.find(meal => meal._id === mealId)
      let date = new Date(+currMeal.atDate) + "";
      date = date.substring(3, 10);
      return date;
    }  

  },
  async created() {
    this.$store.dispatch("loadMeals");
    const id = this.$route.params._id;
    const user = await UserService.getById(id);
    this.user = user;
  }
};
</script>

<style  scoped>  
  .date-meal{
    margin: 0;
  }
  .your-meal-title{
    margin-bottom: 10px;
  }
  @media(max-width: 600px) {
    .name-meal {
        margin-top: 0;
    }
}
</style>
