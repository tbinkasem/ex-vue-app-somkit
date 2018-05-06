<template>
  <div>
    <h1>Chat Room</h1>
    <div>
      <v-text-field v-model="name" label="ชื่อ"/>
      <v-text-field v-model="text" label="ข้อความ"/>
      <v-btn @click="send">ส่ง</v-btn>
    </div>
    <ul>
      <li v-for="(m, idx) in msg" :key="idx">
        <b>{{ m.name }}</b> พูดว่า {{ m.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      text: '',
      msg: [],
    }
  }, // data
  created() {
    this.$socket.subscribe('room39', this.onMsg)
  },
  beforeDestroy() {
    this.$socket.unsubscribe('room39')
  },
  methods: {
    send() {
      this.$socket.publish('room39', {
        name: this.name,
        text: this.text,
      })
    },
    onMsg(data) {
      this.msg.unshift(data)
    },
  }, // methods
}
</script>
