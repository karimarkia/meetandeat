<template>
  <section class="img-prev-card">
    <img class="img-card img-hight" :src="url" alt />
    <button class="del-btn" @click="onRemoveImg(url)">Delete</button>
  </section>
</template>


<script>
export default {
  props: ["url"],
  methods: {
    onRemoveImg(url) {
      this.$emit("removeImg", url);
    }
  }
};
</script>
 

