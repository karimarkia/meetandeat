<template>
    <section v-if="user">
        <h1>User Details - {{user.username}}</h1>
        <pre>{{user}}</pre>

        <h2>My Meals</h2>
<pre>{{meals}}</pre>
    </section>
</template>

<script>
import UserService from '../services/UserService';

export default {
    data() {
        return {
            user: null
        }
    },
    async created() {
        const id = this.$route.params._id;
        console.log(id);
        
        const user = await UserService.getById(id);
        this.user = user
        console.log( this.user);
        
    },
    computed: {
            meals() {
      return this.$store.getters.currMeal;
    },
    },
}
</script>