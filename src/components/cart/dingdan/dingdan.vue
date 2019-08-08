<template>
  <div class="dingdan">
   <tabGroup :title="title" ></tabGroup>
   <div class="address" v-if='dizhi'>
     <span>您还没设置收货地址，<span style="color:#1987FF" @click="toset()">去设置</span></span>
   </div>
   <div class="address1" v-else>
    <div>
      朱晏成&nbsp;&nbsp;133012241224
    </div>
    <div>
      <span class="moren">默认</span>
      <span style="color:#666666; font-size:0.8rem">
        中国,上海,长宁区,福泉路200号快递柜
      </span>
    </div>
    <div>

    </div>
   </div>
  <dingdan-detial class="margin-top:0.85rem;">

  </dingdan-detial>
  <div class="floot">
    <span>
      合计
    </span>
    <span>
 ¥50
    </span>
  <an-niu :title="queren" style="position:relative; left:12rem;" @click.native="fukuan()"></an-niu>
  </div>

  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import dingdanDetial from './dingdandetial'
import { Swiper, XButton } from 'vux'
import anNiu from '@/components/group/anniu'

export default {
  components: {
    tabGroup: tabGroup,
    Swiper,
    dingdanDetial: dingdanDetial,
    XButton,
    anNiu: anNiu

  },
  data () {
    return {
      title: '确认订单',
      queren: '确认',
      dizhi: true

    }
  },
  props: {},
  computed: {

  },
  methods: {
    toset () {
      this.$router.push('./adress')
    },
    fukuan () {
      this.$router.push('./payfinish')
    }
  }
}
</script>

<style lang="scss" >
.dingdan{
  .address{
    background: #FFFFFF;
    text-align: center;
    height: 3.2rem;
    line-height: 3.2rem;
    border-top:0.0625rem solid #F1F1F1;
    border-bottom: 0.0625rem solid #F1F1F1;
  }
  .address1{
    height: 4.7rem;
    background: #FFFFFF;
    padding:0.85rem 0.85rem 0 0.85rem;
    .moren{
      width:2rem;
height:1.25rem;
background:rgba(255,46,87,1);
border-radius:0.125rem;
color: #FFFFFF;
line-height: 1.25rem;
padding: 0.25rem;
font-size: 0.75rem;
    }
  }
  .floot{
    position: fixed;
    bottom:0;
    width: 100vw;
    height: 3rem;
    line-height: 3rem;
    background: #FFFFFF;
    padding-left:1rem;
  }

  
}





</style>