<template>
  <div class="becomemar">
    <tabGroup :title="title"></tabGroup>
    <div class="text">
      <span>
企业名称
      </span>
      <span class="fr">
请输入企业名称
      </span>
    </div>
       <div class="text">
      <span>
企业名称
      </span>
      <span class="fr">
请输入企业名称
      </span>
    </div>
       <div class="text">
      <span>
身份证号
      </span>
      <span class="fr">
请输入 身份证号
      </span>
    </div>
    <div class="pc"> 
      <p>营业执照副本照片</p>
     <div class="zf" style="float:left">
    <img src="./营业执照副本照片.png" >
     </div>
      <div class="zf" style="float:right">
      <span>
        <img src="./加.png" style="margin-top:1rem">
        <div style=" color:#999999">
上传照片
        </div>
        
      </span>
     </div>
   <div style="    float: left;
    margin: 0.5rem 2rem; color:#999999">
     示范照片
   </div>
    </div>
      <div class="pc"> 
      <p>法人身份证正反面照片</p>
     <div class="zf" style="float:left">
        <span>
        <img src="./加.png" style="margin-top:1rem">
        <div style=" color:#999999">
上传正面图片
        </div>
        
      </span>
     </div>
      <div class="zf" style="float:right">
        <span>
        <img src="./加.png" style="margin-top:1rem">
        <div style=" color:#999999">
上传反面图片
        </div>
        
      </span>
     </div>
    </div>
    
  <button class="button" >退出当前账户</button>  
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
      title: '成为商家'

    }
  },
  props: {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="scss" >
.becomemar {
   background: #FFFFFF;
  .text{
    line-height: 3rem;
    padding: 0.875rem;
  border:0.0125rem solid #F1F1F1;
  background: #FFFFFF;
    .fr{
      margin-left: 2.6rem;
      color: #999999;
    }
  }
  .pc{
    background: #FFFFFF;
    padding: 1rem;
    height: 14rem;
    .zf{
    width: 9.5rem;
    height: 9rem;
    background-color: #F9F9F9;
   margin: 1rem 0 0 0;
   text-align: center;
  }
  }
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
    margin:1rem;
  }
  
}
</style>