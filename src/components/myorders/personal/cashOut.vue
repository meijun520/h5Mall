<template>
  <div class="cashOut">
    <tabGroup :title="title"></tabGroup>
    <div class="part1">
      <h1>¥ 100.00</h1>
      <p>
        
<span>充值金额</span>
<span class="fr">可提现金额¥899.00</span>
      </p>
      
    </div>
    <group title="提现到支付宝">
          <x-input title="账号" v-model="value1"></x-input>
              <x-input title="姓名" v-model="value2"></x-input>
    </group>
     <big-anniu :title="title1"></big-anniu>
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
      value1: '',
      value2: ''
    }
  },
  props: {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="scss" >
.cashOut {
  .part1{
background: #FFFFFF;
padding:1rem 2.1rem;
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