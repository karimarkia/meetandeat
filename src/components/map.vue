<template>
  <section class="map">
    <GmapMap
      class="map"
      :center="center"
      :zoom="14"
      map-type-id="terrain"
      style="width:100%;margin-bottom: 25px; height: 400px; margin: 0;  width: 100%;"
    >
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
      markers: [
        { position: { lat: this.location.lat, lng: this.location.lng } }
      ],
      center: { lat: this.location.lat, lng: this.location.lng }
    };
  },
};
</script>
