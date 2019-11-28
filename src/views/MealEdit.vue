<template>
    <section >
        <div class="edit-container" v-if="currMeal">
          <h1>{{(currMeal.id)? 'Meal Edit' : 'Meal Add'}}</h1>
            <form type="submit">
            <h2>Detailes</h2>
            <div class="inputs-container">
                <span>Title</span> <input type="text" v-model="currMeal.title" />
                <span>Country</span> <input type="text" v-model="currMeal.cuntry"/>
                <span>City</span> <input type="text" v-model="currMeal.city"/>
                <span>Price</span> <input type="number" v-model="currMeal.price"/>
            </div>
            <h2>Time</h2>
            <div class="inputs-container">
                <span>Date</span> <input type="date" />
                <span>Time</span> <input type="time" />
            </div>

            <h2>Hosting</h2>
            <div class="inputs-container">
                <span>Tags</span> <select v-model="currMeal.type">
                    <option value="Asian">Asian</option>
                    <option value="Italian">Italian</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Vegitarian">Vegitarian</option>
                </select>          
                <span>Limit Guests</span> <input type="number" />
            </div>
            <h2>Dishes</h2>
            <div class="inputs-container">
                <span>Appetizers</span> <input type="text" />
                <span>Mains Dishes</span> <input type="text" />
                <span>Desserts</span> <input type="text" />
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