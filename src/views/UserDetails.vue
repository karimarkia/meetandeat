<template>
  <section class="userDetails flex" v-if="user">
    <h1>Hi, {{user.fullname}}</h1>
    <span>Name:</span>
    <el-input class="mainUserDetails" v-model="user.fullname"></el-input>
    <span>Email:</span>
    <el-input class="mainUserDetails" v-model="user.email"></el-input>
    <span>Country:</span>
    <el-input v-if="user.location.country" class="mainUserDetails" v-model="user.location.country"></el-input>
    <span>City:</span>
    <el-input v-if="user.location.city" class="mainUserDetails" v-model="user.location.city"></el-input>
    <span>Gender:</span>
    <el-input class="mainUserDetails" v-model="user.gender"></el-input>
    <span>BirthDay:</span>
    <el-input class="mainUserDetails" v-model="user.birthDay"></el-input>

    <h2>My Meals</h2>
    <div class="myMeal" v-for="(meal, idx) in meals" :key="idx">
      <img class="img-card img-card2" v-if="meal.imgUrl" :src="(meal.imgUrl[0])" />
      <div class="test">
        <h4>{{meal.title}}</h4>
        <h4>
          {{meal.rate}}
          <span>
            <i class="fa fa-star"></i>
          </span>
        </h4>
      </div>
      <p>
        <span>{{meal.price}}$</span>
      </p>
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
      return this.$store.getters.userMeals;
    },
    editURL() {
      return `/edit/${this.meal._id}`;
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
