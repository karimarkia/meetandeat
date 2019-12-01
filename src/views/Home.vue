<template>
  <section>
    <AppHeader @toggleRegister="toggleRegister" @toggleLogIn="toggleLogIn"></AppHeader>
    <div class="main-img">
      <h1 >Meet&Eat</h1>
      <Main-filter></Main-filter>
    </div>
    <Register-module @toggleRegister="toggleRegister" :class="{ active: isActive}"></Register-module>
        <LogIn @toggleLogIn="toggleLogIn" :class="{ active: isLogIn}"></LogIn>
    <!-- <div v-for="(meal,idx) in meals" :key="meal._id">
      <h1>{{meal.title}}</h1>
    </div>-->
    <div class="sec-section">
      <h1>Places to eat&meet people around the world</h1>
      <div class="cards-container-sec">
        <MealPreview v-for="(meal,idx) in meals" v-if="idx <= 3" :key="meal._id" :meal="meal"></MealPreview>
      </div>
    </div>

    <div class="section-testimonials">
      <h2>Our customers can't live without us</h2>
      <div class="row">
        <div class="col span-1-of-3">
          <blockquote>
            Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
            <cite>
              <img src="../img/customer-1.jpg" alt="Customer 1 photo" />Alberto Duncan
            </cite>
          </blockquote>
        </div>
        <div class="col span-1-of-3">
          <blockquote>
            Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
            <cite>
              <img src="../img/customer-2.jpg" alt="Customer 2 photo" />Joana Silva
            </cite>
          </blockquote>
        </div>
        <div class="col span-1-of-3">
          <blockquote>
            I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
            <cite>
              <img src="../img/customer-3.jpg" alt="Customer 3 photo" />Milton Chapman
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeader from "@/views/AppHeader";
import RegisterModule from "../components/RegisterModule.vue";
import LogIn from "../components/LogIn.vue";
import MainFilter from "../components/MainFilter.vue";
import MealPreview from "../components/MealPreview.vue";
export default {
  name: "home",

  data(){
    return{
      isActive: false,
      isLogIn: false,
      isLogOut: true
    }
  },
  methods: {
    toggleRegister() {
      this.isActive =!this.isActive;
    },
    toggleLogIn(){
       this.isLogIn = !this.isLogIn;
    },
  },

  computed: {
    meals() {
      // console.log(this.$store.getters.mealsToShow);
      return this.$store.getters.mealsToShow;
    }
  },
  components: {
    RegisterModule,
    MainFilter,
    AppHeader,
    MealPreview,
    LogIn
  }
};
</script>

<style  scoped>
.active {
  display: block;
}


.sec-section h1 {
  text-align: center;
  font-size: 28px;
  padding: 30px 0;
  word-spacing: 2px;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
  color: #555;
  font-family: "Lato", "Arial", sans-serif;
}
.sec-section h1:after {
  display: block;
  height: 2px;
  background-color: #e67e22;
  content: " ";
  width: 100px;
  margin: 0 auto;
  margin-top: 30px;
}
.cards-container-sec{
  padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 10px;
    margin: 0 30px;
}

.cards-container-sec{
  height: 500px;
  width: 100%
}

</style>