<template>
  <div class="detial">
    <div class="img">
      <img :src="icon" />
    </div>
    <div class="padding">
      <div>{{title}}</div>
      <div style="color:#999999; font-size:0.75rem">{{describe}}</div>
      <div class="bottom">
        ¥{{cost}}
        <span
          style="color:#999999; font-size:0.75rem; text-decoration:line-through"
        >¥{{cost1}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      // list: [
      //   { name: '1', img: '', cost: '1', count: 1 },
      //   { name: '1', img: '', cost: '2', count: 2 },
      //   { name: '2', img: '', cost: '3', count: 3 }
      // ]
    }
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    describe: {
      type: String,
      required: false,
      default: ''
    },
    cost: {
      type: String,
      required: false,
      default: ''
    },
    cost1: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.detial {
  height: 8.4rem;
  background-color: #ffffff;
  position: relative;
  .img {
    float: left;
    width:6.5rem; 
    height:6.5rem;
    padding:0.75rem;
  }
  .padding{
    padding: 0.75rem;
  }
  .bottom{
    margin-bottom: 0rem;
    position: absolute;
    bottom: 0.75rem;
    left: 8rem;


  }
}
</style>