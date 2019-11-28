<template>
  <section class="map">
    <GmapMap class="map" :center="center" :zoom="13" map-type-id="terrain" style="width:100%; height: 300px;">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
export default {
    props: {
    location: Object
  },
  data() {
    return {
      markers: 
        [{ position: { lat: this.location.lat, lng: this.location.lng } }]
     ,
      center: {  lat: this.location.lat, lng: this.location.lng }
    };
  },
  created(){
console.log(this.location);

  },
  methods: {

  }
};
</script>
<style scoped>
.map{
    margin: 0;
    width: 100%;
}
</style>