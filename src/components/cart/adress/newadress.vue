<template>
  <div class="">
   <tabGroup :title="title" ></tabGroup>
    <group>
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      <x-input title="电话" name="username" placeholder="输入收货人电话" ></x-input>
       <x-address @on-hide="logHide"  :title="title1" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" :show.sync="showAddress"></x-address>
         <x-address @on-hide="logHide"  :title="title2" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择街道" :show.sync="showAddress"></x-address>
           <x-textarea :max="20" :placeholder="title3"></x-textarea>
    </group>


  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { XInput, Group, XAddress, ChinaAddressV4Data, XTextarea } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    XInput,
    Group,
    XAddress,
    XTextarea

  },
  data () {
    return {
      title: '新增地址',
      title1: '地区',
      title2: '街道',
      title3: '输入详细地址',
      addressData: ChinaAddressV4Data

    }
  },
  props: {},
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" >