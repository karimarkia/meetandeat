<template>
  <section class="whoGoing flex">
    <div class="reviews" v-for="(guest , idx) in guests" :key="idx">
      <div class="review">
        <el-avatar class="revieimg" :size="50" :src="guest.imgUrl"></el-avatar>
        <div class="guest">
          <h4>{{guest.name}} , {{guest.age}}</h4>
          <h4>{{guest.from}}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["meal"],
  data() {
    return {
      guests: [
        {
          name: "Dirk",
          from: "Tel aviv, israel",
          age: 27,
          imgUrl:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575108439/finel%20proj/jb5gnvudkugxnhjlgpoy.jpg"
        },
        {
          name: "Or",
          from: "Tel aviv, israel",
          age: 47,
          imgUrl:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575135541/finel%20proj/labuulavunkz3ufadr2a.jpg"
        },
        {
          name: "Yonit",
          from: "Tel aviv, israel",
          age: 37,
          https:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575108441/finel%20proj/pcvwgdrrzljs1jsdbj3b.jpg"
        }
      ]
    };
  },
  computed: {
    reviewDate() {
      let date = new Date(this.reviews[0].date) + "";
      date = date.substring(4, 15);
      return date;
    }
  }
};
</script>


