<template>
  <section v-if="meal">
    <div class="detailsPage flex">
      <div :class="{ bg:isShowModal}"></div>
      <section class="mealDetails flex">
        <h1>{{meal.title}}</h1>
        <h3>{{meal.location.city}}, {{meal.location.country}}</h3>
      </section>
      <section class="hostReview flex">
        <i class="fa fa-star"></i>
        <span>{{meal.rate}}/5</span>
      </section>
      <div class="imgs-gallery" @click="getImgGallery">
        <img
          :data-i="idx"
          class="imgDetails"
          v-for="(img , idx) in meal.imgUrl"
          :key="idx"
          :src="(img)"
        />
      </div>
      <section>
        <div>
          <i class="fa fa-user-friends"></i>
        </div>
      </section>
      <section class="flex mainDetails">
        <div class="description">
          <section class="moreMealDetails flex">
            <h4>
              <i class="fa fa-clock-o"></i>
              {{dinnerTime}}
            </h4>
            <h4 v-for="(tag , idx) in meal.tags" :key="idx">
              <i class="fa fa-circle"></i>
              {{tag}}
            </h4>
            <h4>
              <i class="fa fa-users"></i>
              2 - {{meal.maxUsers}}
            </h4>
          </section>
          <div :class="{ modalImage:isShowGallery, displayNon:!isShowGallery}">
            <div class="block">
              <el-carousel :interval="4000" type="card" height="400px">
                <el-carousel-item v-for="(img , idx) in meal.imgUrl" :key="idx">
                  <img :data-i="idx" class="imgtest" :src="(img)" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="modalBtn flex">
              <button class="pricerange sortPrice" @click="getImgGallery">Close</button>
            </div>
          </div>
          <div :class="{ modalOrder:isShowModal, displayNon:!isShowModal}">
            <div class="join-modal">
              <h2>Thank you for joining!!!</h2>
              <h2>Your order number: 143562</h2>
              <button class="pricerange sortPrice" @click="closeOrder">Close</button>
              <!-- <button class="pricerange sortPrice" @click="sortMeals">Save</button> -->
            </div>
          </div>
          <div :class="{ modalOrder:isLogOut, displayNon:!isLogOut}">
            <div class="err-modal">
              <h2>Sorry Please Login to join the meal!!!</h2>
              <button class="pricerange sortPrice" @click="closeError">Close</button>
            </div>
          </div>
          <h3>A word about the experience</h3>
          <p>{{meal.description}}</p>
          <p>{{meal.ownerId.about}}</p>

          <h5 class="ownerName">{{meal.ownerId.name}}</h5>
        </div>
        <div class="priceArea flex">
          <div v-if="!orderCompleted" class="priceDetails flex">
            <h1>
              {{meal.price}}$
              <span>Price per guest</span>
            </h1>
            <div>
              <span>Date</span>
              <el-input class="meal-date" v-model="mealDate"></el-input>
            </div>
            <div>
              <div class="numGust">Number of guests</div>
              <el-input-number
                class="guest-input"
                v-model="numOfGust"
                size="medium"
                :min="1"
                :step="1"
              ></el-input-number>
            </div>
            <div class="payment">
              <h3 class="total">Total</h3>
              <h3 class="totalAmount" v-if="numOfGust > 1">
                <span>{{numOfGust}} guests x {{meal.price}}$</span>
                <span class="totalPrice">{{numOfGust * meal.price}}$</span>
              </h3>
              <h3 class="totalAmount" v-else>
                <span>{{numOfGust}} guest x {{meal.price}}$</span>
                <span class="totalPrice">{{numOfGust * meal.price}}$</span>
              </h3>
            </div>
            <el-button class="joinToMeal" @click="getBookMael" type="primary" round>Reserve My Place</el-button>
          </div>
          <transition name="flip" mode="out-in">
            <div v-if="orderCompleted" class="priceDetails flex">
              <div class="orderNum">
                <div class="orderBy">Dear {{user.username}} ,</div>
                <div>Thank you for your order!</div>
                <div class="order-num">Order number is: #1472584963</div>
              </div>
              <div class="order-details">
                <div>Your order details:</div>
                <div>{{meal.title}}</div>
                <div>At: {{dinnerTime}} , {{mealDate}}</div>
                <div class="paymentTotal">
                  <h3 class="total">Total</h3>
                  <h3 v-if="numOfGust > 1" class="totalAmount">
                    <span>{{numOfGust}} guests x {{meal.price}}$</span>
                    <span class="totalPrice">{{numOfGust * meal.price}}$</span>
                  </h3>
                  <h3 v-else class="totalAmount">
                    <span>{{numOfGust}} guest x {{meal.price}}$</span>
                    <span class="totalPrice">{{numOfGust * meal.price}}$</span>
                  </h3>
                </div>
              </div>
              <router-link class="back-to-meals" to="/meal">
                <el-button class="joinToMeal" type="primary" round>Find your next meal</el-button>
              </router-link>
              <div></div>
            </div>
          </transition>
        </div>
      </section>
      <Menu :meal="meal" />
      <section class="whoIsGoing">
        <h2>Who's going?</h2>
        <MealGuest :meal="meal" />
        <!-- //chat room -->
        <button class="toggle-chat" @click="toggleChat" v-if="user">Chat Room</button>

        <div class="chat" :class="{'display': display}">
          <button class="close-chat" @click="toggleChat">X</button>
          <ul>
            <li v-for="(msg, idx) in msgs" :key="idx">{{msg.from}} : {{msg.txt}}</li>
          </ul>
          <div v-if="isType">{{user.username}} is {{this.typing}}</div>
          <form @submit.prevent="sendMsg" class="form-chat">
            <button class="chat-btn">Send</button>
            <input
              placeholder="start typing..."
              class="chat-input"
              type="text"
              v-model="msg.txt"
              @keypress="key"
            />
          </form>
        </div>
      </section>

      <section class="reviewArea">
        <h2>
          <i class="fa fa-star"></i>
          {{meal.rate}} (23 reviews)
        </h2>
        <Reviews />
      </section>
      <div class="mapdetails">
        <h4>Location</h4>

        <h5>The full address will be provided once the booking is confirmed</h5>
      </div>
      <Map class="locationMap" :location="location" />
    </div>
  </section>
