<template>
  <div class="withdraw">
    <tabGroup :title="title"></tabGroup>
    <div class="part1">
      <h1>¥ <input class="input" v-model="money" type="number"></h1>
      <p>
        
<span>充值金额</span>
<span class="fr">可提现金额¥899.00</span>
      </p>
      
    </div>
    <group title="提现到支付宝">
          <x-input title="账号" v-model="account"></x-input>
              <x-input title="姓名" v-model="realName"></x-input>
    </group>
     <big-anniu :title="title1" @click.native="withdraw()"></big-anniu>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import bigAnniu from '@/components/group/biganniu'
import { Radio, Group, XInput } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    Radio,
    Group,
    XInput,
    bigAnniu: bigAnniu
  },
  data () {
    return {
      title: '提现',
      title1: '提交',
      realName: '',
      money: '',
      account: ''
    }
  },
  props: {},
  computed: {},
  methods: {
    withdraw () {
      this.$http.post('ferrobag-server/deal/applyWithdraw', { userId: 247, account: this.account, realName: this.realName, money: this.money }).then(
        res => {
          if (res.data.data === true) {
            alert('提现成功')
          } else {
            alert('提现失败')
          }
        }
      )
    }

  }
}
</script>

<style lang="scss" >
.withdraw {
  .part1{
background: #FFFFFF;
padding:1rem 2.1rem;
.input{
  border:none;
  color:#3B3A3A;
  font-size: 2.125rem;
  width: 10rem;
}
h1{
  border-bottom:0.012rem solid #E6E6E6;
}
p{
  color: #9A9A9A;
  margin-top: 0.8rem;
  font-size: 0.75rem;
}
.fr{
  float: right;
}
  }
   
  
}
</style>