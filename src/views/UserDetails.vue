<template>
  <section class="userAccount flex" v-if="user">
    <section class="userProfile flex">
      <h1>Hi, {{user.fullname}}</h1>
      <div class="imgUser">
        <el-avatar :size="200" :src="user.imgUrl"></el-avatar>
      </div>
      <section class="userDetails flex">
        <span>Name:</span>
        <el-input class="mainUserDetails" v-model="user.fullname"></el-input>
        <span>Email:</span>
        <el-input class="mainUserDetails" v-model="user.email"></el-input>
        <span>Country:</span>
        <el-input
          v-if="user.location.country"
          class="mainUserDetails"
          v-model="user.location.country"
        ></el-input>
        <span>City:</span>
        <el-input v-if="user.location.city" class="mainUserDetails" v-model="user.location.city"></el-input>
        <span>Gender:</span>
        <el-input class="mainUserDetails" v-model="user.gender"></el-input>
        <span>BirthDay:</span>
        <el-input class="mainUserDetails" v-model="birthDaya"></el-input>
        <div class="flex">
          <el-button type="info" @click="OnYourEvent">your events</el-button>
          <el-button type="info" @click="OnGoingEvent" plain>Bookd events</el-button>
        </div>
      </section>
    </section>
    <section class="userMeals">
      <section v-if="meals.length > 0 && createdEvent">
        <h2 v-if="meals">My Events</h2>
        <div class="myMeal flex" v-for="(meal, idx) in meals" :key="idx">
          <img class="img-profile-list" v-if="meal.imgUrl" :src="(meal.imgUrl[0])" />
          <div class="flex column justify-center">
            <div class="test">
              <h4>{{meal.title}}</h4>
            </div>
            <div class="controlBtn">
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
      </section>

      <div v-if="goingEvents">
        <h2 v-if="user.meals">My Booking Meals</h2>
        <div class="bookedMeals" v-for="(userMeal, idx) in userMeals" :key="idx">
          <router-link class="routerToDetails" :to="'/details/' + userMeal.id">
            <img class="img-profile-list2" v-if="userMeal.img" :src="(userMeal.img)" />
          </router-link>
          <h4>{{userMeal.name}}</h4>
        </div>
        
      </div>
    </section>
  </section>
</template>

<script>
import UserService from "../services/UserService";

export default {
  data() {
    return {
      birthDaya: '20/06/1990',
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
      console.log(this.$store.getters.userMeals);
      return this.$store.getters.userMeals;
    },
    editURL() {
      return `/edit/${this.meal._id}`;
    },
    userMeals() {
      return this.user.meals;
    },
            birthDay() {
      let date = new Date(+this.meal.atDate)+'';
         date = date.substring(3, 10)
      // date=date.toLocaleDateString()
      //  date = date.toGMTString();
      // let age = today - birthDate;
      // age = age / (60000 * 60 * 24 * 365);
      return date
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
   
  },

  async created() {
    const id = this.$route.params._id;
    const user = await UserService.getById(id);
    this.user = user;
  }
};
</script>
