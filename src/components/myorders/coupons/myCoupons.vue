<template>
  <div class="mycoupons">
    <tabGroup :title="title"></tabGroup>
    <div v-if="a">
      <coupons-group
        v-for="(item,key) in myCouponList"
        :key="key"
        :amount="item.amount"
        :description="item.couponType"
        :couponName="item.couponName"
        :platform="item.deleted"
        :enableTime="item.endTime"
        :b="false"
        :status="item.useStatus"
      ></coupons-group>
    </div>
    <div class="b" v-else>
      <img src="./优惠券.png" />
      <p>暂时没有优惠券…</p>
    </div>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import couponsGroup from './coupons'
export default {
  components: {
    tabGroup: tabGroup,
    couponsGroup: couponsGroup
  },
  data () {
    return {
      title: '我的优惠券',
      myCouponList: [],
      a: true
    }
  },
  props: {},
  mounted () {
    this.getmyCouponList()
  },
  methods: {
    getback () {
      history.go(-1)
    },
    getmyCouponList () {
      this.$http
        .get('ferrobag-server/coupon/myCouponList', {
          params: { userId: 1, pageNum: 1, pageSize: 4 }
        })
        .then(res => {
          this.myCouponList = res.data.data
        })
    }
  }
}
</script>

<style lang="scss" >
.b {
  text-align: center;
  color: #d2d2d2;
  padding-top: 4rem;
  background: #ffffff;
  height: 32rem;
}
</style>