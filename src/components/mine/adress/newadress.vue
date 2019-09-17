<template>
  <div class="newadress">
    <tabGroup :title="$route.path==='/editAddress'?'编辑地址':'新增地址'"></tabGroup>
    <group>
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name" v-model="this.form.userId"></x-input>
      <x-input title="电话" name="username" placeholder="输入收货人电话" v-model="this.form.addresseePhone"></x-input >
       <x-address  :title="title1" v-model="form.address" :list="addressData" @on-hide="getStreet"  placeholder="请选择地址" ></x-address>
         
           <x-textarea :max="20" :placeholder="title3"></x-textarea>
            <x-switch title="设为默认地址" v-model="form.stringValue"></x-switch>
    </group>


  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { XInput, Group, XAddress, XTextarea, XSwitch } from 'vux'

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

      addressData: [],
      form: {
        userId: '',
        addressee: '',
        addresseePhone: '',
        address: [],
        stringValue: false
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
        console.log(this.citylist)
        this.citylist.forEach(item => {
          item.value = item.code
          item.parent = item.parentCode
        })
        this.addressData = this.citylist
      })
    },
    getStreet () {
      this.$http.get('ferrobag-server/city/getCityList', {params: {
        parentCode: this.form.address[2],
        level: 4
      }}).then(res => {
        console.log(res)
      })
    }

  },
  mounted () {
    this.getcitylist()
  }
}
</script>

<style lang="scss" >
</style>