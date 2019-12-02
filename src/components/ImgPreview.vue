<template>
    <section class="img-prev-card">
        <img class="img-prev" :src="url" alt="">
        <button @click="onRemoveImg(url)">X</button>
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
        max-width: 200px;
    }
    .img-prev{
        max-width: 150px;
    }

</style>

