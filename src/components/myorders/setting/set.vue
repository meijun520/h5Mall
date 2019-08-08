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
   
    <button class="button" @click="newchange()">退出当前账户</button>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'

import { Cell, Group } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    Cell,
    Group
  },
  data () {
    return {
      title: '设置'

    }
  },
  props: {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="scss" >
.set {
    .button {
    width: 21.4rem;
    height: 3.125rem;
    background: linear-gradient(
      225deg,
      rgba(255, 33, 76, 1) 0%,
      rgba(255, 79, 113, 1) 100%
    );
    box-shadow: 0px 0.25rem 0.5rem 0px rgba(255, 175, 189, 1);
    border-radius: 2.2rem;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    position: fixed;
    bottom: 16rem;
    left: 2rem;
  }
}
</style>