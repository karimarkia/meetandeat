<template>
  <section class="who-going" v-if="user">
    <div class="review">
      <el-avatar class="revieimg" :size="50" :src="user.imgUrl"></el-avatar>
      <div class="guest">
        <h4>{{user.username}} , {{guestAge}}</h4>
        <h4>{{user.location.city}} ,{{user.location.country}}</h4>
      </div>
    </div>
  </section>
</template>

<script>
import UserService from "../services/UserService.js";
export default {
  props: ["guest"],
  data() {
    return {
      user: null
    };
  },
  async created() {
    console.log(this.guest);
    
    this.user = await UserService.getById(this.guest);
  },
  computed: {
    guestAge() {
      let today = Date.now();
      let birthDate = this.user.birthDay;
      let age = today - birthDate;
      age = age / (60000 * 60 * 24 * 365);
      return age.toFixed();
    }
  }
};
</script>