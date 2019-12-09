<template>
  <section>
    <div class="edit-container" v-if="currMeal">
      <form type="submit" class="edit-form">
        <div class="inputs-container">
          <span>Title</span>
          <el-input type="text" v-model="currMeal.title"></el-input>
          <span>Country</span>
          <el-input type="text" v-if="currMeal.location" v-model="currMeal.location.country"></el-input>
          <span>City</span>
          <el-input type="text" v-if="currMeal.location" v-model="currMeal.location.city"></el-input>
          <span>Address</span>
          <el-input type="text" v-model="address"></el-input>
          <span>Price</span>
          <el-input type="number" min=10 v-model="currMeal.duration"></el-input>
        </div>
        <h3>Time</h3>
        <div class="inputs-container">
          <span>Time</span>
          <el-date-picker
            value-format="timestamp"
            v-model="currMeal.atDate"
            type="datetime"
            placeholder="Select date and time"
          ></el-date-picker>
          <span>Duration of the event</span>
          <el-input type="number" v-model="currMeal.price"></el-input>
        </div>

        <h3>Hosting</h3>
        <div class="inputs-container">
          <span>Tags</span>
          <el-select v-model="currMeal.tags"  multiple placeholder="Select">
            <el-option
              v-for="tag in options"
              :key="tag.value"
              :label="tag.label"
              :value="tag.value"
            ></el-option>
          </el-select>
          <span>Limit Guests</span>
          <el-input v-model="currMeal.maxUsers" min=1 type="number"></el-input>
        </div>

        <h3>Appetizers</h3>
        <div class="inputs-container" v-if="currMeal.dishes">
          <span>first Appetizer</span>
          <el-input v-model="currMeal.dishes.appetizers[0].name" type="text"></el-input>
          <span>Description</span>
          <el-input v-model="currMeal.dishes.appetizers[0].description" type="text"></el-input>
          <span>second Appetizer</span>
          <el-input v-model="currMeal.dishes.appetizers[1].name" type="text"></el-input>
          <span>Description</span>
          <el-input v-model="currMeal.dishes.appetizers[1].description" type="text"></el-input>
        </div>
        <h3>Mains</h3>
        <div class="inputs-container" v-if="currMeal.dishes">
          <span>first main</span>
          <el-input v-model="currMeal.dishes.mains[0].name" type="text"></el-input>
          <span>Description</span>
          <el-input v-model="currMeal.dishes.mains[0].description" type="text"></el-input>
          <span>second main</span>
          <el-input v-model="currMeal.dishes.mains[1].name" type="text"></el-input>
          <span>Description</span>
          <el-input v-model="currMeal.dishes.mains[1].description" type="text"></el-input>
        </div>
        <h3>Desserts</h3>
        <div class="inputs-container" v-if="currMeal.dishes">
          <span>first Dessert</span>
          <el-input v-model="currMeal.dishes.dessert[0].name" type="text"></el-input>
          <span>Description</span>
          <el-input v-model="currMeal.dishes.dessert[0].description" type="text"></el-input>
          <span>second Dessert</span>
          <el-input v-model="currMeal.dishes.dessert[1].name" type="text"></el-input>
          <span>Description</span>
          <el-input v-model="currMeal.dishes.dessert[1].description" type="text"></el-input>
        </div>
        <h3>Drinks</h3>
        <div class="inputs-container" v-if="currMeal.dishes">
          <span>Tags</span>
          <el-select
            v-model="currMeal.dishes.drinks"
            v-if="currMeal.tags"
            multiple
            placeholder="Select"
          >
            <el-option
              v-for="drink in drinks"
              :key="drink.value"
              :label="drink.label"
              :value="drink.value"
            ></el-option>
          </el-select>
        </div>

        <div class="inputs-container" v-if="currMeal.dishes">
          <span>Discribe you'r meal</span>
          <el-input :rows="3" v-model="currMeal.description" type="textarea"></el-input>
        </div>
        <div class="inputs-container" v-if="currMeal.ownerId">
          <span>Tell about yourself</span>
          <el-input :rows="3" v-model="currMeal.ownerId.about" type="textarea"></el-input>
        </div>
        <h3>Images</h3>
        <div class="inputs-container">
          <span>Add image</span>
          <input class="edit-img-input" @change="uploadImg" type="file" />
        </div>
        <div class="cards-container">
          <img-preview v-for="url in currMeal.imgUrl" :key="url" :url="url" @removeImg="removeImg"></img-preview>
        </div>
        <div class="edit-btn-container">
          <el-button type="info" round v-if="currMeal._id" @click="save">save</el-button>
          <el-button type="info" round v-else @click="add">add</el-button>
        </div>
      </form>
    </div>
  </section>
