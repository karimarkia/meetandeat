<template>
  <form @submit.prevent="searchMeals" class="filter-container">
    <div class="searchMeals filter-secodery">
      <el-input @input="searchMeals" placeholder="Search" v-model="filterBy.searchStr"></el-input>
      <div :class="{ modal:isShowModal, displayNon:!isShowModal}">
        <div class="block">
          <el-slider v-model="value" range :marks="marks"></el-slider>
        </div>
        <div class="modalBtn flex">
          <button class="pricerange sort-price" @click="ClosePriceRange">Close</button>
          <button class="pricerange sort-price" @click="getFiltredByPrice">Save</button>
        </div>
      </div>
    </div>
    <el-select
      @change="searchMeals"
      v-model="filterBy.mealType"
      multiple
      collapse-tags
      placeholder="Select"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div class="filter-secodery">
      <button class="sort-price" @click="priceRange">Price</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "MealFilter",
  data() {
    return {
      value1: "",
      isShowModal: false,
      value: [0, 100],
      marks: {
        20: "20$",
        50: "50$",
        70: "70$",
        90: "90$"
      },

      filterBy: {
        searchStr: "",
        mealType: [],
        priceRange: [0, 100]
      },
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
      ]
    };
  },

  methods: {
    priceRange() {
      this.isShowModal = !this.isShowModal;
    },
    ClosePriceRange() {
      this.isShowModal = !this.isShowModal;
      this.value = [0, 100];
    },
    searchMeals() {
      this.$store.commit("setMealsFilter", { ...this.filterBy });
    },
    getFiltredByPrice(sortBy) {
      this.isShowModal = !this.isShowModal;
      this.filterBy.priceRange = this.value;
    }
  }
};
</script>
  