<template>
  <div class="about">
    <h1>About Uwadws</h1>
    <p>We like You</p>
    <h2>Lets Chat About</h2>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">{{msg.txt}}</li>
    </ul>
    <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" />
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import SocketService from "@/services/SocketService";

export default {
  data() {
    return {
      msg: { from: "Me", txt: "" },
      msgs: []
      // topic : prompt('Topic?')
    };
  },
  created() {
    // SocketService.emit('chat topic', this.topic)
    SocketService.on("chat addMsg", msg => {
      this.msgs.push(msg);
    });
  },
  methods: {
    sendMsg() {
      console.log("Sending", this.msg.txt);
      SocketService.emit("chat newMsg", this.msg);
    }
    // changeTopic() {
    //   SocketService.emit('chat topic', this.topic)
    // }
  }
};
</script>
