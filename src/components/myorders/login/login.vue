<template>
  <div class="login">
    <tabGroup :title="title"></tabGroup>
   
    <div class="b">
       <img src="" >
       <p>
        请在微信授权登录后放心使用妃立宝，<br/> 您的信息和数据将受到保护
       </p>

     </div>
      <big-anniu :title="anniu" :icon='img'></big-anniu>
  </div>

</template>

<script>
import tabGroup from '@/components/group/tab'
import bigAnniu from '@/components/group/biganniu'

export default {
  components: {
    tabGroup: tabGroup,
    bigAnniu: bigAnniu
  },
  data () {
    return {
      title: '登录',
      anniu: '微信授权登录',
      img: require('../img/微信.png')

    }
  },
  props: {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="scss" >
.login{
  background: #FFFFFF;
  height: 100vh;
  .b{
    text-align: center;
    color: #D2D2D2;
    padding-top:4rem;
  }
}
</style>