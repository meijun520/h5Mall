<template>
  <div class="changepassword">
    <tabGroup></tabGroup>
    <h2>重置密码</h2>
    <group>
      <x-input placeholder="请输入手机号码">
        <img
          slot="right-full-height"
          src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg"
        />
      </x-input>
      <x-input class="weui-vcode" placeholder="输入短信验证码">
        <button slot="right" class="button">60s</button>
      </x-input>
    </group>

    <big-anniu :title="anniu" :icon="img"></big-anniu>
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
      anniu: '下一步'
    }
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" >
.changepassword {
  background: #ffffff;
  height: 100vh;
  .tab {
    border: none;
  }
  h2 {
    margin-top: 1.81rem;
    padding-left: 1.5rem;
  }
  .button{
    width:5.625rem;
height:1.875rem;;
background:rgba(242,242,242,1);
border-radius:0.91rem;
color: #C1C1C1;
border: none;
  }


}
</style>