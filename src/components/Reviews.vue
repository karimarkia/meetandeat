<template>
  <section v-if="reviews" class="main-review-container flex">
    <section class="reviewsSection">
      <div class="reviews" v-for="(review , idx) in reviews" :key="idx">
        <div class="review">
          <el-avatar class="revieimg" :size="50" :src="review.byUser.imgUrl"></el-avatar>
          <div class="reviewBy">
            <h4>
              {{review.byUser.username}}
              <span>{{reviewDate}}</span>
            </h4>
            <h5>
              {{review.rate}}/5
              <i class="fa fa-star"></i>
            </h5>
          </div>
        </div>
        <div>{{review.review}}</div>
      </div>
    </section>
    <!-- <section class="reviewsSection">
    <ul class="reviews"  > 
      <li v-for="review in reviews" :key="review._id">
        <div class="review">
          <el-avatar class="revieimg" :size="50" :src="review.byUser.imgUrl"></el-avatar>
          <div class="reviewBy">
            <h4>
              {{review.name}}
              <span>{{reviewDate}}</span>
            </h4>
            <h5>
              {{review.rate}}/5
              <i class="fa fa-star"></i>
            </h5>
          </div>
        </div>
        <div>{{review.review}}</div>
      </li>
    </ul>

    </section>--> 

    <el-button class="write-new-review" @click="openToAddReview" type="danger">Write a review</el-button>
    <section :class="{guestReview: isCloseAddReview}">
      <section v-if="(user)">
        <div class="new-guest-review">
          <el-input
            class="new-review"
            type="textarea"
            :rows="2"
            placeholder="Please input"
            v-model="reviewToEdit.review"
          ></el-input>
          <el-rate
            class="new-rate"
            v-model="reviewToEdit.rate"
            :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
            show-text
          ></el-rate>
          <el-button class="add-review" @click="addReview" type="danger">Add review</el-button>
        </div>
      </section>
      <div v-else>Only logged in user can write a review</div>
    </section>
  </section>
</template>
<script>
export default {
  // props: ["meal"],
  data() {
    return {
      // user: null,
      reviewToEdit: {
        rate: null,
        review: ""
      },
      isCloseAddReview: true,
      iconClasses: {
        2: "icon-rate-face-1",
        4: { value: "icon-rate-face-2", excluded: true },
        5: "icon-rate-face-3"
      }
    };
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
    reviews() {
      let reviews = this.$store.getters.reviews;
      reviews = reviews.filter(review => {
        return review.aboutMeal._id === this.meal._id;
      });
      return reviews;
    },
    meal() {
      return this.$store.getters.currMeal;
    },
    reviewDate() {
      let date = new Date(this.reviews[0].date) + "";
      date = date.substring(4, 15);
      return date;
    }
  },
  created() {
    this.$store.dispatch({ type: "loadReviews" });
  },
  methods: {
    openToAddReview() {
      this.isCloseAddReview = !this.isCloseAddReview;
      console.log(this.user);
    },
    addReview() {
      this.reviewToEdit.aboutMealId = this.meal._id;
      this.$store.dispatch({ type: "addReview", review: this.reviewToEdit });
      this.reviewToEdit = { review: "", rate: null };
      this.$store.dispatch({ type: "loadReviews" });
      this.reviews
    }
  }
};
</script>


