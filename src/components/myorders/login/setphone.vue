<template>
  <div class="setphone">
    <tabGroup :title="title"></tabGroup>

    <group>
      <x-input placeholder="请输入手机号码">
        <img
          slot="right-full-height"
          src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg"
        />
      </x-input>
      <x-input class="weui-vcode" placeholder="填写验证码">
        <button slot="right" class="button">获取动态码</button>
      </x-input>
    </group>
    <big-anniu :title="anniu"></big-anniu>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import bigAnniu from '@/components/group/biganniu'
import { XInput } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    bigAnniu: bigAnniu,
    XInput
  },
  data () {
    return {
      title: '绑定手机号码',
      anniu: '完成'
    }
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" >
.setphone {
  background: #ffffff;
  height: 100vh;
  .button{
    width:5.63rem;
height:1.875rem;
border-radius:0.9375rem;
border:0.0625rem solid rgba(255,47,87,1);
color: #FF2A53;
background: #ffffff;
  }
.weui-vcode.weui-cell{
    border-bottom:0.0625rem solid #D9D9D9;
    
  }
}
</style>