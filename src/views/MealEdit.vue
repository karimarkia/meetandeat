<template>
    <section >
        <div class="edit-container" v-if="currMeal">
          <h1>{{(currMeal.id)? 'Meal Edit' : 'Meal Add'}}</h1>
            <form type="submit">
            <h2>Detailes</h2>
            <div class="inputs-container">
                <span>Title</span> <input type="text" v-model="currMeal.title" />
                <span>Country</span> <input type="text" v-if="currMeal.location" v-model="currMeal.location.country"/>
                <span>City</span> <input type="text" v-if="currMeal.location" v-model="currMeal.location.city"/>
                <span>Price</span> <input type="number" v-model="currMeal.price"/>
            </div>
            <h2>Time</h2>
            <div class="inputs-container">
                <span>Date</span> <input type="date" />
                <span>Time</span> <input type="time" />
                <span>Date</span> <el-date-picker type="date" placeholder="Pick a day"></el-date-picker>

                <span>Time</span> <el-time-select :picker-options="{start: '08:00',
                                                  step: '00:15',
                                                  end: '18:30'
                                                  }" 
                                                  placeholder="Select time">
                                  </el-time-select>
            </div>

            <h2>Hosting</h2>
            <div class="inputs-container">
                <span>Tags</span> <select v-model="currMeal.tags">
                    <option value="Asian">Asian</option>
                    <option value="Italian">Italian</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Vegitarian">Vegitarian</option>
                </select>          
                <span>Limit Guests</span> <input v-model="currMeal.maxUsers" type="number" />
            </div>
            <h2>Dishes</h2>
            <div class="inputs-container">
                <span>first Appetizer</span> <input type="text"/>
                <span>second Appetizer</span> <input type="text"/>
                <span>first Main Dishe</span> <input type="text"/>
                <span>second Main Dishe</span> <input type="text"/>
                <span>first Dessert</span> <input type="text"/>
                <span>second Dessert</span> <input type="text"/>
                <span>Drinks</span> <input type="text" /> 
            </div>
            <button  @click="save()">save</button>
             <!-- <button v-if="currMeal.id" @click="save">save</button>
    <button v-else="" @click="add">add</button> -->
            </form>      
        </div>
        
    </section>
</template>
 
<script>
export default {
  data: () => ({
    currMeal: {}
  }),
    computed: {
    mealToEdit() {
      return JSON.parse(JSON.stringify(this.currMeal));
      
    }
  },
created() {
    let routeParamsId = this.$route.params.id;
      if(!routeParamsId) return;
    this.$store.dispatch({ type: "getById", routeParamsId }).then(meal => {
      this.currMeal = meal;
    });
  }, 
  methods:{
        save(){
            if(this.currMeal.id){
                let currMeal = this.currMeal
                this.$store.dispatch({type:'editMeal',currMeal})
                .then(()=>this.$router.push(`/meal`))
            }
            else {
                let currMeal = JSON.parse(JSON.stringify(this.currMeal))
                this.$store.dispatch({type:'addMeal', currMeal})
                .then(()=>this.$router.push(`/meal`))
            }
        },
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
h2 {
  text-align: center;
}

input,
select {
  border: 0;
  border-bottom: 1px solid;
}
</style>