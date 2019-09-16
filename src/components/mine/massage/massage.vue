<template>
  <div class="massage">
    <tabGroup :title="title"></tabGroup>
    <div class="div1">
      <img src="./massage1.png" style="float:left; margin-right:1.5rem;"/>
      <badge text="123"></badge>
      <div class="">
        <p>系统消息</p>
        <p style="color:#999999;font-size:0.75rem">今日大促，快来查看！</p>
      </div>

      <img src="./to.png"  class="fr"/>
    </div>
     <div class="div1" style="margin-top:0.085rem;">
      <img src="./massage2.png" style="float:left; margin-right:1.5rem;"/>
      <badge text="123"></badge>
      <div class="">
        <p>交易信息</p>
        <p style="color:#999999;font-size:0.75rem">您的商品已发货，去看看把…</p>
      </div>

      <img src="./to.png"  class="fr"/>
    </div>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Group, Cell, Badge } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    Group,
    Cell,
    Badge
  },
  data () {
    return {
      title: '消息'
    }
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" >
.massage {
  .div1 {
    padding: 0.875rem 1.56rem;
background:rgba(255,255,255,1);
border-radius:0.25rem;
margin-top: 0.625rem;
.fr{
  float: right;
  margin-top: -1.8rem;
}
  }
.vux-badge{
  background:#FF214C;
  position: absolute;
  left:3.5rem;

}
}
</style>