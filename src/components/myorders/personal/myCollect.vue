<template>
  <div class="mycollect">
    <tabGroup :title="title" :ab="ab" @toother="to()"></tabGroup>
      <detial-list
          v-for="(item,key) in list1"
          :key="key"
          :title="item.productName"
          :imgurl="item.productIcon"
          :cost="item.salePrice"
          :count="item.number"
          :check="item.activated"
          :attribute="item.deleted"
          @countChange="a=>{item.count=a}"
          @checkChange="a=>{item.activated=a}"
        ></detial-list>
  

    
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import detialList from '@/components/cart/detial'
export default {
  components: {
    detialList: detialList,
    tabGroup: tabGroup

  },
  data () {
    return {
      list1: [
        { name: '1',
          img: '',
          cost: 1,
          count: 2,
          check: false,
          attribute: 'ok'},
        { name: '1',
          img: '',
          cost: 2,
          count: 5,
          check: false,
          attribute: 'ok'}
      ],
      title: '我的收藏',
      ab: '管理'
    }
  },
  props: {},
  computed: {

  },
  methods: {
    to () {
      this.ab = '完成'
    }

  }
}
</script>

<style lang="scss" >
.mycollect{

}

</style>