</template>

<script>
import SocketService from "@/services/SocketService.js";
import NavHeader from "@/views/NavHeader.vue";
import Map from "@/components/map.vue";
import Menu from "@/components/Menu.vue";
import Reviews from "@/components/Reviews.vue";
import MealGuest from "@/components/MealGuest.vue";
import { log } from "util";
import { setTimeout } from "timers";
export default {
  name: "mealdetails",
  components: {
    NavHeader,
    Map,
    Menu,
    Reviews,
    MealGuest,
    SocketService
  },
  data() {
    return {
      isType: false,
      typing: "typing...",
      display: false,
      isShowModal: false,
      isLogOut: false,
      isShowGallery: false,
      numOfGust: 1,
      orderCompleted: false,
      msgs: [],
      dateMeal: null,
      msg: {
        from: "",
        txt: ""
      }
    };
  },
  created() {
    this.$store.dispatch("loadMeals");
    const mealId = this.$route.params._id;
    if (!mealId) return;
    this.$store.dispatch({ type: "setCurrMeal", mealId });

    SocketService.on("chat addMsg", msg => {
      this.msgs.push(msg);
    });
    SocketService.on("print", msg => {});

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },
  computed: {
    meal() {
      return this.$store.getters.currMeal;
      // return JSON.parse(JSON.stringify(this.$store.getters.currMeal));
    },
    user() {
      return JSON.parse(JSON.stringify(this.$store.getters.loggedinUser));
    },
    location() {
      return this.$store.getters.currMeal.location;
    },
    dinnerTime() {
      let startTime = new Date(+this.meal.atDate) + "";
      let endTime = this.meal.duration * 60000 * 60 + +this.meal.atDate;
      endTime = new Date(endTime) + "";
      startTime = startTime.substring(16, 21);
      endTime = endTime.substring(16, 21);
      let time = startTime + " - " + endTime;
      return time;
    },
    mealDate() {
      let mealDate = this.meal.atDate;
      mealDate = new Date(+mealDate);
      mealDate = mealDate.toLocaleDateString();
      return mealDate;
    }
  },
  methods: {
    getBookMael() {
      let user = JSON.parse(JSON.stringify(this.$store.getters.loggedinUser));
      // let user = this.user;
      if (meal.maxUsers >= meal.guests.length) return;
      if (!user) {
        this.isLogOut = true;
        return;
      }
      this.orderCompleted = !this.orderCompleted;
      this.isLogOut = false;
      this.meal.guests.push(user._id);
      if (user.meals)
        user.meals.push({
          id: this.meal._id,
          name: this.meal.title,
          img: this.meal.imgUrl[0]
        });
      else
        user.meals = [
          { id: this.meal._id, name: this.meal.title, img: this.meal.imgUrl[0] }
        ];
      this.updateUser(user);
      this.updateMeal(this.meal);
    },
    async updateMeal(meal) {
      await this.$store.dispatch({ type: "editMeal", currMeal: meal });
      this.meal;
    },
    async updateUser(user) {
      await this.$store.dispatch({ type: "updateUser", user });
    },
    getImgGallery() {
      this.isShowGallery = !this.isShowGallery;
    },
    closeOrder() {
      this.isShowModal = !this.isShowModal;
    },
    closeError() {
      this.isLogOut = !this.isLogOut;
    },
    sendMsg() {
      let user = this.$store.getters.loggedinUser;
      this.msg.from = user.username;
      SocketService.emit("chat newMsg", this.msg);
      this.msg = {};
      this.isType = false;
    },
    toggleChat() {
      if (!this.display) this.display = true;
      else this.display = false;
    },
    key() {
      this.isType = true;
      SocketService.emit("is typing", this.typing);
    }
  },
  watch: {
    "$route.params.id"() {
      const mealId = this.$route.params._id;
      if (!mealId) return;
      this.$store.dispatch({ type: "setCurrMeal", mealId });
      this.meal;
    }
  }
};
</script>

<style>
.form-chat {
  display: flex;
  flex-direction: row-reverse;
}
</style>

