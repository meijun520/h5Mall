<template>
  <div class="changepassword">
    <tabGroup></tabGroup>
    <h2>重置密码</h2>
    <group>
      <x-input placeholder="请输入手机号码" v-model="phone">
          <img slot="right-full-height" src="./删除.png" @click="clear()"/>
      </x-input>
      <x-input class="weui-vcode" placeholder="输入短信验证码" :show-clear="false">
        <button slot="right" class="button">60s</button>
      </x-input>
      
    </group>

    <big-anniu :title="anniu" @click.native="setpassword()"></big-anniu>
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
      anniu: '下一步',
      phone: ''
    }
  },
  props: {},
  computed: {},
  methods: {
    setpassword () {
      this.$router.push('/setpassword')
    },
    clear () {
      this.phone = ''
    }
  }
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
  .vux-x-input-right-full {
    line-height: 3.3rem;
    img {
      height: 1.3rem;
      margin-right: 1rem;
    }
  }

}
</style>