<template>
  <div class="systemMassage">
    <tabGroup :title="title"></tabGroup>
    <div>
      <div class="time">
        <span>2017-06-12 09:00</span>
      </div>
      <div class="div1">
        <p>限时1折l商品开始啦！</p>
        <div class="area">

        </div>

      </div>
    </div>
     <div>
      <div class="time">
        <span>2017-06-12 09:00</span>
      </div>
      <div class="div2">
        <p>优惠券过期提醒</p>
        <div style="color:#999999; font-size:0.82rem;">
       你有一张价值15的优惠券今日过期，快去用掉把～
        </div>
      <group>
      <cell value="查看详情" is-link></cell>
    </group>
      </div>
    </div>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Group, Cell } from 'vux'
export default {
  components: {
    tabGroup: tabGroup, Group, Cell
  },
  data () {
    return {
      title: '系统消息'
    }
  },
  props: {},
  computed: {
    src () {}
  },
  methods: {}
}
</script>

<style lang="scss" >
.systemMassage {
  .time {
    text-align: center;
    height: 1.1rem;
    line-height: 1.1rem;
    margin:0.75rem 0;
    color: #999999;
    font-size:0.75rem;
  }
  .div1{
    height: 11.25rem;
    background: #FFFFFF;
    margin: 0.75rem;
    padding: 0.75rem;

    .area{
      margin-top: 0.69rem;
      height: 7.1rem;
      background: #EFEFEF;
    }
  }
  .div2{
    background: #FFFFFF;
    margin: 0.75rem;
    padding: 0.75rem;
    .weui-cell__ft{
      color:#1987FF
    }
  }
}
</style>