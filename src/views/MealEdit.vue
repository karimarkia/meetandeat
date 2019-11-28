<template>
  <section>
    <div class="edit-container" v-if="currMeal">
      <h1>{{(currMeal.id)? 'Meal Edit' : 'Meal Add'}}</h1>
      <form type="submit">
        <h2>Detailes</h2>
        <div class="inputs-container">
          <span>Title</span>
          <input type="text" v-model="currMeal.title" />
          <span>Country</span>
          <input type="text" v-if="currMeal.location" v-model="currMeal.location.country" />
          <span>City</span>
          <input type="text" v-if="currMeal.location" v-model="currMeal.location.city" />
          <span>Price</span>
          <input type="number" v-model="currMeal.price" />
        </div>
        <h2>Time</h2>
        <div class="inputs-container">
          <span>Date</span>
          <input type="date" />
          <span>Time</span>
          <input type="time" />
        </div>

        <h2>Hosting</h2>
        <div class="inputs-container">
          <span>Tags</span>
          <select v-model="currMeal.tags">
            <option value="Asian">Asian</option>
            <option value="Italian">Italian</option>
            <option value="BBQ">BBQ</option>
            <option value="Vegitarian">Vegitarian</option>
          </select>
          <span>Limit Guests</span>
          <input v-model="currMeal.maxUsers" type="number" />
        </div>
        <h2>Dishes</h2>
        <div class="inputs-container">
          <span>Appetizers</span>
          <input type="text" />
          <span>Mains Dishes</span>
          <input type="text" />
          <span>Desserts</span>
          <input type="text" />
          <span>Drinks</span>
          <input type="text" />
        </div>
        <!-- <button  @click="save()">save</button> -->
        <button v-if="currMeal.id" @click="save">save</button>
        <button v-else @click="add">add</button>
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
    if (!routeParamsId) return;
    this.$store.dispatch({ type: "getById", routeParamsId }).then(meal => {
      this.currMeal = meal;
    });
  },
  methods: {
    save() {
      // if (this.currMeal.id) {
        let currMeal = this.currMeal;
        this.$store
          .dispatch({ type: "editMeal", currMeal })
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
      // currMeal.id='baba'
      this.currMeal.imgUrl="https://res.cloudinary.com/dluh6gkat/image/upload/v1574862270/new%20york/z41io7uvewy11_fwrvbj.jpg";
      // this.newToy.createdAt = Date.now();
      this.$store.dispatch({ type: "addMeal", currMeal })
      .then(() => this.$router.push(`/meal`));
      // this.currMeal = {};
    }
  }
};
</script>