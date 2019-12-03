<template>
    <section class="chat-room">
        <ul id="messages"></ul>
        <form class="chat-form">
            <input id="txt" />
            <button>Send</button>
        </form>
    </section>
</template>

<script>
    export default {
    
    }
</script>





<style scoped>

    .chat-room{
        width: 400px;
        height: 600px;
        position: fixed;
        top: 300px;
        right: 50px;
        font: 13px Helvetica, Arial;
        z-index: 10;
        background-color: #eee;
    }
    .chat-form{
            background: #000;
            padding: 3px;
            position: relative;
            bottom: 0;
            width: 100%;
    }

    form input {
        border: 0;
        padding: 10px;
        width: 90%;
        margin-right: .5%;
    }

    form button {
        width: 9%;
        background: rgb(130, 224, 255);
        border: none;
        padding: 10px;
    }
    #messages {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    #messages li {
        padding: 5px 10px;
    }

    #messages li:nth-child(odd) {
        background: #eee;
    }

</style>