<template>
  <section>
    <AppHeader></AppHeader>
    <div class="main-img">
      <h1 @click="toggleRegister">Meet&Eat</h1>
      <Main-filter></Main-filter>
    </div>
    <Register-module @toggleRegister="toggleRegister" :class="{ active: isActive}"></Register-module>
    <!-- <div v-for="(meal,idx) in meals" :key="meal._id">
      <h1>{{meal.title}}</h1>
    </div>-->
    <div class="sec-section">
      <h1>Places to eat&meet people around the world</h1>
      <div class="cards-container-sec">
        <MealPreview
          class="sec"
          v-for="(meal,idx) in meals"
          v-if="idx <= 3"
          :key="meal._id"
          :meal="meal"
        ></MealPreview>
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

    <div class="section-steps">
      <h2>How it works &mdash; Simple as 1, 2, 3</h2>
      <div class="row">
        <div class="col span-1-of-2 steps-box">
          <img src="@/img/app-iPhone.png" alt="Omnifood app on iPhone" class="app-screen js--wp-2" />
        </div>
        <div class="col span-1-of-2 steps-box">
          <div class="works-step clearfix">
            <div>1</div>
            <p>Choose the subscription plan that best fits your needs and sign up today.</p>
          </div>
          <div class="works-step clearfix">
            <div>2</div>
            <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
          </div>
          <div class="works-step clearfix">
            <div>3</div>
            <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
          </div>
          <a href="#" class="btn-app">
            <img src="@/img/download-app.svg" alt="App Store Button" />
          </a>
          <a href="#" class="btn-app">
            <img src="@/img/download-app-android.png" alt="Play Store Button" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeader from "@/views/AppHeader";
import RegisterModule from "../components/RegisterModule.vue";
import MainFilter from "../components/MainFilter.vue";
import MealPreview from "../components/MealPreview.vue";
export default {
  name: "home",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleRegister() {
      this.isActive = !this.isActive;
    }
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
    MealPreview
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
.cards-container-sec {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 10px;
  margin: 0 30px;
}

.section-steps h2 {
  /* text-align: center !important; */
  font-size: 28px;
  padding: 60px 0;
  word-spacing: 2px;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
  color: #555;
  font-family: "Lato", "Arial", sans-serif;
  margin: 0;
}
.section-steps h2:after {
  display: block;
  height: 2px;
  background-color: #e67e22;
  content: " ";
  width: 100px;
  margin: 0 auto;
  margin-top: 30px;
}

.section-steps {
  background-color: #f4f4f4;
}

.steps-box {
  margin-top: 30px;
}

.steps-box:first-child {
  text-align: right;
  padding-right: 3%;
}

.steps-box:last-child {
  text-align: left;
  padding-left: 3%;
  margin-top: 70px;
}

.app-screen {
  width: 40%;
}

.works-step {
  margin-bottom: 50px;
}

.works-step:last-of-type {
  margin-bottom: 80px;
}

.works-step div {
  color: #e67e22;
  font-size: 150%;
  height: 54px;
  width: 54px;
  border: 2px solid #e67e22;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  margin-right: 25px;
  float: left;
  padding: 5px;
}

.btn-app:link,
.btn-app:visited {
  border: 0;
}

.btn-app img {
  height: 50px;
  width: auto;
  margin-right: 10px;
}

</style>