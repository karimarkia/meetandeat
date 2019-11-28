 <template> 
    <section >
        <div class="edit-container" v-if="meal">
            <h2>Detailes</h2>
            <div class="inputs-container">
                <span>Title</span> <input type="text" v-model="meal.title" />
                <span>Country</span> <input type="text" />
                <span>City</span> <input type="text" />
                <span>Price</span> <input type="number" />
            </div>
            <h2>Time</h2>
            <div class="inputs-container">
                <span>Date</span> <input type="date" />
                <span>Time</span> <input type="time" />
            </div>

            <h2>Hosting</h2>
            <div class="inputs-container">
                <span>Tags</span> <select>
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
                  
        </div>
        
    </section>
</template>
 
<script>
export default {

    data(){
        return {
            meal:{}           
        }
    },
    // methods:{
    //     save(){
    //         if(this.meal.id){
    //             let meal = this.meal
    //             this.$store.dispatch({type:'saveMeal',meal})
    //             .then(()=>this.$router.push(`/meal`))
    //         }
    //         else {
    //             let toy = JSON.parse(JSON.stringify(this.meal))
    //             this.$store.dispatch({type:'addMeal', meal})
    //             .then(()=>this.$router.push(`/meal`))
    //         }
            
    //     },
    // }, 
    computed:{
        currMeal(){
            return this.$store.getters.currMeal;
        }
    },
     created(){
        let mealId = this.$route.params.id;
        if(mealId){ 
            // this.$store.dispatch({type:'getToys'})
             this.$store.dispatch({type: "setCurrMeal", mealId})
                .then(() => {
                    console.log('fffff ',this.currMeal)
                    this.meal = JSON.parse(JSON.stringify(this.currMeal)); 
                    console.log('xxxx ',this.meal)
                })
        }
    } 
    
}
</script>


<style scoped>
.edit-container{
    margin: 50px 0;
}
.inputs-container {
    width: 60%;
    margin: 30px auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 25px;
    
}
h2{
    text-align: center
}

  input, select{
     
      border: 0;
      border-bottom: 1px solid;
  }

</style>