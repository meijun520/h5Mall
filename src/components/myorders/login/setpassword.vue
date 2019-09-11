<template>
  <div class="changepassword">
    <tabGroup></tabGroup>
    <h2>设置密码</h2>
    <group>
   
      <x-input class="weui-vcode" placeholder="请输入新密码" v-model="phone" type="password">
        <img slot="right-full-height" src="./删除.png" @click="clear()"/>
      </x-input>
    </group>

    <big-anniu :title="anniu" @click.native="setsuccess()"></big-anniu>
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
    setsuccess () {
      this.$router.push('/setsuccess')
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


}
</style>