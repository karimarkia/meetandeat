<template>
  <section class="reviewsSection">
    <div class="reviews" v-for="(review , idx) in reviews" :key="idx">
      <div class="review">
              <el-avatar class="revieimg" :size="50" :src="review.imgUrl"></el-avatar>
        <div class="reviewBy">
          <h4>{{review.name}} <span>{{reviewDate}}</span></h4>
          <h5> {{review.rate}}/5    <i class="fa fa-star"></i> </h5>
        </div>
      </div>
      <div>{{review.review}}</div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["meal"],
  data() {
    return {
      reviews: [
        {
          name: "Dirk",
          date: 1574929751733,
          imgUrl:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575108439/finel%20proj/jb5gnvudkugxnhjlgpoy.jpg",
          rate: 4.9,
          review:
            "Thank you so much, the dinner was wonderful. We had a great time!"
        },
        {
          name: "Or",
          date: 1574929751733,
          imgUrl:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575135541/finel%20proj/labuulavunkz3ufadr2a.jpg",
          rate: 4.5,
          review:
            "Great evening, lovely and different food. We enjoyed it very much!"
        },
        {
          name: "Yonit",
          date: 1574929751733,
          https:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575108441/finel%20proj/pcvwgdrrzljs1jsdbj3b.jpg",
          rate: 4.7,
          review:
            "Excellent! What an amazing couple. Good food, good vibes and super nice company - highly recommended"
        },
        {
          name: "Dirk",
          date: 1574929751733,
          imgUrl:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575108439/finel%20proj/jb5gnvudkugxnhjlgpoy.jpg",
          rate: 4.9,
          review:
            "Thank you so much, the dinner was wonderful. We had a great time!"
        },
        {
          name: "Or",
          date: 1574929751733,
          imgUrl:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575135541/finel%20proj/labuulavunkz3ufadr2a.jpg",
          rate: 4.5,
          review:
            "Great evening, lovely and different food. We enjoyed it very much!"
        },
        {
          name: "Yonit",
          date: 1574929751733,
          https:
            "https://res.cloudinary.com/artyompogosov/image/upload/v1575108441/finel%20proj/pcvwgdrrzljs1jsdbj3b.jpg",
          rate: 4.7,
          review:
            "Excellent! What an amazing couple. Good food, good vibes and super nice company - highly recommended"
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


