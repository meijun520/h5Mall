<template>
  <div class="mycoupons">
    <tabGroup :title="title"></tabGroup>
    <div v-if="a">
      <coupons-group
        v-for="(item,key) in myCouponList"
        :key="key"
        :amount="item.amount"
        :minPoint="item.minPoint"
        :couponType="item.couponType"
        :platform="item.platform"
        :enableTime="item.useTime"
        :b="b"
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
import couponsGroup from './coupongroup'
export default {
  components: {
    tabGroup: tabGroup,
    couponsGroup: couponsGroup
  },
  data () {
    return {
      title: '我的优惠券',
      myCouponList: [],
      a: true,
      b: false
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
        .get('ferrobag-server/receive/myCouponList', {
          params: { userId: 1, pageNum: 1, pageSize: 5 }
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