<template>
  <div class="pintuangoods">
    <tabGroup :title="title" :icon="src"></tabGroup>
    <swiper
      :list="demo02_list"
      style="width:85%;margin:0 auto;"
      :aspect-ratio="800/800"
      dots-position="center"
    ></swiper>
    <div class="div">
      <div class="div1">
        <span>拼团价 ¥340.00</span>
        <span style="color:#FFCDD6">单买价 ¥540.00</span>
        <span style="float:right">已拼450件</span>
      </div>
      <div class="div2">
        <p>妃立宝洗衣包青春版50g</p>
        <div class="fr">
          <img src="./分享.png" />
          <p class="word">分享</p>
        </div>

        <div class="word">
          去污新改革 纳米洗衣宝 孕婴可用，去污新改革
          <br />纳米洗衣宝 孕婴可用
        </div>
        <div>
          <span style="color:#DA0217">拼团价¥50</span>

          <span class="word" style="text-decoration:line-through">¥67</span>
        </div>
      </div>
      <div class="div3">
        <div class="item-head">
          <span>拼团玩法</span>
          <p class="fr word">
            详情规则
            <img :src="moreicon" />
          </p>
        </div>
        <step  background-color="white">
          <step-item title="开团/参团"></step-item>
          <step-item title="邀请好友"></step-item>
          <step-item title="满员发货，不满退款"></step-item>
        </step>
        <div style="text-align:center;">
          <span style="margin-right:1rem;">
            <img src="./打勾.png" alt />
            <span class="word">假一赔十</span>
          </span>
          <span style="margin-right:1rem;">
            <img src="./打勾.png" alt />
            <span class="word">无忧退货</span>
          </span>
          <span style="margin-right:1rem;">
            <img src="./打勾.png" alt />
            <span class="word">包邮包税</span>
          </span>
        </div>
      </div>
      <div class="div4">
        <div class="item-head">
          <span style="color:#FF1B46">【新人团】</span>
          <span class="word">以下小伙伴正在发起拼团</span>
          <p class="fr word">南通市***拼团成功</p>
        </div>

        <div class="div4a">
          <img src style="width:3rem; height:3rem; float:left" />
          <div style="float:left;margin-left:0.5rem;">
            <div>李修平</div>
            <div class="word">
              还差
              <span style="#ff486b">1</span>人，剩余00:12:65结束
            </div>
          </div>
          <button class="button">去参团</button>
        </div>
        <div class="div4a">
          <img src style="width:3rem; height:3rem; float:left" />
          <div style="float:left;margin-left:0.5rem;">
            <div>李修平</div>
            <div class="word">
              还差
              <span style="#ff486b">1</span>人，剩余00:12:65结束
            </div>
          </div>
          <button class="button">去参团</button>
        </div>
      </div>
      <div class="div5">
         <div class="item-head">
          <span >宝贝评价（456）</span>
          <p class="fr word">查看全部
            <img :src="moreicon" />
          </p>
           
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Swiper, Step, StepItem } from 'vux'
const list = [
  {
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
  },
  {
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
  },
  {
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
  },
  {
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
  }
]
export default {
  components: {
    tabGroup: tabGroup,
    Swiper,
    Step,
    StepItem
  },
  data () {
    return {
      title: '妃立宝洗衣宝青春宝',
      demo02_list: list,
      moreicon: require('./返回.png')
    }
  },
  props: {},
  computed: {
    src () {
      return require('./分享1.png')
    }
  },
  methods: {}
}
</script>

<style lang="scss" >
.pintuangoods {
  .div {
    .word {
      color: #a1a1a1;
      font-size: 0.75rem;
    }
    .fr {
      float: right;
    }
    .item-head {
      height: 3rem;
      line-height: 3rem;
      padding: 0 0.8rem;
      margin-top: 0.5rem;
    }
    .div1 {
      height: 2.125rem;
      line-height: 2.125rem;
      background: #ff486b;
      padding: 0 1rem;
      color: #ffffff;
    }
    .div2 {
      padding: 0.69rem 1.4rem 0.75rem 0.94rem;
      background-color: #ffffff;
    }
    .div3 {
      background-color: #ffffff;
      .vux-step-item-icon{
            width: 16px;
    height: 16px;
      }
      .vux-step {
        padding: 1rem 0.5rem;
        background-color: #ffffff;
        .vux-step-item-head .vux-step-item-head-inner {
          width: 1rem;
          height: 1rem;
          border-radius: 1rem;
          background: black;
          color: #ffffff;
          line-height: 1rem;
        }
      }
    }
    .div4 {
      background-color: #ffffff;
      .div4a {
        padding: 0.69rem 0 1rem 0.69rem;
        border-bottom: 1px solid #f4f4f4;

        .button {
          margin: 0.8rem 0rem 0rem 3.5rem;
          height: 1.8rem;
          width: 4.25rem;
          border: 1px solid #ff224b;
          color: #ff224b;
          border-radius: 1.125rem;
          background: #ffff;
        }
      }
    }
    .div5{
       background-color: #ffffff;
    }
  }
}
</style>