<template>
    <section >
        <div class="edit-container" v-if="currMeal">
          <h1>{{(currMeal._id)? 'Meal Edit' : 'Meal Add'}}</h1>
            <form type="submit">
            <div class="inputs-container">
              <h1> </h1><h1>{{(currMeal.id)? 'Meal Edit' : 'Meal Add'}}</h1>
                <span>Title</span> <el-input type="text" v-model="currMeal.title" ></el-input>
                <span>Country</span> <el-input type="text" v-if="currMeal.location" v-model="currMeal.location.country"></el-input>
                <span>City</span> <el-input type="text" v-if="currMeal.location" v-model="currMeal.location.city"></el-input>
                <span>Price</span> <el-input type="number" v-model="currMeal.price"></el-input>
            </div>
            <h3>Time</h3>
            <div class="inputs-container">
                <span>Time</span> <el-date-picker
                                    value-format="timestamp"
                                    v-model="currMeal.atDate"
                                    type="datetime"
                                    placeholder="Select date and time">
                                  </el-date-picker> 
            </div>

            <h3>Hosting</h3>
            <div class="inputs-container">
                <span>Tags</span>   <el-select v-model="currMeal.tags" v-if="currMeal.tags"  multiple placeholder="Select">
                                      <el-option  v-for="tag in options" :key="tag.value" :label="tag.label" :value="tag.value">   
                                      </el-option>

                                    </el-select>
                <span>Limit Guests</span> <el-input v-model="currMeal.maxUsers" type="number" ></el-input>
            </div>
  
            <h3>Dishes</h3>
            <div class="inputs-container" v-if="currMeal.dishes">
                <span>first Appetizer</span> <el-input v-model="currMeal.dishes.appetizers[0].name" type="text"></el-input>
                <span>second Appetizer</span> <el-input v-model="currMeal.dishes.appetizers[1].name" type="text"></el-input>
                <span>first Main Dishe</span> <el-input v-model="currMeal.dishes.mains[0].name" type="text"></el-input>
                <span>second Main Dishe</span> <el-input v-model="currMeal.dishes.mains[1].name" type="text"></el-input>
                <span>first Dessert</span> <el-input v-model="currMeal.dishes.dessert[0].name" type="text"></el-input>
                <span>second Dessert</span> <el-input v-model="currMeal.dishes.dessert[1].name" type="text"></el-input>
                <span>Drinks</span> <el-input type="text"></el-input> 
            </div>
            <h3>Images</h3>
            <div class="inputs-container">
                <!-- <span>imgs</span> <el-input @change="uploadImg" type="file" ></el-input> -->
               <span>add img</span> <input @change="uploadImg" type="file" />
            </div>
            <div class="cards-container" >
              <img-preview v-for="url in currMeal.imgUrl" :key="url" :url="url" @removeImg="removeImg"></img-preview>
            </div>
        <button v-if="currMeal._id" @click="save">save</button>
        <button v-else @click="add">add</button>
      </form>
    </div>
  </section>
</template>
 
<script>
import CloudService from '../services/CloudService.js'
import ImgPreview from '../components/ImgPreview.vue'
export default {
  data: () => ({
    currMeal: {
          
    "title": "",
    "location": {
        "country": "",
        "city": "",
        "lat": 41.902782,
        "lng": 12.496366
    },
    "price": 0,
    "atDate": "",
    "duration": 0,
    "tags": [
        ""
    ],
    "ownerId": {
        "id": "",
        "name": "",
        "about": " better with wine!"
    },
    "rate": 4.7,
    "maxUsers": 7,
    "guests": [
        "userId1",
        "userId2",
        "userId3",
        "userId4"
    ],
    "imgUrl": [
    ],
    "description": "Experience traditional, organic Roman cuisine with a modern touch in a relaxed, friendly home. Best friends Giovanna and Cristina use family recipes and great wines to make you feel welcome!.",
    "dishes": {
        "appetizers": [
            {
                "name": "",
                "description": "",
                "count": 2
            },
            {
                "name": "",
                "description": "",
                "count": 1
            }
        ],
        "mains": [
            {
                "name": "",
                "description": "",
                "count": 2
            },
            {
                "name": "",
                "description": "",
                "count": 1
            }
        ],
        "dessert": [
            {
                "name": "",
                "description": "",
                "count": 2
            },
            {
                "name": "",
                "description": "",
                "count": 1
            }
        ],
        "drinks": [
            "Red Wine",
            "White Wine",
            "Beer"
        ]
    }
    },
    options: [{
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
      
  }),
  components:{
    ImgPreview
  },
  computed: {
    mealToEdit() {
      return JSON.parse(JSON.stringify(this.currMeal));
    }
  },
 async created() {
    let routeParamsId = this.$route.params._id;
    if (!routeParamsId) return;
    const meal= await this.$store.dispatch({ type: "getById", routeParamsId })
    this.currMeal=meal
  },
  methods: {
   async save() {
        let currMeal = this.currMeal;
      await this.$store.dispatch({ type: "editMeal", currMeal })
         this.$router.push(`/meal`) 
    },
   async add() {
      let currMeal = this.currMeal; 
      this.currMeal.imgUrl="https://res.cloudinary.com/dluh6gkat/image/upload/v1574862270/new%20york/z41io7uvewy11_fwrvbj.jpg";
      await this.$store.dispatch({ type: "addMeal", currMeal })
      this.$router.push(`/meal`)
      this.currMeal = {};
    },
    uploadImg() {
      CloudService.uploadImg(event)
      .then(res => {
        if(this.currMeal.imgUrl < 7){
          (this.currMeal.imgUrl.push(res.secure_url))
        }
        
      }); 
    },
    removeImg(currUrl){
      //this.$store.dispatch({type: "removeImg", url, currMeal})
      let idx = this.currMeal.imgUrl.findIndex(url => {
         return url == currUrl
        })
      console.log(idx)
      this.currMeal.imgUrl.splice(idx,1)
    }
  }
} 
</script>
