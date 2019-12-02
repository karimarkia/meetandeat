<template>
  <section v-if="meal" >
    <!-- <NavHeader class="spec"></NavHeader> -->
    <div class="detailsPage flex">

    <div :class="{ bg:isShowModal}"></div>
    <section class="mealDetails flex">
      <h1>{{meal.title}}</h1>
      <h3>{{meal.location.city}}, {{meal.location.country}}</h3>
    </section>
    <section class="hostReview flex">
      <el-rate
        v-model="meal.rate"
        disabled
        show-score
        text-color="#FF385C"
        score-template="{value} points"
      ></el-rate>
    </section>
    <div class="imgs-gallery" @click="getImgGallery">
      <img
        :data-i="idx"
        class="imgDetails"
        v-for="(img , idx) in meal.imgUrl"
        :key="idx"
        :src="(img)"
      />
    </div>
    <section>
      <div>
        <i class="fa fa-user-friends"></i>
      </div>
    </section>
    <section class="flex mainDetails">
      <div class="description">
        <section class="moreMealDetails flex">
          <h4>
            <i class="fa fa-clock-o"></i>
            {{dinnerTime}}
          </h4>
          <h4 v-for="(tag , idx) in meal.tags" :key="idx">
            <i class="fa fa-circle"></i>
            {{tag}}
          </h4>
          <h4>
            <i class="fa fa-users"></i>
            2 - {{meal.maxUsers}}
          </h4>
        </section>
        <div :class="{ modalImage:isShowGallery, displayNon:!isShowGallery}">
          <div class="block">
            <el-carousel :interval="4000" type="card" height="400px">
              <el-carousel-item v-for="(img , idx) in meal.imgUrl" :key="idx">
                <img :data-i="idx" class="imgtest" :src="(img)" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="modalBtn flex">
            <button class="pricerange sortPrice" @click="getImgGallery">Close</button>
          </div>
        </div>
        <div :class="{ modalOrder:isShowModal, displayNon:!isShowModal}">
          <div class="modalBtn flex">
            <button class="pricerange sortPrice" @click="orderDetails">Close</button>
            <!-- <button class="pricerange sortPrice" @click="sortMeals">Save</button> -->
          </div>
        </div>
        <h3>A word about the experience</h3>
        <p>{{meal.description}}</p>
        <p>{{meal.ownerId.about}}</p>

        <h5>{{meal.ownerId.name}}</h5>
      </div>
      <div class="priceDetails flex">
        <h1>
          {{meal.price}}$
          <span>Price per guest</span>
        </h1>
        <div>
          <span>Date</span>
          <div class="block datetime">
            <el-date-picker class="datetime" type="datetime" placeholder="Select date and time"></el-date-picker>
          </div>
        </div>
        <div>
          <span>Number of guests</span>
          <el-input-number class="numGust" v-model="numOfGust" size="medium" :min="1" :step="1"></el-input-number>
        </div>
        <div class="payment">
          <h3 class="total">Total</h3>
          <h3 class="totalAmount" v-if="numOfGust > 1">
            <span>{{numOfGust}} guests x {{meal.price}}$</span>
            <span class="totalPrice">{{numOfGust * meal.price}}$</span>
          </h3>
          <h3 class="totalAmount" v-else>
            <span>{{numOfGust}} guest x {{meal.price}}$</span>
            <span class="totalPrice">{{numOfGust * meal.price}}$</span>
          </h3>
        </div>
        <el-button class="joinToMeal" @click="orderDetails" type="primary" round>Join To Meal</el-button>
      </div>
    </section>

    <Menu :meal="meal" />
    <section class="whoIsGoing">
      <h2>Who's going?</h2>
      <MealGuest />
    </section>

    <section class="reviewArea">
      <h2>
        <i class="fa fa-star"></i>
        {{meal.rate}} (248 reviews)
      </h2>
      <Reviews />
    </section>
    <div class="mapdetails">
      <h4>Location</h4>

      <h5>The full address will be provided once the booking is confirmed</h5>
    </div>
    <Map class="locationMap" :location="location" />
    </div>
  </section>
</template>

<script>
import NavHeader from '@/views/NavHeader.vue'
import Map from "@/components/map.vue";
import Menu from "@/components/Menu.vue";
import Reviews from "@/components/Reviews.vue";
import MealGuest from "@/components/MealGuest.vue";
export default {
  name: "mealdetails",
  components: {
    NavHeader,
    Map,
    Menu,
    Reviews,
    MealGuest
  },
  data() {
    return {
      isShowModal: false,
      isShowGallery: false,
      numOfGust: 1
    };
  },
  created() {
    this.$store.dispatch("loadMeals");
    const mealId = this.$route.params._id;
    if (!mealId) return;
    this.$store.dispatch({ type: "setCurrMeal", mealId });
  },
  computed: {
    meal() {
      return this.$store.getters.currMeal;
    },
    location() {
      return this.$store.getters.currMeal.location;
    },
    dinnerTime() {
      let startTime = new Date(+this.meal.atDate) + "";
      let endTime = this.meal.duration * 60000 * 60 + +this.meal.atDate;
      endTime = new Date(endTime) + "";
      startTime = startTime.substring(16, 21);
      endTime = endTime.substring(16, 21);
      let time = startTime + " - " + endTime;

      return time;
    }
  },
  methods: {
    orderDetails() {
      this.isShowModal = !this.isShowModal;
    },
    getImgGallery() {
      this.isShowGallery = !this.isShowGallery;
    }
  }
};
// https://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+California&key=AIzaSyAIf_SiIrDkiwPumk-JVkjC52m7Htv3m8w
// mongodb+srv://artyomP1:Art13579@cluster0-hkrir.mongodb.net/test?retryWrites=true&w=majority
</script>
<style>
.fa {
  color: #ff5a5f;
}

</style>

