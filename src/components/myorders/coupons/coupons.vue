<template>
  <div class="coupons">
     <tabGroup :title="title" :ab="ab" @toother="coupons"></tabGroup>
     <div v-if="a">

     </div>
     <div v-else class="b">
       <img src="./优惠券.png" >
       <p>
         暂时没有优惠券…
       </p>

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
      title: '我的优惠券',
      a: false

    }
  },
  props: {},
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" >
.coupons {
  height: 100vh;
  background-color:#FFFFFF;
  .b{
    text-align: center;
    color: #D2D2D2;
    padding-top:4rem;
  }
 
}
</style>