<template>
  <section class="mealMenu">
    <h2>Menu</h2>

    <div class="dish">
      <h2>Appetizers</h2>
      <div class="appetizers flex menu">
        <div>
          <h3>
            {{meal.dishes.appetizers[0].name }}
            <i class="fa fa-thumbs-up"></i>
            <span class="count">{{meal.dishes.appetizers[0].count}}</span>
          </h3>
          <h5
            v-if="meal.dishes.appetizers[0].description.length > 0"
          >{{meal.dishes.appetizers[0].description}}</h5>
        </div>
        <h4>Or</h4>
        <div>
          <h3>
            {{meal.dishes.appetizers[1].name}}
            <i class="fa fa-thumbs-up"></i>
            <span class="count">{{meal.dishes.appetizers[0].count}}</span>
          </h3>
          <h5
            v-if="meal.dishes.appetizers[1].description.length > 0"
          >{{meal.dishes.appetizers[1].description}}</h5>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="dish">
      <h2>Mains</h2>
      <div class="Mains flex menu">
        <div>
          <h3>
            {{meal.dishes.mains[0].name}}
            <i class="fa fa-thumbs-up"></i>
            <span class="count">{{meal.dishes.appetizers[0].count}}</span>
          </h3>
          <h5
            v-if="meal.dishes.mains[0].description.length > 0"
          >{{meal.dishes.mains[0].description}}</h5>
        </div>
        <h4>Or</h4>
        <div>
          <h3>
            {{meal.dishes.mains[1].name}}
            <i class="fa fa-thumbs-up"></i>
            <span class="count">{{meal.dishes.appetizers[0].count}}</span>
          </h3>
          <h5
            v-if="meal.dishes.mains[1].description.length > 0"
          >{{meal.dishes.mains[1].description}}</h5>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="dish">
      <h2>Dessert</h2>
      <div class="Dessert flex menu">
        <div>
          <h3>
            {{meal.dishes.dessert[0].name}}
            <i class="fa fa-thumbs-up"></i>
            <span class="count">{{meal.dishes.appetizers[0].count}}</span>
          </h3>
          <h5
            v-if="meal.dishes.dessert[0].description.length > 0"
          >{{meal.dishes.dessert[0].description}}</h5>
        </div>
        <h4>Or</h4>
        <div>
          <h3>
            {{meal.dishes.dessert[1].name}}
            <i class="fa fa-thumbs-up"></i>
            <span class="count">{{meal.dishes.appetizers[0].count}}</span>
          </h3>
          <h5
            v-if="meal.dishes.dessert[1].description.length > 0"
          >{{meal.dishes.dessert[1].description}}</h5>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="dish">
      <h2>Drinks</h2>
      <div class="drinks flex menu">
        <span v-for="(drink, idx) in meal.dishes.drinks" :key="idx">{{drink }} ,</span>
        <span>Guests can bring alcohol</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["meal"]
};
</script>

<style>
.fa-thumbs-up {
  padding: 0 5px 0 20px;
  color: #FF385C;
  cursor: pointer;
}
.count {
  font-size: 15px;
  padding-top: 2px;
}
</style>