<template>
  <div>
     <tabGroup :title="title" :ab="ab"></tabGroup>
    <tab :scroll-threshold="5" class="tab" active-color="red">
      <tab-item v-for="(item,key) in list" :key="key" :selected="n===key">{{item}}</tab-item>
    </tab>
    <div class="boday">
      <div class="left">
        <div style="margin:1.4rem 0 0 1.5rem">
          <div class="banyuan1"></div>
          <span>¥300</span>
          <div style="font-size:0.75rem;color:#999999;">满200元使用</div>
        </div>
        <div class="quan">
          <span style="font-size:0.812rem">全品类通用券</span>

          <x-progress :percent="percent2" :show-cancel="false"></x-progress>
          <div
            style="font-size:0.75rem;color:#999999;position: absolute;top: 1rem;
    left: 8rem;"
          >{{percent2}}%</div>
          <div style="font-size:0.625rem;color:#999999;">
            适用平台：全平台
            <br />有效期至：2019-07-09
          </div>
        </div>
        <div class="banyuan2"></div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem, XProgress } from 'vux'
import tabGroup from '@/components/group/tab'
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    XProgress,
    tabGroup: tabGroup
  },
  data () {
    return {
      percent2: 50,
      list: ['全部', '母婴 ', ' 美妆', '洗护 ', '洗衣液 '],
      n: 0,
      title: '领券中心',
      ab: '我的优惠券'
    }
  },
  props: {},
  methods: {
    getback () {
      this.$router.push({path: '/', query: {index: this.$route.query.from}})
    }
  }
}
</script>

<style lang="scss" >
.left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;
}
.boday {
  padding: 0.875rem 0.875rem 0 0.875rem;
  .left {
    position: relative;
    float: left;
    border-radius: 0.25px 0rem 0rem 0.25rem;
    height: 5.875rem;
    width: 18.875rem;
    background-color: #ffffff;
    box-shadow: 0px 0.125rem 0.25rem 0px rgba(191, 191, 191, 0.5);
    .quan {
      position: absolute;
      left: 7.5rem;
      top: 0.5rem;
      .weui-progress__inner-bar {
        background-color: #ff214c;
      }
    }
    .banyuan1 {
      position: absolute;
      left: 0rem;
      top: 2.1rem;
      width: 0.7rem;
      height: 1.4rem;
      background-color: #fbf9fe;
      border-radius: 0 0.7rem 0.7rem 0;
    }
    .banyuan2 {
      width: 0.7rem;
      height: 1.4rem;
      border-radius: 0.7rem 0rem 0rem 0.7rem;
      background-color: #ff214c;
      position: absolute;
      left: 18.22rem;
      top: 2.1rem;
    }
  }
  .right {
    height: 5.875rem;
    background-color: #ff214c;
    border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
  }
}
</style>