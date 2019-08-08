<template>
  <div class="detial">
    <div class="img">
      <img src style="width=6.5rem; height:6.5rem" />
    </div>
    <div>
      <div>妃立宝洗衣包青春版50g</div>
      <div style="color;#999999; font-size:0.75rem">去污新改革 纳米洗衣宝 孕婴可用</div>
      <div>
        ¥{{cost}}
        <span
          style="color:#999999; font-size:0.75rem; text-decoration:line-through"
        >¥{{cost}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      list: [
        { name: '1', img: '', cost: '1', count: 1 },
        { name: '1', img: '', cost: '2', count: 2 },
        { name: '2', img: '', cost: '3', count: 3 }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.detial {
  height: 8.4rem;
  background-color: #ffffff;
  padding: 0.75rem;
  .img {
    float: left;
  }
}
</style>