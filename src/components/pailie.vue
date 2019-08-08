<template>
  <div>
    <div class="search">
    <search-for class="searchfor" :neir="neir" @keyup.enter.native="sresult"></search-for>
    <x-icon type="ios-arrow-left" size="40" class="icon" @click="tohome"></x-icon>
    </div>
    <div class="div1">
      <flexbox >
      <flexbox-item ><x-button  type="warn">综合</x-button></flexbox-item>
      <flexbox-item><x-button   type="warn">销量</x-button></flexbox-item>
      <flexbox-item><x-button  type="warn">新品</x-button></flexbox-item>
      <flexbox-item><x-button  type="warn">价格</x-button></flexbox-item>
      <flexbox-item><x-button  type="warn">筛选</x-button></flexbox-item>
    </flexbox>
    </div>
    <div v-if="result" class="div2">
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="1/3" v-for="(item,key) in list" :key="key" >
        <pai-lie :title="item.name" :imgurl="item.img" :cost="item.cost" class="ab"></pai-lie>
      </flexbox-item>
    </flexbox>
    <div v-show="jiaz" style="text-align:center">
      <img src="@/assets/qita/加载中.png" style="width:2rem">
      <p>加载中
      </p>
    </div>
    </div>
    <div style="text-align:center" >
      <img src="@/assets/qita/加载中.png" style="width:4rem">
      <p> 没有搜索到相关宝贝<br>换个关键词试试吧~
      </p>
    </div>
  </div>
</template>

<script>
import paiLie from './goods'
import {Flexbox, FlexboxItem, XButton} from 'vux'
import searchFor from './home/demo1/search'

export default {
  components: {
    paiLie: paiLie,
    Flexbox,
    FlexboxItem,
    searchFor: searchFor,
    XButton

  },
  data () {
    return {
      list: [{name: '1', img: '', cost: '1'},
      {name: '1', img: '', cost: '2'},
      {name: '2', img: '', cost: '3'},
      {name: '3', img: '', cost: '4'}
      ],
      jiaz: true,
      result: true,
      neir: '搜索内容'

    }
  },
  methods: {
    tohome () {
      this.$router.push('/')
    },
    sresult () {
      this.$router.push('/pailie')
    }

  }
}
</script>

<style lang="scss" scoped>
.search {
  background-color: white;
  position: fixed;
  .searchfor {
    margin-left: 1rem;
  }
  .icon {
    position: relative;
    z-index: 9999;
    top: 0.8rem;
    left: 0.5rem;
  }
}
.div1{
  padding-top: 5rem;
  .mini{
   font-size: 1rem;
  }
 
}
.div2{
  padding-top: 1rem;
  .ab{
  margin-left: 0.5rem
}
}

 p{
   text-align: center
 }


</style>
