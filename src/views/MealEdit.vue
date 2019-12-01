<template>
    <section >
        <div class="edit-container" v-if="currMeal">
          <h1>{{(currMeal._id)? 'Meal Edit' : 'Meal Add'}}</h1>
            <form type="submit">
            <div class="inputs-container">
                <span>Title</span> <el-input type="text" v-model="currMeal.title" ></el-input>
                <span>Country</span> <el-input type="text" v-if="currMeal.location" v-model="currMeal.location.country"></el-input>
                <span>City</span> <el-input type="text" v-if="currMeal.location" v-model="currMeal.location.city"></el-input>
                <span>Price</span> <el-input type="number" v-model="currMeal.price"></el-input>
            </div>
            <h3>Time</h3>
            <div class="inputs-container">
                <span>Date</span> <el-date-picker type="date" placeholder="Pick a day"></el-date-picker>

                <span>Time</span> <el-time-select :picker-options="{start: '08:00',
                                                  step: '00:15',
                                                  end: '22:00'
                                                  }" 
                                                  placeholder="Select time">
                                  </el-time-select>
            </div>

            <h2>Hosting</h2>
            <div class="inputs-container">
                <span>Tags</span>   <el-select v-model="currMeal.tags" v-if="currMeal.tags"  multiple placeholder="Select">
                                      <el-option  v-for="tag in options" :key="tag.value" :label="tag.label" :value="tag.value">   
                                      </el-option>

                                    </el-select>
                <span>Limit Guests</span> <el-input v-model="currMeal.maxUsers" type="number" ></el-input>
            </div>
            <h2>Dishes</h2>
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
    currMeal: {},
    options: [{
          value: 'Italian',
          label: 'Italian'
        }, {
          value: 'BBQ',
          label: 'BBQ'
        }, {
          value: 'Asian',
          label: 'Asian'
        }, {
          value: 'Vegitarian',
          label: 'Vegitarian'
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
      // this.currMeal = {};
    }
  }

} 
</script>


<style scoped>
.edit-container {
  margin: 50px 0;
}
.inputs-container {
  width: 60%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 25px;
}
h2, h3 {
  text-align: center;
}
span{
  display: flex;
  align-items: center;
}

input,
select {
  border: 0;
  border-bottom: 1px solid;
}
</style>
