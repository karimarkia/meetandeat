<template>
  <section v-if="meal" class="details ">
      <ul class="imgs-gallery">
          <li class="imgMeal" v-for="img in meal.imgUrl" :key="img">
               <img class="imgDetails" :src="(img)">
          </li>
          </ul>
        <h1>Meal Details</h1>
    </section>
</template>

<script>
export default {
  name: "mealdetails",
  components: {},
  data() {
    return {
      
    };
  },
  created() {
    this.$store.dispatch("loadMeals");
    const mealId = this.$route.params.id;
    if (!mealId) return;
    this.$store.dispatch({ type: "setCurrMeal", mealId })

  },
  computed: {
    meal() {
      return this.$store.getters.currMeal;
    },
  },
  methods: {

  }
};
</script>
<style scoped>
.imgs-gallery{
flex-direction: row;
max-width: 90vw;
  height: 20%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;

                
}
.imgMeal{
    width: 25%;
}
.imgDetails{
    max-height: 100%;
}
ul:first-child{
width: 50%;
}
/* .cards-container {
  
} */
</style>