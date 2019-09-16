<template>
  <div class="coupon">
    <tabGroup :title="title" :ab="ab" @toother="mycoupons"></tabGroup>
    <tab :scroll-threshold="5" class="tab" active-color="red">
      <tab-item v-for="(item,key) in list" :key="key" :selected="n===key">{{item}}</tab-item>
    </tab>
    <coupons-group
      v-for="(item,key) in CouponList"
      :key="key"
      :amount="item.amount"
      :description="item.description"
      :couponName="item.couponName"
      :count="item.receiveCount"
      :platform="item.platform"
      :enableTime="item.endTime"
      
    ></coupons-group>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem, XProgress } from 'vux'
import tabGroup from '@/components/group/tab'
import couponsGroup from './coupongroup'
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    XProgress,
    tabGroup: tabGroup,
    couponsGroup: couponsGroup
  },
  data () {
    return {
      list: ['全部', '母婴 ', ' 美妆', '洗护 ', '洗衣液 '],
      n: 0,
      title: '领券中心',
      ab: '我的优惠券',
      CouponList: []
    }
  },
  props: {},
  mounted () {
    this.getCouponList()
  },
  methods: {
    getback () {
      this.$router.push({
        path: '/',
        query: { index: this.$route.query.from }
      })
    },
    getCouponList () {
      this.$http
        .get('ferrobag-server/coupon/getCouponList', {
          params: { pageNum: 1, pageSize: 5 }
        })
        .then(res => {
          this.CouponList = res.data.data
        })
    },
    mycoupons () {
      this.$router.push('./myCoupons')
    }
  }
}
</script>

<style lang="scss" >
//   .left-arrow {
//   position: absolute;
//   width: 30px;
//   height: 30px;
//   top: -5px;
//   left: -5px;
// }
// .boday {
//   padding: 0.875rem 0.875rem 0 0.875rem;
//   .left {
//     position: relative;
//     float: left;
//     border-radius: 0.25px 0rem 0rem 0.25rem;
//     height: 5.875rem;
//     width: 18.875rem;
//     background-color: #ffffff;
//     box-shadow: 0px 0.125rem 0.25rem 0px rgba(191, 191, 191, 0.5);
//     .quan {
//       position: absolute;
//       left: 7.5rem;
//       top: 0.5rem;
//       .weui-progress__inner-bar {
//         background-color: #ff214c;
//       }
//     }
//     .banyuan1 {
//       position: absolute;
//       left: 0rem;
//       top: 2.1rem;
//       width: 0.7rem;
//       height: 1.4rem;
//       background-color: #fbf9fe;
//       border-radius: 0 0.7rem 0.7rem 0;
//     }
//     .banyuan2 {
//       width: 0.7rem;
//       height: 1.4rem;
//       border-radius: 0.7rem 0rem 0rem 0.7rem;
//       background-color: #ff214c;
//       position: absolute;
//       left: 18.22rem;
//       top: 2.1rem;
//     }
//   }
//   .right {
//     height: 5.875rem;
//     background-color: #ff214c;
//     border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
//   }
// }
</style>