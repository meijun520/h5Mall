<template>
  <div class="payfor">
    <tabGroup :title="title"></tabGroup>
    <div class="part1">
      <h1>¥ 130.00</h1>
      <p>订单费用</p>
    </div>
    <group title="选择付款方式">
      <radio  :options="radio003" ></radio>
    </group>
     <big-anniu :title="title1"></big-anniu>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import bigAnniu from '@/components/group/biganniu'
import { Radio, Group, Checklist } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    Radio,
    Group,
    Checklist,
    bigAnniu: bigAnniu
  },
  data () {
    return {
      title: '支付',
      radio003: [
        {
          icon: require('@/components/cart/dingdan/微信支付.png'),
          key: '001',
          value: '余额支付'
        },
        {
          icon: require('@/components/cart/dingdan/微信支付.png'),
          key: '002',
          value: '微信支付'
        }, {
          icon: require('@/components/cart/dingdan/支付宝.png'),
          key: '003',
          value: '支付宝支付'
        }
      ],
      title1: '支付'
    }
  },
  props: {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="scss" >
.payfor {
  .part1{
background: #FFFFFF;
text-align: center;
padding-top:2.5rem;
padding-bottom:1.5rem;
p{
  color: #9A9A9A;
  margin-top: 0.8rem;
  font-size: 0.75rem;
}
  }
    .weui-icon-checked{
    display: inline-block;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 1.2rem;
    border: 1px solid #CCCCCC;
  }
  .weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
        color: #FFFFFF;
    background-color: #FF2E57;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 1.4rem;
    position: relative;
    right: 0.3rem;
    top:-0.1rem
  }
  
}
</style>