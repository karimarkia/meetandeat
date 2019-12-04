<template>
  <section>
    <div class="main-img">
    </div>
    <Main-filter></Main-filter>
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
      <div class="row row2">
        <div class="col span-1-of-3">
          <blockquote>
            Alexandra was an excellent host. We were lucky in that it was only my husband and I on our hike so she catered the walk based on our preferences. The location was secluded and just perfect for a great view of the sunset over Old Town.
            <cite>
              <img src="../img/customer-1.jpg" alt="Customer 1 photo" />Alberto Duncan
            </cite>
          </blockquote>
        </div>
        <div class="col span-1-of-3">
          <blockquote>
            We spent a couple of weeks bouncing around Italy and, by far, our dinner with Debora and Fiamma was the highlight! The dinner party was like nothing we'd experienced, Debora and Fiamma provided a fantastic meal and an atmosphere of openness and community that encouraged discussion amongst the travelers gathered.
            <cite>
              <img src="../img/customer-2.jpg" alt="Customer 2 photo" />Joana Silva
            </cite>
          </blockquote>
        </div>
        <div class="col span-1-of-3">
          <blockquote>
            Can’t say enough about how amazing our experience at Laura’s was!!! The food, the atmosphere, the view, the drinks and most importantly, the people! Laura and her friends made our time in Barcelona a million times better and we HIGHLY recommend her to everyone.
            <cite>
              <img src="../img/customer-3.jpg" alt="Customer 3 photo" />Milton Chapman
            </cite>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="places-to-show">
      <h2>City Highlights</h2>
      <PlacesCmp></PlacesCmp>
    </div>
  </section>
</template>

<script>
import MainFilter from "../components/MainFilter.vue";
import MealPreview from "../components/MealPreview.vue";
import PlacesCmp from "@/views/PlacesCmp.vue";
export default {
  name: "home",
  computed: {
    meals() {
      return this.$store.getters.mealsToShow;
    },

  },
  components: {
    MainFilter,
    MealPreview,
    PlacesCmp
  }
};
</script>

<style>
.places-to-show h2 {
  text-align: center;
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

.places-to-show h2:after {
  display: block;
  height: 2px;
  background-color: #e67e22;
  content: " ";
  width: 100px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>