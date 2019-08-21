<template>
  <div class="personalData">
    <tabGroup :title="title" :ab="ab"></tabGroup>
     <group class="group1">
       <cell title="头像"  is-link>
       <img src="./6.png" alt="">
       </cell>
        <cell title="昵称" value="小屋的小屋" is-link></cell>
         <cell title="性别" value="女" is-link></cell>
     </group>
     <group class="group2">
       <cell title="更换手机号"   :link='{path:"/setphone"}'></cell>
        <cell title="修改密码"  is-link></cell>
        
     </group>
      <group class="group2">
       <cell title="社区账号绑定"  is-link></cell>
        <cell title="感兴趣类别"  is-link>
          <span class="lb">口红</span>
          <span class="lb">腮红</span>
        </cell>
        
     </group>

    
  </div>
</template>

<script>
import { Cell, Group } from 'vux'
import tabGroup from '@/components/group/tab'
export default {
  components: {
    Cell,
    Group,
    tabGroup: tabGroup

  },
  data () {
    return {
      hello: '11',
      title: '个人信息'
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
.group1{
.weui-cells{
  margin: 0rem;
}
}
.lb{
  color: #FF718D;
  background: #FFEFF2;
  width: 3rem;
  font-size:0.82rem;
  line-height: 1.625rem;
  padding:0.3rem 0.69rem;
  border-radius: 0.25rem;
}


}

</style>