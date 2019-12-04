<template>
  <section class="userAccount flex" v-if="user">
    <section class="userProfile flex">
      <h1>Hi, {{user.fullname}}</h1>
      <div class="imgUser" >
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
        <el-input class="mainUserDetails" v-model="user.birthDay"></el-input>
      </section>
    </section>
<section class="userMeals">
      <h2 v-if="meals">My Meals</h2>
    <section v-if="meals.length > 0" class="flex">
      <div class="myMeal" v-for="(meal, idx) in meals" :key="idx">
        <img class="img-card img-card2" v-if="meal.imgUrl" :src="(meal.imgUrl[0])" />
        <div class="test">
          <h4>{{meal.title}}</h4>
        </div>
        <div class="controlBtn">
          <router-link :to="'/details/' + meal._id">
            <el-button type="danger">DETAILS</el-button>
          </router-link>
          <router-link :to="'/edit/'+ meal._id">
            <el-button class="cards-btns" type="danger">EDIT</el-button>
          </router-link>
          <el-button @click="removeMeal(meal._id)" type="danger">DELETE</el-button>
        </div>
      </div>
    </section>
    <h2 v-if="user.meals">My Booking Meals</h2>

      <div class=" bookedMeals" v-for="(userMeal, idx) in userMeals" :key="idx">
        <router-link class="routerToDetails " :to="'/details/' + userMeal.id">
          <img class="img-card img-card2 " v-if="userMeal.img" :src="(userMeal.img)" />
          <h4>{{userMeal.name}}</h4>
        </router-link>
      </div>



  </section>
  </section>
</template>

<script>
import UserService from "../services/UserService";

export default {
  data() {
    return {
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
    }
  },
  methods: {
    removeMeal(mealId) {
      this.$store.dispatch({ type: "removeMeal", mealId });
    }
  },
  async created() {
    const id = this.$route.params._id;
    const user = await UserService.getById(id);
    this.user = user;    
  }
};
</script>
