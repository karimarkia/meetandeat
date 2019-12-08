<template>

  <section v-if="reviews" class="main-review-container flex">
    <section class="reviewsSection">
      <div

        class="reviews"
        v-for="(review , idx) in reviews"
        :key="idx"
      >
        <div class="review">
          <el-avatar class="revieimg" :size="50" :src="review.byUser.imgUrl"></el-avatar>
          <div class="reviewBy">
            <h4>
              {{review.byUser.username}}
              <span>{{ (new Date(review.date) + "").substring(4, 15)}}</span>
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

    <el-button
      v-if="isCloseAddReview"
      class="write-new-review"
      @click="openToAddReview"
      type="danger"
    >Write a review</el-button>
    <el-button v-else class="write-new-review" @click="openToAddReview" type="danger">Close</el-button>
    <section :class="{guestReview: isCloseAddReview}">
      <section v-if="(user)">
        <div class="new-guest-review">
          <el-rate
            class="new-rate"
            v-model="reviewToEdit.rate"
            allow-half
            :texts="['Oops', 'Disappointed', 'Normal', 'Good', 'Great']"
            show-text
            show-score
          ></el-rate>

          <el-input
            class="new-review"
            type="textarea"
            :rows="2"
            placeholder="Write your review"
            v-model="reviewToEdit.review"
          ></el-input>
          <el-button class="add-review" @click="addReview" type="danger">Add review</el-button>
        </div>
      </section>
      <div v-else>Only logged in user can write a review</div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      commentsToShow: 4,
      commentIndex: 0,
reviewIdx:0,
      reviewToEdit: {
        rate: 0,
        review: ""
      },
      isCloseAddReview: true
    };
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
    reviews() {
      return this.$store.getters.reviews;
    },
    meal() {
      return this.$store.getters.currMeal;
    },
    reviewDate() {
      let date = (new Date(this.reviews[this.reviewIdx].date) + "").substring(4, 15);
      this.reviewIdx++
      date = date.substring(4, 15);
      return date;
    }
  },
  async created() {
    await this.$store.dispatch({ type: "loadReviews", mealId: this.meal._id });
  },
  methods: {
    openToAddReview() {
      this.isCloseAddReview = !this.isCloseAddReview;
      this.reviewToEdit = { review: "", rate: 0 };
    },
    async addReview() {
    this.reviewToEdit.date = Date.now()
      this.reviewToEdit.aboutMealId = this.meal._id;
      this.$store.dispatch({ type: "addReview", review: this.reviewToEdit });
      this.reviewToEdit = { review: "", rate: 0 };
      //  await this.$store.dispatch({ type: "loadReviews" });
      // this.reviews
      this.isCloseAddReview = true;
    }
  }
};
</script>


