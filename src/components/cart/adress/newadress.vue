<template>
  <div class="">
   <tabGroup :title="title" :ab='ab' @toother="keep()"></tabGroup>
    <group>
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name" v-model="this.form.userId"></x-input>
      <x-input title="电话" name="username" placeholder="输入收货人电话" v-model="this.form.addresseePhone"></x-input >
       <x-address  :title="title1" :list="addressData"  placeholder="请选择地址" ></x-address>
         <x-address   :title="title2"  :list="addressData"  placeholder="请选择街道" ></x-address>
           <x-textarea :max="20" :placeholder="title3"></x-textarea>
            <x-switch title="设为默认地址" v-model="stringValue"></x-switch>
    </group>


  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { XInput, Group, XAddress, ChinaAddressV4Data, XTextarea, XSwitch } from 'vux'
export default {
  components: {
    tabGroup: tabGroup,
    XInput,
    Group,
    XAddress,
    XTextarea,
    XSwitch

  },
  data () {
    return {
      title: '新增地址',
      title1: '地区',
      title2: '街道',
      title3: '输入详细地址',
      ab: '保存',
      addressData: ChinaAddressV4Data,
      form: {
        userId: '',
        addressee: '',
        addresseePhone: ''
      }

    }
  },
  props: {},
  computed: {

  },
  methods: {
    keep () {
      this.$http.post('ferrobag-server/address/addAddress', { userId: this.form.userId, addressee: this.form.addressee, addresseePhone: this.form.addresseePhone }).then(res => {
        this.form = {
          userId: '',
          addressee: '',
          addresseePhone: ''
        }
      })
    },
    getcitylist () {
      this.$http.get('ferrobag-server/city/getCityList').then(res => {
        this.citylist = res.data.data
      })
    }

  },
  mounted () {
    this.getcitylist()
  }
}
</script>

<style lang="scss" >