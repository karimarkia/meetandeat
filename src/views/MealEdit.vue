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
            <h3>Images</h3>
            <div class="inputs-container">

                <span>imgs</span> <el-input type="file" ></el-input>
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
        <button v-if="currMeal._id" @click="save">save</button>
        <button v-else @click="add">add</button>
      </form>
    </div>
  </section>
</template>
 
<script>
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
        "https://res.cloudinary.com/artyompogosov/image/upload/v1575047876/finel%20proj/u5u5xs0c0nsv2pdatank.jpg",
        "https://res.cloudinary.com/artyompogosov/image/upload/v1575047874/finel%20proj/jak3sncfccczgeew34zq.jpg",
        "https://res.cloudinary.com/artyompogosov/image/upload/v1575048902/finel%20proj/mr0hssqnmfki9qsdo0bo.jpg",
        "https://res.cloudinary.com/artyompogosov/image/upload/v1575048599/finel%20proj/etrjd1gveu7yqz7vhuj8.jpg",
        "https://res.cloudinary.com/artyompogosov/image/upload/v1575047449/finel%20proj/kjfgkl2gk3ia1n5i2fzu.jpg"
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
  computed: {
    mealToEdit() {
      return JSON.parse(JSON.stringify(this.currMeal));
    }
  },
  created() {
    let routeParamsId = this.$route.params._id;
    if (!routeParamsId) return;
     this.$store.dispatch({ type: "getById", routeParamsId }).then(meal => {
      this.currMeal = meal;
    });
  },
  methods: {
    save() {
      // if (this.currMeal.id) {
        let currMeal = this.currMeal;
        console.log(currMeal)
       this.$store.dispatch({ type: "editMeal", currMeal })
          .then(() => this.$router.push(`/meal`));
      // } else {
      //   console.log(1);
      //   let currMeal = JSON.parse(JSON.stringify(this.currMeal));
      //   this.$store
      //     .dispatch({ type: "addMeal", currMeal })
      //     .then(() => this.$router.push(`/meal`));
      // }
    },
    add() {
      let currMeal = this.currMeal;
      // console.log(currMeal);   
      this.currMeal.imgUrl="https://res.cloudinary.com/dluh6gkat/image/upload/v1574862270/new%20york/z41io7uvewy11_fwrvbj.jpg";
      this.$store.dispatch({ type: "addMeal", currMeal })
      .then(() => this.$router.push(`/meal`));
      this.currMeal = {};
    },
    uploadImg() {
      
    }
  }
} 
</script>
