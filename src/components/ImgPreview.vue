<template>
    <section class="img-prev-card ">
        <img class="img-card img-hight" :src="url" alt="">
        <button class="del-btn" @click="onRemoveImg(url)">Delete</button>
    </section>
</template>


<script>
    export default {
        props:['url'],
        methods:{
            onRemoveImg(url){
                this.$emit('removeImg', url)
            }
        }
    }
</script>
 
<style scoped>
    .img-prev-card{
        position: relative;
        height: 250px;
    }
    .img-hight{
        height: 100%;
    }

    .del-btn{
        padding: 5px;
        background-color: white;
        border-radius: 4px;
        border: 0;
        font-size: 1rem;
        position: absolute;
        bottom: 10px;
        left: 10px;

    }

</style>

