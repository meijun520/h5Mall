<template>
  <div class="div">
    <div class=" word">
      <span>{{title1}}</span>
      <div style="float:right; color:#FF214C;">{{title2}}</div>
    </div>
    <div class="div2" @click="orderdetial()">
      <div>
        <img :src="yp()" style="float:left" />
      </div>
      <div class="des">
        <div>
          商品介绍
          <div class="jies">¥</div>
        </div>

        <div class="sx">
          粉红色
          <div class="shul">数量</div>
        </div>

        <div class="border">包邮</div>
      </div>
         <div class="div3 word">共1件商品 合计：¥346</div>
         <div class="border">

         </div>
    </div>
 
    <div class="div4" style="float:right" v-if="buy">
      <x-button mini @click.native="tologistics()">查看物流</x-button>
      <x-button mini type="warn">去付款</x-button>
      <x-button mini type="warn" @click.native="toassess()">去评价</x-button>
    </div>
    <div></div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  },
  data () {
    return {}
  },
  props: {
    title1: {
      type: String,
      required: false,
      defalut: false
    },
    title2: {
      type: String,
      required: false,
      defalut: false
    },
    buy: {
      type: Boolean,
      required: false,
      defalut: true
    }
  },
  methods: {
    yp () {
      // return require('./1.png')
    },
    toassess () {
      this.$router.push('/assess')
    },
    orderdetial () {
      this.$router.push('/orderdetial')
    },
    tologistics () {
      this.$router.push('/logistics')
    }
  }
}
</script>

<style lang="scss" scoped>
.div {
  .word {
    font-size: 0.75rem;
  }
  .sx {
    color: #999999;
    font-size: 0.6875rem;
  }
  padding: 1rem;
  height: 14rem;

  background-color: white;
  .div2 {
    margin-top: 0.5rem;
    border-top:0.0625rem solid #F1F1F1;
   
    img {
      width: 5rem;
    }
    .des {
      .jies {
        float: right;
      }
      .shul {
        float: right;
      }
      .border {
        height: 0.875rem;
        border-radius: 0.125rem;
        border: 0.0625rem solid rgba(255, 91, 122, 1);
        width: 1.56rem;
        font-size: 0.56rem;
        color: rgba(255, 33, 76, 1);
        line-height: 0.81rem;
      }
    }
    .div3 {
    margin-top: 0.5rem;
    padding-right: 0rem;
    float: right;
  }
  .border{
      border-top:0.0625rem solid #F1F1F1;
      margin-top: 2rem;
  }
  }
  
  .div4 {
    .weui-btn_mini {
      font-size: 0.75rem;
      line-height: 1.06rem;
      width: 5rem;
      height: 1.75rem;
      border-radius: 0.93rem;
    }
  }
}
</style>