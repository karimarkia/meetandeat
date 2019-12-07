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
        <div class="priceDetails flex">
          <h1>
            {{meal.price}}$
            <span>Price per guest</span>
          </h1>
          <div>
            <span>Date</span>
            <div class="block datetime">
              <el-date-picker class="datetime" type="datetime" placeholder="Select date and time"></el-date-picker>
            </div>
          </div>
          <div>
            <span>Number of guests</span>
            <el-input-number class="numGust" v-model="numOfGust" size="medium" :min="1" :step="1"></el-input-number>
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
          <el-button class="joinToMeal" @click="getBookMael" type="primary" round>Join To Meal</el-button>
        </div>
      </section>

      <Menu :meal="meal" />
      <section class="whoIsGoing">
        <h2>Who's going?</h2>
        <MealGuest :meal="meal" />

        <!-- //chat room -->
        <button class="toggle-chat" @click="toggleChat" v-if="user">Chat Room</button>
        <div class="chat" :class="{'display': display}">
          <ul>
            <li v-for="(msg, idx) in msgs" :key="idx">{{msg.from}} : {{msg.txt}}</li>
          </ul>
          <form @submit.prevent="sendMsg">
            <input placeholder="start typing..." class="chat-input" type="text" v-model="msg.txt" />
            <button class="chat-btn">Send</button>
          </form>
        </div>
      </section>

      <section class="reviewArea">
        <h2>
          <i class="fa fa-star"></i>
          {{meal.rate}} (248 reviews)
        </h2>
        <Reviews />
      </section>
      <div class="mapdetails">
        <h4>Location</h4>

        <h5>The full address will be provided once the booking is confirmed</h5>
      </div>
      <Map class="locationMap" :location="location" />
    </div>

    <!-- <Chat-room></Chat-room> -->
  </section>
</template>

<script>
import SocketService from "@/services/SocketService.js";
import NavHeader from "@/views/NavHeader.vue";
import Map from "@/components/map.vue";
import Menu from "@/components/Menu.vue";
import Reviews from "@/components/Reviews.vue";
import MealGuest from "@/components/MealGuest.vue";
// import ChatRoom from '../components/ChatRoom.vue';
import { log } from "util";
export default {
  name: "mealdetails",
  components: {
    NavHeader,
    Map,
    Menu,
    Reviews,
    MealGuest,
    // ChatRoom
    SocketService
  },
  data() {
    return {
      display: false,
      isShowModal: false,
      isLogOut: false,
      isShowGallery: false,
      numOfGust: 1,
      msgs: [],
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
    }
  },
  methods: {
    getBookMael() {
      let user = JSON.parse(JSON.stringify(this.$store.getters.loggedinUser));
      if (!user) {
        this.isLogOut = true;
        return;
      }
      this.isLogOut = false;
      this.isShowModal = !this.isShowModal;
      this.meal.guests.unshift(user._id);
      if (user.meals)
        user.meals.unshift({
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
      console.log("Sending", this.msg);
      SocketService.emit("chat newMsg", this.msg);
      this.msg = {};
    },
    toggleChat() {
      if (!this.display) this.display = true;
      else this.display = false;

      // this.display=true
    }
  }
};
// https://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+California&key=AIzaSyAIf_SiIrDkiwPumk-JVkjC52m7Htv3m8w
// mongodb+srv://artyomP1:Art13579@cluster0-hkrir.mongodb.net/test?retryWrites=true&w=majority
</script>
<style>
.fa {
  color: #ff5a5f;
}
.chat {
  max-width: 500px;
  height: 500px;
  background-color: rgb(247, 247, 247);
  border: 1px solid grey;
  border-radius: 10px;
  padding: 15px;
  position: absolute;
  top: 50px;
  right: 10%;
  left: 10%;
  margin: auto;
  z-index: 100;
  display: none;
  position: fixed;
  flex-direction: column;
  justify-content: flex-end;
}
.chat ul {
  padding: 0 0 0 5px;
  list-style: none;
}
.chat ul li {
  margin: 5px 0;
}

.chat ul li:nth-child(odd) {
  background: rgb(221, 221, 221);
  color: black;
  padding: 10px 5px;
  border-radius: 5px;
}
.chat ul li:nth-child(even) {
  background: rgb(189, 189, 189);
  color: black;
  padding: 10px 5px;
  border-radius: 5px;
}
.display {
  display: flex;
}
.chat-input {
  border: 1px solid red;
  width: 80%;
  height: 115%;
  padding: 5px;
  border-radius: 5px;
  outline: none;
}
.chat-btn {
  background-color: #f56c6c;
  color: white;
  border: 0;
  font-size: 14px;
  margin-left: 20px;
  height: 30px;
  width: 65px;
  border-radius: 5px;
  outline: none;
}
.toggle-chat {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 20px 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #f56c6c;
  color: white;
}
</style>

