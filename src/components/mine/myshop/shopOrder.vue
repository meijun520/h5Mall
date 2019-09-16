<template>
  <div class="shopOrder">  
    <order-parts :title1="title1" :title2="title2" :buy="buy"></order-parts>  
  </div>
</template>

<script>
import orderParts from '@/components/mine/myorder/orderparts'
export default {
  components: {
    orderParts: orderParts
  },
  data () {
    return {
      title1: '买家昵称 : 小龙女的小孔庙',
      title2: '已完成',
      buy: false
    }
  },
  props: {},
  methods: {
  }

}
</script>

<style lang="scss" scoped>


</style>