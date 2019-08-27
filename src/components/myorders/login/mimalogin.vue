<template>
  <div class="mimalogin">
    <tabGroup></tabGroup>
    <h2>密码登录</h2>
    <group>
      <x-input placeholder="请输入手机号码">
        <img
          slot="right-full-height"
          src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg"
        />
      </x-input>
      <x-input class="weui-vcode" placeholder="输入密码">
      </x-input>
    </group>
    <span class="fr">忘记密码？</span>
    <big-anniu :title="anniu" :icon="img"></big-anniu>
    <div class="center">账号密码登录 丨 新用户注册</div>
    <div style="position:fixed; bottom:0rem; left:0rem; width:100vw;">
 
    <div class="border">
      <span>请选择授权登录方式</span>
    </div>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item  label="微信">
        <img slot="icon" src="./img/微信.png">
      </grid-item>
      <grid-item  label="QQ">
        <img slot="icon" src="./img/qq.png">
      </grid-item>
      <grid-item label="微博">
        <img slot="icon" src="./img/微博.png">
      </grid-item>
      <grid-item label="短信登录">
        <img slot="icon" src="./img/短信.png">
      </grid-item>
    </grid>
         
    </div>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import bigAnniu from '@/components/group/biganniu'
import { XInput, Group, Grid, GridItem } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    bigAnniu: bigAnniu,
    XInput,
    Group,
    Grid,
    GridItem
  },
  data () {
    return {
      anniu: '登录',
      line: '请选择授权登录方式'
    }
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" >
.mimalogin {
  background: #ffffff;
  height: 100vh;
  .tab {
    border: none;
  }
  h2 {
    margin-top: 1.81rem;
    padding-left: 1.5rem;
  }
  .button {
    width: 5.63rem;
    height: 1.875rem;
    border-radius: 0.9375rem;
    border: 0.0625rem solid rgba(255, 47, 87, 1);
    color: #ff2a53;
    background: #ffffff;
  }
  .fr {
    float: right;
    margin-right: 1.5rem;
    margin-top: 0.82rem;
    color: #1987ff;
    font-size: 0.82rem;
  }
  .center {
    text-align: center;
    font-size: 0.82rem;
    color: #1987ff;
   
  }
  .border {
    border-top: 0.0625rem dashed #999999;
    text-align: center;

    span {
      font-size: 0.82rem;
      color: #999999;
     position: relative;
     top:-1rem;
     background-color: #ffffff; 
    }
  }
  .weui-grid__icon{
    height: 2.93rem;
    width: 2.93rem;
  }
  .weui-grids:before{
    border:none;
  }
}
</style>