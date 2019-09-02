<template>
  <div class="addhui">
  
    <img src="./矩形.png" class="img">
  <div class="tab1">
    <img src="./返回.png"  @click="getback()" />
    <span class="span1">{{title}}</span>
  </div>
    <img src="./jinse.png" class="img1">
    <div class="card">
      <div style="color:#AB6709; font-size:1.25rem">
        商城会员卡
      </div>
      <div style="color:#AB6709;font-size:0.875rem">
        预计开卡可省2000元
      </div>
      <button>
        开通会员 29/年
      </button>
    </div>
    <div class="qy">
      <span>
        开通会员 专享6大权益
      </span>
        <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="3">
        <grid-item
          :label="item.label"
          v-for="(item,key) in list2"
          :key="key"
        >
          <img slot="icon" :src="geticon(item.icon)" />
        </grid-item>
      </grid>

    </div>
    
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
export default {
  components: {
    Grid, GridItem, GroupTitle
  },
  data () {
    return {
      title: '加入会员',
      list2: [
        { label: '邀请好友', icon: '3' },
        { label: '地址管理', icon: '7' },
        { label: '拼团商城', icon: '9' },
        { label: '招募代理', icon: '11' },
        { label: '领券中心', icon: '13' },
        { label: '常见问题', icon: '15' }
      ]

    }
  },
  props: {},
  computed: {},
  methods: {
    geticon (icon) {
      return require('./' + icon + '.png')
    },
    getback () {
      console.log(1)
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" >
.addhui {
 text-align: center;
 .tab1{
 color: #FFFFFF;
 margin-top: -10rem;
 margin-bottom: 1rem;
 img{
    position: relative;
    right: 8rem;
 }
 }
 .img{
   width: 100vw;
   margin-top:0rem;
 }
 .img1{
top:3rem;
 }
 .card{
       margin-top: -10rem;
    margin-left: -12rem;
    button{
      width:8.5rem;
height:2rem;
background:rgba(73,72,68,1);
border-radius:1rem;
color: #FFFFFF;
border:none;
margin-top: 1rem;
    }
 }
 .qy{
   margin-top: 5rem;
   .weui-grid__icon{
     width: 3rem;
     height: 3rem;
   }
   .weui-grid:after{
     border-bottom: none;
   }
 }
}
</style>