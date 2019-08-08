<template>
  <div class="color">
    <div class="header-in">
      <!--<div class="left-arrow"></div>-->
      <div style="float:left; position:relative; top:2.5rem; left:0.75rem;">
        <x-icon type="ios-arrow-left" size="24" @click="getback()"></x-icon>
      </div>
      <p>
        发表评价
        <span style="position:relative;left:7rem;color:#FF214C">提交</span>
      </p>
      <div>
          <alert v-model="show" :title="title"  @on-hide="onhide()"> {{ describle }}</alert>
      </div>
    </div>

    <div class="fen">
      <span>评分</span>
      <rater :star="'★'" active-color="#FF9900" style="float:right;line-height:3.4rem"></rater>
    </div>
    <!-- <div class="jia">
      <textarea placeholder="输入评价内容" class="text"></textarea>
    </div> -->
     <group>
      <x-textarea :max="200" :placeholder="placeholder"></x-textarea>
    </group>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem, XProgress, Rater, Alert, XTextarea, Group } from 'vux'

export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    XProgress,
    Rater,
    Alert,
    XTextarea,
    Group
  },
  data () {
    return {
      a: '<embed src="' + require('./star.svg') + '">',
      title: '确认要退出评价?',
      describle: '退出后编辑过的内容将不保存',
      show: false,
      placeholder: '输入评价内容'
    }
  },
  props: {},
  methods: {
    getback () {
      this.show = true
    },
    onhide () {
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="scss" >
.color {
  background-color: #ffffff;
  height: 100vh;
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
      width: 8rem;
    }
  }
  .left-arrow {
    position: absolute;
    width: 30px;
    height: 30px;
    top: -5px;
    left: -5px;
  }
  .fen {
    padding: 0 0.8rem;
    height: 3.125rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 3.125rem;
    border-bottom: 0.0625rem solid #e5e5e5;
  }
  // .jia {
  //   padding: 1rem 0.69rem 0 0.69rem;
  //   .text {
  //     height: 8.375rem;
  //     width: 23.5rem;
  //     background-color: #f5f5f5;
  //     border-radius: 0.125rem;
  //     border: none;
  //     padding: 0.5rem;
  //     font-size: 2rem;
  //   }
  // }
  .weui-textarea{
    background-color:#f5f5f5;
     height: 8.375rem;
  }
}
</style>