<template>
  <div>
    <tabGroup :title="title" :ab="ab"></tabGroup>
    <tab :scroll-threshold="5" class="tab" active-color="red">
      <tab-item v-for="(item,key) in list" :key="key" :selected="n===key">{{item}}</tab-item>
    </tab>
    <order-parts v-if="a"></order-parts>
      <div v-else class="b">
       <img src="./订单.png" >
       <p>
        您暂时没有任何订单哦～～
       </p>

     </div>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem } from 'vux'
import orderParts from './orderparts'
import tabGroup from '@/components/group/tab'
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    orderParts: orderParts,
    tabGroup: tabGroup
  },
  data () {
    return {
      list: ['全部', '待付款', '待发货', '待收货', '待评价'],
      n: 0,
      title: '我的订单',
      a: false
    }
  },
  props: {},
  methods: {
    getback () {
      // this.$router.push('/orderhome')
      // history.go(-1)
      this.$router.push({path: '/', query: {index: this.$route.query.from}})
    }
  }
}
</script>

<style lang="scss" scoped>
.left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;
}
 .b{
    text-align: center;
    color: #D2D2D2;
    padding-top:4rem;
    background-color: #ffffff;
  }
</style>