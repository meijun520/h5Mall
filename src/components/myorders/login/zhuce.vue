<template>
  <div class="zhuce">
    <tabGroup></tabGroup>
    <h2>注册</h2>
    <group>
      <x-input placeholder="请输入手机号码">
        <img
          slot="right-full-height"
          src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg"
        />
      </x-input>
      <x-input class="weui-vcode" placeholder="输入短信验证码">
        <button slot="right" class="button">获取动态码</button>
      </x-input>
      <x-input placeholder="请输入手机号码">
        <img
          slot="right-full-height"
          src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg"
        />
      </x-input>
    </group>
    <div class="gcs-checkbox">
      <input type="checkbox" />
      <p>
        继续注册表示同意并同意
        <span>《妃立宝服务条款》</span>
      </p>

      <big-anniu :title="anniu" :icon="img"></big-anniu>
      <div class="center">账号密码登录</div>
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
.zhuce {
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
  .center {
    text-align: center;
    font-size: 0.82rem;
    color: #1987ff;
   
  }
  .gcs-checkbox{
font-size: 0.82rem;
margin-top:1rem;
margin-left: 1.5rem;
input{
  width: 1.1rem;
  height: 1.1rem;
  border: #FF90A5;
  background-color: #FFF2F4;
      float: left;
    margin-right: 1rem;
}
}
span{
  color:#FF2851; 
  line-height: 1.1rem;
}

  }



</style>