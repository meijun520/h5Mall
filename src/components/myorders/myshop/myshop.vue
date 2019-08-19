<template>
  <div class="myshop">
    <tabGroup :title="title" :icon="icon"></tabGroup>
    <div class="div1">
      <img src="" style="width:3.125rem; height:3.125rem;" class="fl">
      <div >
        <div>小龙女的小店</div>
        <div>粉丝 878</div>
      </div>
      <form action="">
 <input  type="search" placeholder="请输入关键词">
      </form>
     
    </div>
   
  </div>
</template>

<script>

import tabGroup from '@/components/group/tab'
export default {
  components: {

    tabGroup: tabGroup
  },
  data () {
    return {

      title: '我的小店',
      icon: require('./分享.png')

    }
  },
  props: {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.myshop{
  .div1{
    background: #F8778B;
    padding-top:1.56rem;
    padding-left:1.56rem;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
}

</style>