<template>
  <div class="shopOrder">  
    <order-parts :title1="title1" :title2="title2" :buy="buy"></order-parts>  
  </div>
</template>

<script>
import orderParts from '@/components/myorders/myorder/orderparts'
export default {
  components: {
    orderParts: orderParts
  },
  data () {
    return {
      title1: '官方旗舰店',
      title2: '卖家已发货',
      buy: false
    }
  },
  props: {},
  methods: {
  }

}
</script>

<style lang="scss" scoped>
.shopOrder{
 

}

</style>