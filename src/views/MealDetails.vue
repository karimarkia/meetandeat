<template>
  <section v-if="meal" class="detailsPage flex">
    <section>
      <h1>{{meal.title}}</h1>
      <h3>
        <i class="fa fa-star"></i>
        {{meal.rate}}. {{meal.country}} {{meal.city}}
      </h3>
    </section>
    <div class="imgs-gallery">
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
        <i class="fa fa-clock"></i>
        <i class="fa fa-user-friends"></i>
      </div>
    </section>
    <section class="flex">
      <div class="description">
        <p>{{meal.description}}</p>
      </div>
      <div class="priceDetails flex">
        <h1>
          {{meal.price}}$
          <span>Price per guest</span>
        </h1>
        <span>Date</span>
          <div class="block">
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
        <span>Number of guests</span>
        <el-dropdown split-button type="primary" @click="handleClick">
          select a number of guests
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>1</el-dropdown-item>
            <el-dropdown-item>2</el-dropdown-item>
            <el-dropdown-item>3</el-dropdown-item>
            <el-dropdown-item>4</el-dropdown-item>
            <el-dropdown-item>5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary" round>Primary</el-button>
      </div>
    </section>
    <section class="mealMenu">
      <h2>Menu</h2>
      <h3>Appetizers</h3>
      <div class="dish">
        <h4>
          <span>{{meal.dishes.appetizers[0].name}}</span>...
          <span>{{meal.dishes.appetizers[0].count}}</span>
        </h4>
        <h4>
          <span>{{meal.dishes.appetizers[1].count}}</span>...
          <span>{{meal.dishes.appetizers[1].name}}</span>
        </h4>
      </div>
      <h3>Mains</h3>
      <div class="dish">
        <h4>
          <span>{{meal.dishes.mains[0].name}}</span>...
          <span>{{meal.dishes.mains[0].count}}</span>
        </h4>
        <h4>
          <span>{{meal.dishes.mains[1].count}}</span>...
          <span>{{meal.dishes.mains[1].name}}</span>
        </h4>
      </div>
      <h3>Appetizers</h3>
      <div class="dish">
        <h4>
          <span>{{meal.dishes.dessert[0].name}}</span>...
          <span>{{meal.dishes.dessert[0].count}}</span>
        </h4>
        <h4>
          <span>{{meal.dishes.dessert[1].count}}</span>...
          <span>{{meal.dishes.dessert[1].name}}</span>
        </h4>
      </div>
    </section>
    <section class="reviewArea">
      <h2>reviews place</h2>
    </section>
    <h4>The place & Amenities</h4>
    <h5>The full address will be provided once the booking is confirmed</h5>
    <Map class="locationMap" :location="location" />
  </section>
</template>

<script>
import Map from "@/components/map.vue";
export default {
  name: "mealdetails",
  components: {
    Map
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("loadMeals");
    const mealId = this.$route.params.id;
    if (!mealId) return;
    this.$store.dispatch({ type: "setCurrMeal", mealId });
  },
  computed: {
    meal() {
      return this.$store.getters.currMeal;
    },
    location() {
      return this.$store.getters.currMeal.location;
    }
  },
  methods: {
	}
}
// https://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+California&key=AIzaSyAIf_SiIrDkiwPumk-JVkjC52m7Htv3m8w
</script>
<style>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

