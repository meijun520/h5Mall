<template>
  <div class="dingdandetial">
    <div class="hearder">官方旗舰店</div>
    <div class="border">

    </div>
    <div class="ma">
      <img src style="width:5rem;height:5rem; border:solid; float:left; margin-right:0.82rem" />
      <div>
        <div>
          <span>妃立宝洗衣包青春版50g</span>
          <span class="fr">¥346</span>
        </div>
        <div style="color:#999999; font-size:0.69rem">
          <span>粉红色</span>
          <span class="fr">×1</span>
        </div>
        <div class="baoyou">
          包邮
        </div>
      </div>
      <div>
        <div style="clear:both"></div>
        <div class="ma">
          购买数量
          <inline-x-number :min="1" ></inline-x-number>
        </div>
        <div class="ma">
          运费
          <span class="fr">
            ¥6.00 
          </span>
        </div>
        
      </div>
      <div class="fr ma" >
      
共7件商品 合计：¥346
      </div>
    </div>
  </div>
</template>

<script>
import { InlineXNumber } from 'vux'
export default {
  components: {
    InlineXNumber
  },
  data () {
    return {}
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" >
.dingdandetial {
  padding: 0.94rem;
  background: #ffffff;
  height: 17rem;
  .hearder {
    margin-bottom: 0.93rem;
  }
  .fr {
    float: right;
  }
  .baoyou{
    margin-top: 1rem;
margin-left:6rem;
width: 1.7rem;
height: 0.9rem;
font-size:0.56rem;
color:rgba(255,33,76,1);
line-height:0.82rem;
border: 0.0625rem solid #FF5B7A;
  }
  .vux-inline-x-number{
    float: right;
  }
  .ma{
    margin: 0.8rem 0;
  }
  .border{
    border:0.02rem  solid #F1F1F1;

  }
 
}
</style>