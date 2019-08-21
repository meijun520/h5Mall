<template>
  <div class="myshop">
    <tabGroup :title="title" ></tabGroup>
    <div class="div1">
      <img src style="width:3.125rem; height:3.125rem;" class="fl" />
      <div>
        <div style="font-size:0.94rem; color:#FFFFFF">小龙女的小店</div>
        <div style="font-size:0.94rem; color:#FFFFFF">粉丝 878</div>
      </div>
      <x-icon type="ios-search" size="25"></x-icon>
      <input type="search" placeholder="搜索" />
       <tab>
      <tab-item selected >商品 </tab-item>
      <tab-item >订单 </tab-item>
      <tab-item >信息</tab-item>
    </tab>
    </div>
    <select-tab></select-tab>
    
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
          :b="b"
          :a="a"
          @add="addto()"
        ></pai-lie>
   <div v-transfer-dom>
      <confirm v-model="show3"
      show-input
      title="输入进货数量"
      :input-attrs="{type: 'number'}"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      >
      </confirm>
    </div>
   
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Tab, TabItem, Confirm, TransferDomDirective as TransferDom } from 'vux'
import paiLie from '@/components/goods'
import selectTab from '@/components/group/selecttab'

export default {
  directives: {
    TransferDom
  },
  components: {
    tabGroup: tabGroup,
    Tab,
    TabItem,
    paiLie: paiLie,
    Confirm,
    selectTab: selectTab
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
      src: require('@/components/group/9.png'),
      b: true,
      a: false,
      show3: false
    }
  },
  props: {},
  methods: {
    addto () {
      this.show3 = true
    },
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm')
    }
  }
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
      left: -3rem;
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
      margin-left: -5.5rem;
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
    margin-right: 0.5rem;
  }
  .fr {
    float: right;
  }
  .pai {
      width: calc(50% - 0.75rem);
      height: 13rem;
      margin:0.5rem 0 0 0.5rem ;
    }
}
</style>