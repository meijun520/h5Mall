<template>
  <div class="order">
    <div class="div1">
    
        <div  @click="topersonalData(a)" class="user">
          <img src="" >
          <span>
         喵喵啊啊
          </span> 
           <img src="./设置.png" style="float:right; margin-left:1.18rem;" @click="toset()"/>
        <img src="./消息.png" style="float:right;" @click="tomassage()"/>
       
            
  
     
       
      </div>
      <div style="padding:0 2.31rem;">
        <div v-for="(item,key) in list" :key="key" class="massage">
          <p>{{item.shu}}</p>

          <div>{{item.zi}}</div>
        </div>
      </div>
    </div>
    <div class="div2">
      <img :src="huiicon()" style="position: relative;
    top: 0.2rem;" />
      会员暂未开通
      <x-button mini type="warn" @click.native="addhui()">开通享折扣</x-button>
    </div>
    <div class="div3">
      <div class="item-head">
        <span>我的订单</span>
        <p style="float:right" @click="getlist()">查看全部</p>
      </div>
      <div class="border"></div>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item
          :label="item.label"
          v-for="(item ,key) in list1"
          :key="key"
          @click.native="getlist(item.icon)"
        >
          <img slot="icon" :src="geticon(item.icon)" />
        </grid-item>
      </grid>
    </div>
    <div class="div4">
      <div class="item-head">
        <span>我的服务</span>
      </div>
      <div class="border"></div>
      <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="4">
        <grid-item
          :label="item.label"
          v-for="(item,key) in list2"
          :key="key"
          @click.native="serve(item.router)"
        >
          <img slot="icon" :src="geticon(item.icon)" />
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { XButton, Grid, GridItem, GroupTitle } from 'vux'

export default {
  components: {
    XButton,
    Grid,
    GridItem,
    GroupTitle
  },
  data () {
    return {
      list: [
        { shu: 0, zi: '收藏' },
        { shu: 0, zi: '账户' },
        { shu: 0, zi: '积分' },
        { shu: 0, zi: '优惠券' }
      ],
      list1: [
        { label: '待付款', icon: '形状' },
        { label: '待发货', icon: '形状2' },
        { label: '待收货', icon: '形状3' },
        { label: '评价', icon: '形状4' },
        { label: '退换', icon: '桃心' }
      ],
      list2: [
        { label: '邀请好友', icon: '编组', router: 'collectCoupons' },
        { label: '地址管理', icon: 'Group', router: 'adress' },
        { label: '拼团商城', icon: '编组1', router: 'pintuan' },
        { label: '招募代理', icon: '编组2', router: 'myshop' },
        { label: '领券中心', icon: '编组3', router: 'collectCoupons' },
        { label: '常见问题', icon: '编组4', router: 'collectCoupons' },
        { label: '联系客服', icon: '编组5', router: 'collectCoupons' },
        { label: '成为商家', icon: '编组6', router: 'becomemar' }
      ]
    }
  },
  props: {},
  methods: {
    // chakan () {
    //   this.$router.push({path: '/order', query: {from: this.$route.query.index}})
    // },
    geticon (icon) {
      return require('./img/' + icon + '.png')
    },
    huiicon () {
      return require('./会员.png')
    },
    serve (a) {
      this.$router.push({
        path: '/' + a,
        query: { from: this.$route.query.index }
      })
    },
    getlist (a) {
      this.$router.push({
        path: '/order',
        query: { from: this.$route.query.index }
      })
    },
    topersonalData (a) {
      this.$router.push({
        path: './personalData',
        query: {from: this.$route.query.index}
      })
    },
    tomassage () {
      this.$router.push('./dealMassage')
    },
    addhui () {
      this.$router.push('./addhui')
    },
    toset () {
      this.$router.push('./set')
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  .weui-grid:after {
    border: none;
  }
  .weui-grids:before {
    border: none;
  }
  .div1 {
    height: 11.9rem;
    background-image: linear-gradient(to right, #ff718d, #ff254f);
    color: #ffffff;
    .user {
    padding:0 1.25rem;
   padding-top: 3.37rem;
      // img {
      //   float: right;
      // }
    }
    .massage {
      float: left;
      width: calc(100%/4);
     
    }
  }
  .div2 {
    height: 3.75rem;
    margin: 0.625rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.5rem;
    margin-top: -1.875rem;
    line-height: 3.75rem;
    padding: 0 1.125rem;
    .weui-btn_warn {
      background-image: linear-gradient(to right, #ff214c, #ff4f71);
      border-radius: 1.125rem;
      float: right;
      margin-top: 0.93rem;
    }
  }
  .div3 {
    height: 8.75rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 1);
    margin: 0.625rem;
    .item-head {
      padding: 0.937rem 0.875rem;
    }
    .border {
      border-bottom: 0.125rem solid #f1f1f1;
      width: 23rem;
      margin: auto;
    }
  }
  .div4 {
    height: 14.5rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 1);
    margin: 0.625rem;
    margin-bottom: 4rem;
    .item-head {
      padding: 0.937rem 0.875rem;
    }
    .border {
      border-bottom: 0.125rem solid #f1f1f1;
      width: 23rem;
      margin: auto;
    }
  }
}
</style>