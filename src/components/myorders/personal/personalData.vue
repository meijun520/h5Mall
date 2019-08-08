<template>
  <div class="personalData">
    <div class="header-in">
      <!--<div class="left-arrow"></div>-->
      <div style="float:left; position:relative; top:2.5rem; left:0.75rem;" >    
       <x-icon type="ios-arrow-left" size="24" @click="getback()"></x-icon>
       </div>
      <p>个人信息</p>
    </div>
     <group class="group1">
       <cell title="头像" :value="hello" is-link></cell>
        <cell title="昵称" value="小屋的小屋" is-link></cell>
         <cell title="性别" value="女" is-link></cell>
     </group>
     <group class="group2">
       <cell title="更换手机号"   :link='{path:"/"}'></cell>
        <cell title="昵称"  is-link></cell>
        
     </group>
      <group class="group2">
       <cell title="社区账号绑定"  is-link></cell>
        <cell title="感兴趣类别"  is-link></cell>
        
     </group>

    
  </div>
</template>

<script>
import { Cell, Group } from 'vux'

export default {
  components: {
    Cell,
    Group

  },
  data () {
    return {
      hello: '11'
    }
  },
  props: {},
  computed: {

  },
  methods: {
    getback () {
      this.$router.push({path: '/', query: {index: this.$route.query.from}})
    }
  }
}
</script>

<style lang="scss" >
.personalData{
  .header-in {
  height: 4.93rem;
  background-color: #ffffff;
  text-align: center;

  p{
  color: #000000;
  font-size: 1rem;
  line-height: 1.375rem;
  position: relative;
  top: 2.625rem;
  left:9rem;
  width: 7rem
  }
}
.group1{
.weui-cells{
  margin: 0rem;
}
}



}

</style>