<template>
  <div class="logistics">
    <tabGroup :title="title"></tabGroup>
    <div class="timeline-demo">
      <div v-if="wuliu">
      <div class="name">
        <p>韵达快递</p>
        <p style="float:left">订单号：2569463353535353</p>
        <span class="fr">复制</span>
      </div>
      <timeline>
        <timeline-item>
          <h4>【收货地址】上海市浦东新区德州路400号 893号</h4>
        </timeline-item>

        <timeline-item>
          <div class="fl">
            <div>15-02</div>
            <div>19:20</div>
          </div>
          <h4 class="recent">运输中</h4>
          <p class="recent">【杭州市】包裹正在揽收中，已经发出</p>
        </timeline-item>
        <timeline-item>
           <div class="fl">
            <div>15-02</div>
            <div>19:20</div>
          </div>
          <h4>运输中</h4>
          <p>【杭州市】包裹正在揽收中，已经发出</p>
        </timeline-item>
        <timeline-item>
           <div class="fl">
            <div>15-02</div>
            <div>19:20</div>
          </div>
          <h4>运输中</h4>
          <p>【杭州市】包裹正在揽收中，已经发出</p>
        </timeline-item>
        <timeline-item>
           <div class="fl">
            <div>15-02</div>
            <div>19:20</div>
          </div>
          <h4>已发货</h4>
          <p>包裹正在揽收中</p>
        </timeline-item>
      </timeline>
    </div>
    <div class="wu" v-else>
<img src="./编组.png" >
<div>
  暂时没有物流信息
</div>

    </div>
    </div>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Timeline, TimelineItem } from 'vux'

export default {
  components: {
    tabGroup: tabGroup,
    Timeline,
    TimelineItem
  },
  data () {
    return {
      title: '查看物流',
      wuliu: false
    }
  },
  props: {},
  methods: {}
}
</script>

<style lang="scss" >
.logistics {
  .name {
    padding: 0 2rem;
    padding-top: 1.1rem;
    padding-bottom: 2.2rem;
    border-bottom: 0.0625rem solid #f5f5f5;
  background-color: #FFFFFF;
    p {
      line-height: 1.25rem;
      color: #000000;
      font-size: 0.875rem;
    }
    .fr {
      float: right;
      color: #1987ff;
    }
  }
  .vux-timeline {
    padding-left: 4.625rem;
    padding-top: 1.625rem;
    background-color: #FFFFFF;
  }
  .vux-timeline-item-color {
    background-color: #d8d8d8;
  }
  .vux-timeline-item-tail {
    background-color: #d8d8d8;
  }
  .logistics .vux-timeline-item-color {
    background-color: #ff214c;
  }
  .weui-icon-success-no-circle:before {
    content: "收";
  }
  .fl {
    float: left;
        margin-left: -4rem;
 color: #999999;
    font-size: 0.8rem;
  }
  p {
    color: #999999;
    font-size: 0.8rem;
  }
  h4 {
    color: #999999;
    font-size: 0.81rem;
  }
  .recent {
    color: #000000;
  }
  .wu{
  text-align: center;
    color: #D2D2D2;
    font-size: 1.125rem;
    padding-top:4rem;
    background-color: #FFFFFF;
    height: 19rem;
  }
}
</style>