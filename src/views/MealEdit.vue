 <template> 
    <section class="meal-edit">
        <h1>edit page</h1>
        <div class="inputs-container">
            <div>
                <span>Title</span> <input type="text" />
            </div>
           <div>
               <span>Country</span> <input type="text" />
           </div>
           <div>
               <span>City</span> <input type="text" />
           </div>
           <div>
               <span>Price</span> <input type="number" />
           </div>
           <div>
               <span>Date</span> <input type="date" />
           </div>
           <div>
               <span>Time</span> <input type="time" />
           </div>
           <div>
                <span>Tags</span> <select>
                    <option value="Asian">Asian</option>
                    <option value="Italian">Italian</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Vegitarian">Vegitarian</option>
                    </select>
           </div>
           <div>
               <span>Limit Guests</span> <input type="number" />
           </div>
           <div>
               <span>Appetizers</span> <input type="text" />
           </div>
           <div>
               <span>Mains Dishes</span> <input type="text" />
           </div>
           <div>
               <span>Desserts</span> <input type="text" />
           </div>
           <div>
               <span>Drinks</span> <input type="text" /> 
           </div>
                  
        </div>
        
    </section>
</template>
 
<script>
export default {

    // data(){
    //     return {
    //         meal:{}           
    //     }ghjmnfd
    // },
    // methods:{
    //     save(){
    //         if(this.meal._id){
    //             let meal = this.meal
    //             this.$store.dispatch({type:'saveToy',meal})
    //             .then(()=>this.$router.push(`/meal`))
    //         }
    //         else {
    //             let toy = JSON.parse(JSON.stringify(this.meal))
    //             this.$store.dispatch({type:'addToy', meal})
    //             .then(()=>this.$router.push(`/meal`))
    //         }
            
    //     },
    // }, 
    // computed:{
    //     currMeal(){
    //         return this.$store.getters.getCurrmeal
    //     }
    // },
    //  created(){
    //     let mealId = this.$route.params._id;
    //     if(mealId){ 
    //         // this.$store.dispatch({type:'getToys'})
    //          this.$store.dispatch({type: "setCurrToy", mealId})
    //             .then(() => {
    //                  this.meal = JSON.parse(JSON.stringify(this.currMeal)); 
    //             })

    //     }

    // } 
    
}
</script>


<style scoped>
.meal-edit{
    display: flex;
    flex-direction: column;
    align-items: center;
   
  }
.inputs-container {
    width: 60%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: left;
}

  input{
      padding: 10px;
      border: 0;
      border-bottom: 1px solid;
      width: 55%;
  }

</style>