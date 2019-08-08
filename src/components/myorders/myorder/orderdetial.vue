<template>
  <div>
    <div class="header-in">
      <!--<div class="left-arrow"></div>-->
      <div style="float:left; position:relative; top:2.5rem; left:0.75rem;">
        <x-icon type="ios-arrow-left" size="24" @click="getback()"></x-icon>
      </div>
      <p>订单详情</p>
    </div>
    <div class="red"></div>
    <div style="padding:0 0.75rem;">
      <div class="title">
        <p>{{zhuantai}}</p>
        <p>{{time}}</p>
      </div>
      <div class="name">
        <div class="div1" v-if="wuliu">
          <img src="./物流.png" />
          <div style="margin-left:3.8rem;">
            <p style="color:#2187FF">已签收，收货人凭取件码签收，感谢使用申通快递，期待再次为您服务</p>
          </div>
        </div>
        <div class="div1">
          <img src="./地址.png" />
          <div style="margin-left:3.8rem; ">
            <p>姓名&nbsp;&nbsp;电话</p>
            <p>上海市浦东新区德州路400号893号</p>
          </div>
        </div>
      </div>
      <div class="massage">
        <div class="img">
          <img :src="imgurl" style="height:5rem;width:5rem" />
        </div>
        <div class="item-box">
          描述{{title}}
          <span class="fl">¥346</span>
          <br />
          <span style="color:#999999; font-size:0.687rem">属性{{attribute}}</span>

          <span class="fl">×1</span>
          <br />
          <span style="color:#FF214C; border:0.0625rem solid #FF5B7A; font-size:0.563rem">包邮</span>
          <p class="fl">
            总计
            <span style="color:#FF5B7A;">¥346</span>
          </p>
        </div>
      </div>
      <div class="div">
        <div class="ddxx">
          <div>
            <label style="color:#999999; font-size:0.0625rem">订单信息</label>
          </div>
          <div>
            <label>支付类型：</label>
            <span>支付宝</span>
          </div>
          <div>
            <label>订单编号：</label>
            <span>7697900000788</span>
          </div>
          <div>
            <label>创建时间：</label>
            <span>2018.09.08 12:08:34</span>
          </div>
        </div>
      </div>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item link="/component/cell">
          <img src="./联系.png" />
          <span>联系卖家</span>
        </grid-item>
        <grid-item :link="{ path: '/component/cell'}">
          <img src="./电话.png" />
          <span>联系电话</span>
        </grid-item>
      </grid>
    </div>
    <div class="floot">
      <div style="float:right; margin: 0.5rem">
   <button class="blackb">去付款</button>
      <button class="redb" @click="toassess()">去评价</button>
      </div>
   
    </div>
  </div>
</template>

<script>
import {
  XHeader,
  Tab,
  TabItem,
  FormPreview,
  Grid,
  GridItem,
  XButton
} from 'vux'
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    FormPreview,
    Grid,
    GridItem,
    XButton
  },
  data () {
    return {
      zhuantai: '订单状态',
      time: '订单剩余时间',
      wuliu: true
    }
  },
  props: {},
  methods: {
    getback () {
      // this.$router.push('/orderhome')
      history.go(-1)
      // this.$router.push({path: '/', query: {index: this.$route.query.from}})
    },
    toassess () {
      this.$router.push('/assess')
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
  p {
    color: #000000;
    font-size: 1rem;
    line-height: 1.375rem;
    position: relative;
    top: 2.625rem;
    left: 9rem;
    width: 7rem;
  }
}
.red {
  height: 8.625rem;
  background-image: linear-gradient(to right, #ff214c, #ff7791);
}
.title {
  color: #ffffff;
  margin-top: -6.4rem;
}
.name {
  background-color: #ffffff;
  border-radius: 0.25rem;
  .div1 {
    padding: 1.25rem;
    img {
      float: left;
    }
  }
}
.massage {
  margin-top: 0.75rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  padding: 1.25rem;
  .img {
    float: left;
  }
  .item-box {
    margin-left: 6rem;
    .fl {
      float: right;
    }
  }
}
.div {
  padding: 0 1.25rem;
  background-color: #ffffff;
  .ddxx {
    height: 7.5rem;
    width: 22rem;
    border-top: 0.0625rem solid #f5f5f5;
    border-bottom: 0.0625rem solid #f5f5f5;
  }
}
.weui-grid {
  background-color: #ffffff;
  padding: 1.125rem 2.93rem;
  span {
    color: #444444;
  }
}
.floot {
  height: 3.125rem;
  width: 100vw;
  background-color: #ffffff;
  position: fixed;
  bottom: 0rem;
  .blackb {
    width: 5rem;
    height: 1.75rem;
    color: #999999;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.93rem;
    border: 0.0625rem solid rgba(206, 206, 206, 1);
  }
  .redb {
    width: 5rem;
    height: 1.75rem;
    color: #FF214C;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.93rem;
    border: 0.0625rem solid #FF214C
  }
}
</style>