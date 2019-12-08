<template>
  <section class="places">
      <div class="places-render" v-for="(place, idx) in places" :key="idx">
          <img :src="place.imgUrl">
          <h1>{{place.title}}</h1>
          <h4>{{place.desc}}</h4>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      places: [
        {
          title: "London",
          imgUrl:
            "https://res.cloudinary.com/dcugyfvrr/image/upload/v1575452706/samples/55425108_re2m0j.jpg",
            desc:"Get a taste of the unique culinary scene in London"
        },
        {
          title: "New York",
          imgUrl:
            "https://res.cloudinary.com/dcugyfvrr/image/upload/v1575452708/samples/GettyImages-538096543_medium_onb788.jpg",
            desc:"Discover authentic French cuisine in the City of Lights"
        },
        {
          title: "Paris",
          imgUrl:
            "https://res.cloudinary.com/dcugyfvrr/image/upload/v1575452704/samples/eiffel-tower-in-paris-151-medium_d0s2td.jpg",
            desc:"Discover authentic French cuisine in the City of Lights"
        },
        {
          title: "Rome",
          imgUrl:
            "https://res.cloudinary.com/dcugyfvrr/image/upload/v1575452707/samples/HERO_UltimateRome_Hero_shutterstock789412159_uylfet.jpg",
            desc:"Roman dining experiences that are more than just pasta"
        }
      ]
    };
  }
};
</script>
