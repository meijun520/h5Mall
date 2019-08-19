<template>
  <div class="div">
    <div class="div1">
      <span>官方旗舰店</span>
      <div style="float:right">xxxxx</div>
    </div>
    <div class="div2" @click="orderdetial()">
      <div>
        <img :src="yp()" style="float:left" />
      </div>
      <div class="des">
        <div>
          <div>
            商品介绍
            <div class="jies">¥</div>
          </div>
        </div>
        <div>
          <div>
            商品分类
            <div class="shul">数量</div>
          </div>
        </div>
        <div>满99元，享包邮</div>
      </div>
    </div>
    <div class="div3">商品，总价格详情</div>
    <div class="div4" style="float:right">
      <x-button mini  @click.native="tologistics()">查看物流</x-button>
      <x-button mini type="warn">去付款</x-button>
      <x-button mini type="warn" @click.native="toassess()" >去评价</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  },
  props: {},
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
  padding: 1rem;
  height: 14rem;

  background-color: white;
  .div2 {
    margin-top: 0.5rem;
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
    }
  }
  .div3 {
    margin-top: 2rem;
    padding-right: 0rem;
  }
  .div4 {
    .weui-btn_mini{
      font-size: 0.75rem;
      line-height: 1.06rem;
      width: 5rem;
      height: 1.75rem;
      border-radius: 0.93rem;
    
    }
  }
}
</style>