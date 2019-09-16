<template>
  <div class="set">
    <tabGroup :title="title"></tabGroup>
    <group >
       <cell title="清除缓存" :link="{path:'/demo'}" ></cell>
       <cell title="问题反馈" :link="{path:'/view'}" ></cell>
    </group>
    <group >
       <cell title="关于我们" :link="{path:'/aboutus'}" ></cell>
       <cell title="隐私声明" :link="{path:'/demo'}" ></cell>
    </group>
      <group >
       <cell title="新版本检测" :link="{path:'/demo'}" ></cell>
    </group>
    <big-anniu :title="anniu"></big-anniu>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import bigAnniu from '@/components/group/biganniu'
import { Cell, Group } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    Cell,
    Group,
    bigAnniu: bigAnniu
  },
  data () {
    return {
      title: '设置',
      anniu: '退出当前账户'

    }
  },
  props: {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="scss" >

</style>