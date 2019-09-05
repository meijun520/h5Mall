<template>
  <div class="myAccounts">
    <tabGroup :title="title"></tabGroup>
    <div class="part1">
      <div class="money">¥130.00</div>
      <div class="word">账户余额</div>
      <div style="padding-top:1.81rem;">
        <button class="button1" @click="cashOut()">提现</button>
        <button class="button2" @click="recharge()">充值</button>
      </div>
    </div>

    <span class="heard">明细列表</span>
    <div class="part2">
      <div>
        <div class="fl" v-if='a'>充值</div>
         <div class="fl" v-else>提现</div>
        <div class="fr">
          <span class="money fr">+200.00</span>
          <div class="time" >2018.09.08 12:08:34</div>
        </div>
      </div>
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
      title: '我的账户',
      a: true
    }
  },
  props: {},
  computed: {},
  methods: {
    recharge () {
      this.$router.push('./recharge')
    },
    cashOut () {
      this.$router.push('./cashOut')
    }
  }
}
</script>

<style lang="scss" >
.myAccounts {
  .part1 {
    text-align: center;
    height: 11.4rem;
    background: #ffffff;
    margin: 0.75rem;
    .money {
      font-size: 1.625rem;
      color: rgba(59, 58, 58, 1);
      line-height: 2.3rem;
      padding-top: 1.19rem;
      height: 3.125rem;
    }
    .word {
      font-size: 0.875rem;
      color: rgba(153, 153, 153, 1);
      line-height: 1.25rem;
    }
    .button1 {
      width: 8.6rem;
      height: 2.6rem;
      background: linear-gradient(
        225deg,
        rgba(255, 33, 76, 1) 0%,
        rgba(255, 79, 113, 1) 100%
      );
      border-radius: 2.18rem;
      border: none;
    }
    .button2 {
      width: 8.6rem;
      height: 2.6rem;
      background: rgba(255, 239, 239, 1);
      border-radius: 2.18rem;
      border: 0.0625rem solid rgba(255, 33, 76, 1);
      margin-left: 2.3rem;
    }
  }
  .heard {
      font-size: 0.75rem;
      color: #8f8f8f;
      margin: 0.75rem;
    }
  .part2 {
    margin:0.125rem 0.75rem;
    height: 3.125rem;
    background: #ffffff;
    padding:0 0.75rem;
    .fl {
      float: left;
      line-height: 3.125rem;
    }
    .fr {
      float: right;
    }
    .money {
      font-size: 0.937rem;
    }
    .time {
      font-size: 0.6875rem;
      color: #8f8f8f;
    }
  }
}
</style>