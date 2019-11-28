<template>
  <section v-if="meal" class="detailsPage flex">
      <div class="imgs-gallery ">
       <img :data-i="idx" class="imgDetails" v-for="(img , idx) in meal.imgUrl" :key="idx" :src="(img)"/>
       
      </div>

        <h1>Meal Detail</h1>
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
  max-width: 90%;
  display: grid;
  height: 50vh;
    gap: 10px;      
        grid-template-rows: 50% 50% ;
       grid-template-columns:  25% 25% 25% 25%;
        grid-template-areas: "a a b c"
                             "a a d e";
                     
    
    margin: 10px;   
    margin-top: 20px;      
}

img.imgDetails{
    width: 100%;
    height: 100%;
}
.detailsPage{
    align-items: center;
    flex-direction: column;
}

[data-i="0"] {
   grid-area: a;
}
[data-i="1"] {
   grid-area: b;
}
[data-i="2"] {
   grid-area: c;
}
[data-i="3"] {
   grid-area: d;
}
[data-i="4"] {
   grid-area: e;
}

/* .imgs-gallery:first-child img{
width: 50%;
} */

</style>