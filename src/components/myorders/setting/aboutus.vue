<template>
  <div class="aboutus">
    <tabGroup :title="title"></tabGroup>
    <div class="icon">
      <img src=" " style="width:3.7rem; height:3.7rem; background:#FF214C" />
      <p>V 1.0.1</p>
    </div>
    <div class="text">
公司介绍：妃立宝洗衣袋真的蛮神奇的，这个真是今年以来我觉得最有意思也最实用的家务神奇了新科技的产品果然与众不同，价格也不贵，性价比还是很高的，嘿嘿，特此发笔记纪念一下~
    </div>
    <div class="xx">
      <span>
全国客服热线1
      </span>
      <span class="fr">
400-153-8999
      </span>
    </div>
       <div class="xx">
      <span>
全国客服热线2
      </span>
      <span class="fr">
400-153-8888
      </span>
    </div>
       <div class="xx">
      <span>
客服邮箱
      </span>
      <span class="fr">
4001538888@site.com
      </span>
    </div>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Group } from 'vux'

export default {
  components: {
    tabGroup: tabGroup,
    Group
  },
  data () {
    return {
      title: '关于我们'
    }
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" >
.aboutus {
 
  background-color:#FFFFFF;
  height: 100vh;
  .icon {
      border-top:0.0125rem solid #F1F1F1;
    text-align: center;
    padding-top: 2.8rem;
  }
  .text{
    width: 21rem;
    font-size:0.82rem;
    line-height: 1.31rem;
    margin: 1rem  2.5rem 5rem 2.5rem;

  }
  .xx{
     padding:0.875rem;
      border-bottom:0.0125rem solid #F1F1F1;
    .fr{
      float: right;
      color:#999999;
      font-size:0.875rem;
     
     
    }
  }
}
</style>