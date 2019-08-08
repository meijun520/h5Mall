<template>
  <div>
    <div class="header-in">
      <!--<div class="left-arrow"></div>-->
      <div style="float:left; position:relative; top:2.5rem; left:0.75rem;" >    
       <x-icon type="ios-arrow-left" size="24" @click="getback()"></x-icon>
       </div>
      <p>我的订单</p>
    </div>
    <tab :scroll-threshold="5" class="tab" active-color="red">
      <tab-item v-for="(item,key) in list" :key="key" :selected="n===key">{{item}}</tab-item>
    </tab>
    <order-parts></order-parts>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem } from 'vux'
import orderParts from './orderparts'
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    orderParts: orderParts
  },
  data () {
    return {
      list: ['全部', '待付款', '待发货', '待收货', '待评价'],
      n: 0
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
.header-in {
  height: 4.93rem;
  background-color: #ffffff;
  text-align: center;
  border-bottom: 0.0625rem solid #e5e5e5;
  p{
  color: #000000;
  font-size: 1rem;
  line-height: 1.375rem;
  position: relative;
  top: 2.625rem;
  left:9rem;
  width: 7rem
  }

}
.left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;
}
</style>