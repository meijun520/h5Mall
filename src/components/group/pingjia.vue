<template>
  <div class="pingjia">
    <tabGroup :title="title"></tabGroup>
    <button>很好用(657)</button><button>很好用(657)</button>
     <div class="div5">
        <div>
          <div>
            <img src style="width:2.25rem;height:2.25rem;" />
            <span class="word">小瓶子**渐入</span>
          </div>
          <div>大家赶紧没然后了那个女人刚发给你那两个人呢</div>
          <span class="word">2019-09-09 妃立包 5g</span>
        </div>
        <div class="border"></div>
        <div>
          <div>
            <img src style="width:2.25rem;height:2.25rem;" />
            <span class="word">小瓶子**渐入</span>
          </div>
          <div>大家赶紧没然后了那个女人刚发给你那两个人呢大家赶紧没然后了那个女人刚发给你那两个人呢</div>
            <span class="word">2019-09-09 妃立包 5g</span>
        </div>
      </div>
  
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
export default {
  components: {
    tabGroup: tabGroup

  },
  data () {
    return {
      title: '评论'
    }
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" >
.pingjia {
  background: #FFFFFF;
  button{
  width:5.625rem;
height:1.75rem;
background:rgba(255,230,235,1);
border-radius:1rem;
border: none;
font-size:0.69rem;
font-weight:400;
color:rgba(115,98,101,1);
line-height:1rem;
margin-top: 0.9375rem;
margin-left: 0.93rem;}
.div5 {
padding: 0 0.9375rem; 
      .border {
        border-bottom: 1px solid #f4f4f4;
        width: calc(100%-1.6rem);
        margin: 0.5rem 0;
      }
    }
.word{
  color: #999999;
  font-size: 0.75rem;
}


}





</style>