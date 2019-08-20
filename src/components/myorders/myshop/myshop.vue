<template>
  <div class="myshop">
    <tabGroup :title="title" :icon="icon"></tabGroup>
    <div class="div1">
      <img src style="width:3.125rem; height:3.125rem;" class="fl" />
      <div>
        <div>小龙女的小店</div>
        <div>粉丝 878</div>
      </div>
      <x-icon type="ios-search" size="25"></x-icon>
      <input type="search" placeholder="搜索" />
       <tab>
      <tab-item selected @on-item-click="onItemClick">商品 </tab-item>
      <tab-item @on-item-click="onItemClick">订单 </tab-item>
      <tab-item @on-item-click="onItemClick">信息</tab-item>
    </tab>
    </div>
      <pai-lie
          v-for="(item,key) in list"
          :key="key"
          style="float:left"
          :imgurl="item.img"
          :title="item.name"
          :cost="item.cost"
          :border="false"
          class="pai"
          :che="src"
        ></pai-lie>
   
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Tab, TabItem } from 'vux'
import paiLie from '@/components/goods'
export default {
  components: {
    tabGroup: tabGroup,
    Tab,
    TabItem,
    paiLie: paiLie
  },
  data () {
    return {
      title: '我的小店',
      icon: require('./分享.png'),
      list: [
        { name: '1', img: '', cost: '1', count: 1 },
        { name: '1', img: '', cost: '2', count: 2 },
        { name: '2', img: '', cost: '3', count: 3 }
      ],
      src: require('@/components/group/9.png')
    }
  },
  props: {},
  methods: {}
}
</script>

<style lang="scss" >
.myshop {
  .div1 {
    background: #f8778b;
    padding-top: 1.56rem;
    padding-left: 1.56rem;
    svg {
     
      position: relative;
      top: 0.5rem;
      fill: #fd6072;
    }
    input {
      width: 4.9rem;
      height: 2rem;
      background: #ffffff;
      border-radius: 1rem;
      border: none;
      padding-left: 2rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
          margin-left: -2rem;
    }
    input::-webkit-input-placeholder {
      color: #fd6072;
      
    }
    .vux-tab-wrap{
          float: right;
    width: 10.5rem;
    }
    .vux-tab-container{
          margin-left: -5rem;
    margin-right: 4rem;
    }
    .vux-tab{
      background-color: #f8778b;
    }
    .vux-tab-ink-bar{
          background-color:#FFFFFF;
          height: 0.25rem;
    }
    .vux-tab .vux-tab-item.vux-tab-selected{
      color: #FFFFFF;
    }
    .vux-tab .vux-tab-item{
      color: #FFFFFF;
      background: none;
    }
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .pai {
      width: calc(50% - 1rem);
      height: 13rem;
      margin:0.5rem ;
    }
}
</style>