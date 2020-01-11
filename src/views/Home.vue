<template>
  <section>
    <div class="main-img"></div>
    <Main-filter class="main-filter"></Main-filter>
    <div class="sec-section">
      <h1>Top rated meals</h1>
      <div class="cards-container-sec">
        <MealPreview class="sec" v-for="(meal,idx) in meals" :key="idx" :meal="meal"></MealPreview>
      </div>
    </div>

    <div class="see-all-meals">
      <router-link to="/meal">
        Show all meals
        <i class="fa fa-chevron-right"></i>
      </router-link>
    </div>
    <div class="section-testimonials">
      <h2>Why they loved it</h2>
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
      <h2>our popular cities</h2>
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
  data() {
    return {
      filterBy: ""
    };
  },
  computed: {
    meals() {
      this.$store.commit("setMainFilter", this.filterBy);
      let mealsToShow = this.$store.getters.mealsToShow;

      return mealsToShow.filter(meal => {
        return (
          meal._id === "5de294c866c3ef0792a5a8c4" ||
          meal._id === "5de294c866c3ef0792a5a8bd" ||
          meal._id === "5de294c866c3ef0792a5a8b4" ||
          meal._id === "5de294c866c3ef0792a5a8b7"
        );
      });
    }
  },
  components: {
    MainFilter,
    MealPreview,
    PlacesCmp
  }
};
</script>
<style scoped>
.sec {
  display: flex;
}
</style>