</template>

 
<script>
import CloudService from "../services/CloudService.js";
import ImgPreview from "../components/ImgPreview.vue";
import HttpService from "../services/HttpService.js";
import MealService from "../services/MealService.js";
import UserStore from "../store/UserStore.js";
 
export default {
  data: () => ({
    address: null,
    currMeal: MealService.getDefaultMeal(),
    options: [
      {
        value: "Asian",
        label: "Asian"
      },
      {
        value: "Italian",
        label: "Italian"
      },
      {
        value: "BBQ",
        label: "BBQ"
      },
      {
        value: "Vegitarian",
        label: "Vegitarian"
      },
      {
        value: "American",
        label: "American"
      },
      {
        value: "Other",
        label: "Other"
      }
    ],
    drinks: [
      {
        value: "wine",
        label: "Wine"
      },
      {
        value: "beer",
        label: "Beer"
      },
      {
        value: "cocktails",
        label: "Cocktails"
      },
      {
        value: "soft drinks",
        label: "Soft Drinks"
      }
    ]
  }),
  components: {
    ImgPreview
  },
  computed: {
    mealToEdit() {
      return JSON.parse(JSON.stringify(this.currMeal));
    },
    currUser() {
      return this.$store.getters.loggedinUser;
    }
  },
  async created() {
    let routeParamsId = this.$route.params._id;
    if (!routeParamsId) return;
    const meal = await this.$store.dispatch({ type: "getById", routeParamsId });
    this.currMeal = meal;
  },
  methods: {
    async save() {
      this.address =
        this.currMeal.location.country +
        " " +
        this.currMeal.location.city +
        " " +
        this.address;
      let res = await HttpService.axiosNoCredentials(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAIf_SiIrDkiwPumk-JVkjC52m7Htv3m8w`
      );
      this.currMeal.location.lat = res.data.results[0].geometry.location.lat;
      this.currMeal.location.lng = res.data.results[0].geometry.location.lng;
      this.currMeal.ownerId.id = this.currUser._id;
      let currMeal = this.currMeal;
      await this.$store.dispatch({ type: "editMeal", currMeal });
      this.$router.push(`/meal`);
    },
    async add() {
      this.address =
        this.currMeal.location.country +
        " " +
        this.currMeal.location.city +
        " " +
        this.address;
      let res = await HttpService.axiosNoCredentials(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAIf_SiIrDkiwPumk-JVkjC52m7Htv3m8w`
      );
      this.currMeal.location.lat = res.data.results[0].geometry.location.lat;
      this.currMeal.location.lng = res.data.results[0].geometry.location.lng;
      this.currMeal.ownerId.id = this.currUser._id;
      let currMeal = this.currMeal;
      await this.$store.dispatch({ type: "addMeal", currMeal });
      this.$router.push(`/meal`);
      this.currMeal = {};
    },
    uploadImg() {
      CloudService.uploadImg(event).then(res => {
        console.log(this.currMeal)
        if (this.currMeal.imgUrl.length < 7) {
          this.currMeal.imgUrl.push(res.secure_url);
        }
      });
    },
    removeImg(currUrl) {
      //this.$store.dispatch({type: "removeImg", url, currMeal})
      let idx = this.currMeal.imgUrl.findIndex(url => {
        return url == currUrl;
      });
      this.currMeal.imgUrl.splice(idx, 1);
    }
  }
};
</script>
