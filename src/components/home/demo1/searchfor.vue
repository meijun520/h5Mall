<template>
<div class="search1">
<search-for class="searchfor"  :neir="neir" >
</search-for>
<div style="float: right;
    margin-top: -2.3rem;
    margin-right: 0.5rem;">
取消
</div>

<div class="border"></div>
    
    <div class="tis">
      <div class="zsearch">
      <p>最近搜索
 <img src="./删除.png" class="img">
      </p>
     
      <x-button mini class="jilu" @click.native="result">submit</x-button>
      </div>
     
      <p>热门搜索</p>
      <x-button mini @click.native="result">submit</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
import searchFor from './search'
export default {
  components: {
    searchFor: searchFor,
    XButton
  },
  data () {
    return {
      neir: '搜索商品名称'
    }
  },

  methods: {
    // tohome () {
    //   this.$router.push('/')
    // },
    sresult () {
      this.$router.push('/pailie')
    }
  }
}
</script>

<style lang="scss" scoped>
.search1 {
  background-color: white;
  height: 100vh;
  
  .searchfor{
    position: static;
    padding-top: 2rem;
  }
  .border{
    clear: both;
    border-bottom: 0.125rem solid #f1f1f1;
  }
  .tis{
  background-color: white;
  padding: 0.875rem;
  p{
    font-size: 0.75rem;
    color: #000;
  }
 .weui-btn:after{
   border: none;
 }
 .weui-btn_default{
   color: #999999
 }
 button.weui-btn, input.weui-btn{
   margin-right: 0.5rem;
    margin-top: 0.5rem;
 }
 .zsearch{
   margin-bottom: 4rem;
   .img{
     float: right;
   }
 }
  }
}
</style>