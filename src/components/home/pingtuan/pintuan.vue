<template>
  <div class="pintuan">
    <div class="header-in">
      <!--<div class="left-arrow"></div>-->
      <div style="float:left; position:relative; top:2.5rem; left:0.75rem;">
        <x-icon type="ios-arrow-left" size="24" @click="getback()"></x-icon>
      </div>
      <p>拼团商城</p>
    </div>
    <div class="dapai">
      <div>
        <span>大牌拼团</span>
        <span class="fr">
          距离结束
          <font color="#FF2B54">12:00</font>
        </span>
      </div>
      <div class="body">
        <img src style="width:6.5rem; height:6.5rem; border:1px solid red" class="fl" />
        <div>
          <p>妃立宝洗衣包青春版50g</p>
          <p style="color:#999999; font-size:0.75rem;">去污新改革 纳米洗衣宝 孕婴可用</p>
          <p class="fx">
            拼团价 ¥{{cost}}
            <span
              style="color:#999999; font-size:0.75rem; text-decoration:line-through"
            >¥22</span>
            <button @click="pintuangoods()">去拼团</button>
          </p>
        </div>
        <div class="clear"></div>
      </div>
      <div style="margin-bottom:5rem;"></div>
    </div>
  </div>
</template>
<script>
import {} from 'vux'
export default {
  data () {
    return {
      cost: 3
    }
  },
  components: {},
  methods: {
    getback () {
      history.go(-1)
    },
    pintuangoods () {
      this.$router.push('./pintuangoods')
    }
  }
}
</script>
<style lang="scss" scoped>
.pintuan {
  .header-in {
    height: 4.93rem;
    background-color: #ffffff;
    text-align: center;
    border-bottom: 0.0625rem solid #e5e5e5;
    p {
      color: #000000;
      font-size: 1rem;
      line-height: 1.375rem;
      position: relative;
      top: 2.625rem;
      left: 9rem;
      width: 7rem;
    }
  }
  .dapai {
    padding: 0.625rem;
    margin: 0.625rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .body {
      margin-top: 0.75rem;
      .fx {
        margin: 1rem;
      }
      button {
        float: right;
        width: 4.5rem;
        height: 1.875rem;
        background-image: linear-gradient(to right, #ff214c, #ff4f71);
        border-radius: 1.125rem;
        border: none;
        box-shadow: 0px 0.125rem 0.25rem 0px rgba(255, 175, 189, 1);
      }
    }
    .clear {
      clear: both;
      border: 0.0625rem solid #f4f4f4;
    }
  }
}
</style>
