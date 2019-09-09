<template>
  <div class="shopMessage">
    <group class="group1">
      <cell title="店铺头像" is-link>
        <img src="./6.png" alt />
      </cell>
      <cell title="店铺名称" value="小屋的小屋" is-link></cell>
    </group>

    <group class="group2">
      <x-switch title="自动补货" v-model="stringValue"></x-switch>
    </group>
  </div>
</template>

<script>
import { Cell, Group, XSwitch } from 'vux'
import tabGroup from '@/components/group/tab'
export default {
  components: {
    Cell,
    Group,
    tabGroup: tabGroup,
    XSwitch
  },
  data () {
    return {
      stringValue: true
    }
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" >
.shopMessage {
  .group1 {
    .weui-cells {
      margin: 0rem;
    }
  }
}
</style>