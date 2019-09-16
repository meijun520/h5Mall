<template>
  <div class="faq">
    <tabGroup :title="title"></tabGroup>
   <group>
      <cell
      :title="title1"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004"></cell>

      <p class="slide" v-if="showContent004">A：妃立宝™品牌隶属厦门金童半导体有限公司,旗下拥 有个人洗护,衣服洗护和家居洗护三大系列产品。 妃立宝在国内率先通过先进材料开发实现无泡洗涤 技术,和传统洗衣剂</p>
   </group>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Group, Cell, CellBox } from 'vux'

export default {
  components: {
    tabGroup: tabGroup,
    Group,
    Cell,
    CellBox
  },
  data () {
    return {
      title: '常见问题',
      title1: 'Q：妃立宝是干嘛的？',
      showContent004: false,
      a: true
    }
  },
  props: {},
  computed: {},
  methods: {
  }
}
</script>

<style lang="scss" >
.faq {
.slide{
    padding: 0.75rem;
font-size:0.875rem;
color:rgba(153,153,153,1);
line-height:1.56rem;
  }
}
</style>