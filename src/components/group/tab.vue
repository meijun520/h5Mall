<template>
  <div class="tab">
    <img src="./返回.png" class="img1" @click="getback()" />
    <span class="span1">{{title}}</span>
    <img :src="icon" class="img2" />
    <span class="img2" @click="too()">{{ab}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    ab: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {},
  methods: {
    getback () {
      history.go(-1)
    },
    too () {
      this.$emit('toother')
    }
  }
}
</script>

<style lang="scss" >
.tab {
  padding-left: 1rem;
  padding-right: 0.82rem;
  padding-top: 2.63rem;
  padding-bottom: 0.93rem;
  background-color: #ffffff;
  text-align: center;
  border-bottom: 0.0125rem solid #f6f6f6;
  .img1 {
    float: left;
  }
  .img2 {
    float: right;
  }
}
</style>