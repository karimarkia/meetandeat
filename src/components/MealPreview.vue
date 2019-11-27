<template>
  <section class="meal-card" v-if="meal">
    <img class="img-card" :src="(meal.imgUrl[0])">
    <h4>{{meal.title}}</h4>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <router-link to="/details"><button>Add to Cart</button></router-link>
</section>
</template>

<script>
export default {
  props: {
    meal: Object
  },
  methods: {
    // removeToy() {
    //   this.$emit("remove", this.toy._id);
    // }
  }
};
</script>