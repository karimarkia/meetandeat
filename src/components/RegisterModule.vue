
<template>
    <section class="register-container">
        <button @click="toggleRegister" class="exit-btn">X</button>
        <div class="secondery-reg-container">
            <span>Full Name* </span> <el-input type="text"></el-input>
            <span>Country* </span> <el-input type="text"></el-input>
            <span>City* </span> <el-input type="text"></el-input>
            <span>Email* </span> <el-input type="email"></el-input>
            <div class="mini-container flex align-center ">
            <span>Gender* </span> <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <span>Birthday* </span> <el-date-picker value-format="timestamp" type="date"></el-date-picker>
            </div>
            <span>User Name* </span> <el-input type="text"></el-input>
            <span>Password* </span> <el-input placeholder="Please input password" show-password></el-input>
            <span>Reapet Password* </span><el-input placeholder="Please input password" show-password></el-input>

            
        </div>
    </section>
</template>


<style scoped> 
    .register-container{
        max-width: 530px;    
        background-color: white;
        border: 1px solid grey;
        border-radius: 10px;
        padding: 15px;
        position: absolute;
        top: 50px;
        right: 10%;
        left: 10%;
        margin: auto;
        z-index: 100;
        display: none;
    }
    .secondery-reg-container{
        display: flex;
        flex-direction: column;
    }
    .secondery-reg-container > *{
        margin-bottom: 10px;
    }
    .mini-container > *:not(:last-child){
        margin-right: 7px;
    } 
    .exit-btn{
        background-color: transparent;
        border: 0;
        font-size: 1.2rem;
        margin: 10px 10px 10px 0;
    }
    .exit-btn:hover{
        transform: scale(1.1)
    }
</style>


<script >

    export default {
        // props:['isActive'],
        data: () =>({
                    options: [{
          value: 'Male',
          label: 'Male'
        }, 
        {
          value: 'Female',
          label: 'Female'
        }],
        value: ''
        }),

        methods:{
        toggleRegister(){
            this.$emit('toggleRegister')
        }
    }
    }
        

    

</script>