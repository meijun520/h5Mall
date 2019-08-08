<template>
  <div class="adress">
    <tabGroup :title="title"></tabGroup>
    <group class="address1" :class="a===false?'active':''">
      <div>朱晏成&nbsp;&nbsp;133012241224</div>
      <div>
        <span class="moren">默认</span>
        <span style="color:#666666; font-size:0.8rem">中国,上海,长宁区,福泉路200号快递柜</span>
      </div>
      <div class="bianji" @click="bianji()" v-if="a">编辑</div>
      <div class="bianji" v-else>
        <div class="blue" @click="tochangeadress()">编辑</div>
        <div class="red">删除</div>
      </div>
    </group>
    <button class="button" @click="newchange()">新增收货地址</button>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Group } from 'vux'

export default {
  components: {
    tabGroup: tabGroup,
    Group
  },
  data () {
    return {
      title: '收货地址',
      a: true
    }
  },
  props: {},
  computed: {},
  methods: {
    bianji () {
      this.a = false
    },
    newchange () {
      this.$router.push('./newadress')
    },
    tochangeadress () {
      this.$router.push('./changeadress')
    }
  }
}
</script>

<style lang="scss" >
.adress {
  .address1 {
    background: #ffffff;
    padding: 0.85rem 0.85rem 0 0.85rem;
    .moren {
      width: 2rem;
      height: 1.25rem;
      background: rgba(255, 46, 87, 1);
      border-radius: 0.125rem;
      color: #ffffff;
      line-height: 1.25rem;
      padding: 0.25rem;
      font-size: 0.75rem;
    }
    .bianji {
      text-align: center;
      float: right;
      position: relative;
      bottom: 1.5rem;
    }
    .blue {
      float: left;
      width: 5.2rem;
      background: #1987ff;
      color: #ffffff;
      height: 4.7rem;
      line-height: 4.7rem;
    }
    .red {
      float: right;
      width: 5.2rem;
      color: #ffffff;
      height: 4.7rem;
      background: #ff8721;
      line-height: 4.7rem;
    }
  }
  .button {
    width: 21.4rem;
    height: 3.125rem;
    background: linear-gradient(
      225deg,
      rgba(255, 33, 76, 1) 0%,
      rgba(255, 79, 113, 1) 100%
    );
    box-shadow: 0px 0.25rem 0.5rem 0px rgba(255, 175, 189, 1);
    border-radius: 2.2rem;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    position: fixed;
    bottom: 3rem;
    left: 2rem;
  }
}
</style>