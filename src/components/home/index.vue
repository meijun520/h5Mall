<template>
  <div  class="home">
    <div>
    </div>
    <div class="shous">
      <search-for
        @click.native="tosearch()"
        :neir="neir"
        style="float:left;margin-top: 1.75rem;margin-left:0.5rem;"
      ></search-for>
          <img src="./形状.png" style="margin-top: 2.25rem;
    margin-left: 0.7rem;" />
    </div>
  

    <div class="home-index">
      <div>
        <swiper :list="demo06_list" auto style="width:100%;margin:0 auto;" height="180px"  dots-position="center" @click.native="goodsneir ()"></swiper>
      </div>
      <div class="div1">
        <div class="item-head">
          <span>洗涤产品</span>
          <p class="right">
            查看更多
            <img :src="moreicon" />
          </p>
        </div>
        <pai-lie
          class="xidi"
          v-for="(item,key) in list"
          :key="key"
          :title="item.name"
          :imgurl="item.img"
          :cost="item.cost"
          style="float:left"
          @click.native="goodsneir ()"
        ></pai-lie>
        <div style="clear:both;"></div>
      </div>
      <div class="div2">
        <div class="item-head">
          <span>团团赚</span>
          <p class="right" @click="topingou()">
            查看更多
            <img :src="moreicon" />
          </p>
        </div>
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3" v-for="(item,key) in list1" :key="key">
            <pai-lie
              :title="item.name"
              :imgurl="item.img"
              :cost="item.cost"
              @click.native="pintuangoods()"
            ></pai-lie>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="div3">
        <span>为什么选择妃立宝</span>
        <flexbox :gutter="0" wrap="wrap" style="margin:1.5rem;">
          <flexbox-item :span="1/3" v-for="(imgName, key) in listicon" :key="key">
            <img :src="icon(imgName.icon)" />
            <br />
            <span style="color:#DA0217; font-size:0.75rem;">{{imgName.title}}</span>
          </flexbox-item>
        </flexbox>
      </div>
      <div style="margin-top:1rem; ">
        人气TOP榜
        <div class="res" @click="goodsneir()">
<img src='./picture/位图(1).png' style="width: calc(100vw - 1.5rem);"/>
        <img src='./picture/第一.png' class="abs">
        </div>
        
      </div>
      <div class="div4">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3" v-for="(item,key) in list1" :key="key" class="res">
            <pai-lie :title="item.name" :imgurl="item.img" :cost="item.cost"
            @click.native="goodsneir ()"></pai-lie>
             <img :src="item.img1" class="abs">
          </flexbox-item>
        </flexbox>
      </div>
      <div class="div5">
        <div class="item-head">
          <span>会员专区</span>
          <p class="right">
            查看全部
            <img :src="moreicon" />
          </p>
        </div>
       <div class="youhui">
         <div style="float:left">
         <div class="span">
           大额优惠劵
         </div>
         <div>
 <button class="button">
           限时抢
         </button>
         </div>
        
         </div>
         <img src="" class="img">
      
       </div>
         <div class="youhui1">
         <div style="float:left">
         <div class="span">
           大额优惠劵
         </div>
         <div>
 <button class="button">
           限时抢
         </button>
         </div>
        
         </div>
         <img src="" class="img">
  
       </div>
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3" v-for="(item,key) in list1" :key="key">
            <pai-lie :title="item.name" :imgurl="item.img" :cost="item.cost"
            @click.native="goodsneir ()"></pai-lie>
          </flexbox-item>
        </flexbox>
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3" v-for="(item,key) in list1" :key="key" >
            <pai-lie :title="item.name" :imgurl="item.img" :cost="item.cost"
            @click.native="goodsneir ()"></pai-lie>
          </flexbox-item>
        </flexbox>
        <x-button type="warn" @click.native="huiyuan()">开通会员</x-button>
      </div>
      <div class="div6">
        <p @click="toxsqiangou()">限时抢购</p>
        <div
          v-for="(item,key) in list2"
          :key="key"
          class="qiang"
          @click="hdindex(item)"
          :class="item===shu?'active ':''"
        >
          {{item.time}}
          <br />
          {{item.title}}
          <div :class="item===shu?'border':''"></div>
        </div>
      </div>
      <div class="div7">
        <div style="width:59rem; height:10rem">
          <img src alt />
        </div>
        <div>
          <p>妃立宝洗衣包青春版50g</p>
          <p style="color:#999999; font-size:0.75rem">去污新改革 纳米洗衣宝 孕婴可用</p>
          <p style="color:#999999; font-size:0.69rem;">
            <x-progress :percent="percent2" :show-cancel="false"></x-progress>
            {{percent2}}%
          </p>
          <div style="clear:both"></div>
          <p>
            ¥50
            <span
              style="color:#999999; font-size:0.75rem; 
             text-decoration:line-through"
            >¥67</span>
            <x-button mini type="warn" style="float:right" @click.native="pintuangoodsneir ()">马上抢</x-button>
          </p>
        </div>
      </div>

      <div style="margin-bottom:10rem"></div>
    </div>
  </div>
</template>


<script>
import {
  Swiper,
  Flexbox,
  FlexboxItem,
  XButton,
  Tab,
  TabItem,
  XProgress
} from 'vux'
import paiLie from '@/components/goods'
import searchFor from './demo1/search'

const baseList = [
  {
    url: 'javascript:',
    img: require('./位图.png')
  },
  {
    url: 'javascript:',
    img: require('./位图.png')
  },
  {
    url: 'javascript:',
    img: require('./位图.png'),
    fallbackImg:
      'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg' // 它将在 img 加载失败时显示，注意的是 fallbackImg 可能会在 img 加载成功时也进行了加载，只是不会显示（取决于浏览器实现）
  }
]

const urlList = baseList.map((item, index) => ({
  url: item.url,
  img: item.img,
  fallbackImg: item.fallbackImg
}))
export default {
  components: {
    Swiper,
    Flexbox,
    FlexboxItem,
    paiLie: paiLie,
    XButton,
    Tab,
    TabItem,
    searchFor: searchFor,
    XProgress
  },
  props: {
    chanp: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    imgurl: {
      type: String,
      required: false,
      default: ''
    },
    cost: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      demo06_list: urlList,
      demo06_index: 0,
      showContent003: false,
      demo2: '19:00',
      neir: '输入标题，内容搜索',
      moreicon: require('./moreicon.png'),
      percent2: 20,
      list2: [
        {
          time: '19:00',
          title: '抢购中',
          picture: [1, 2, 3, 4]
        },
        {
          time: '21:00',
          title: '抢购中',
          picture: [1, 2, 3, 4]
        },
        {
          time: '23:00',
          title: '抢购中',
          picture: [1, 2, 3, 4]
        },
        {
          time: '07/12',
          title: '明日预告',
          picture: [1, 2, 3, 4]
        }
      ],
      shu: {},
      baseList: [
        {
          url: 'javascript:',
          img:
            'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
        },
        {
          url: 'javascript:',
          img:
            'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg',
          fallbackImg:
            'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg' // 它将在 img 加载失败时显示，注意的是 fallbackImg 可能会在 img 加载成功时也进行了加载，只是不会显示（取决于浏览器实现）
        }
      ],
      list: [
        { name: '1', img: require('./picture/xidi.png'), cost: '1' },
        { name: '1', img: require('./picture/xidi.png'), cost: '2' }
      ],
      list1: [
        { name: '1', img: require('./picture/xidi.png'), cost: '1', img1: require('./picture/第二.png') },
        { name: '1', img: require('./picture/xidi.png'), cost: '2', img1: require('./picture/第三.png') },
        { name: '1', img: require('./picture/xidi.png'), cost: '3', img1: '' }
      ],
      listicon: [
        { title: '安全健康', icon: '安全' },
        { title: '品质保证', icon: '品质' },
        { title: '价格亲民', icon: '价格' }
      ]
    }
  },
  computed: {},
  methods: {
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
    hdindex (item) {
      this.shu = item
    },
    icon (a) {
      return require('./demo1/icon/' + a + '.png')
    },
    // pindetial () {
    //   this.$router.push('/pindetial')
    // },
    topingou () {
      this.$router.push('./pintuan')
    },
    pintuangoods () {
      this.$router.push('./pintuangoods')
    },
    toxsqiangou () {
      this.$router.push('./xsqiangou')
    },
    tosearch () {
      this.$router.push('./searchfor')
    },
    goodsneir () {
      this.$router.push('./goodsneir')
    },
    pintuangoodsneir () {
      this.$router.push('./pintuangoodsneir')
    },
    huiyuan () {
      this.$router.push('./addhui')
    }

    // picture (key) {
    //   return require('@/assets/home/皇冠' + key + '.png')
    // },
    // dianji () {
    //   if (this.showContent003 === false) {
    //     this.showContent003 = true
    //   } else {
    //     this.showContent003 = false
    //   }
    // }
  }
}
</script>

<style  lang="scss" >
.home{
  background-color: #F7F5F5;
  .shous{
      background: url(../../assets/home/形状结合.png) no-repeat center;
      width: 100vw;
      height: 10.6rem;
  }
.home-index {
  padding: 0.75rem;
  // overflow-y: auto;
  // overflow: auto;
  margin-top: -6.25rem;
  // padding-top: 25.5rem;
  .right {
    float: right;
    color: #999990;
    font-size: 0.69rem;
  }
  .item-head {
    height: 3rem;
    line-height: 3rem;
    padding: 0 0.8rem;
  }
  .div1 {
    background-color: white;
    margin-top: 1rem;
    .xidi {
      width: calc(50% - 1.2rem);
      border: 0.0625rem solid #ececec;
      margin-left:0.8rem;
      height: 10.6rem;
     .img img{
            height: 6.6rem;
    width: 9.2rem;
      }
    }
   
  }
  .div2 {
    background-color: white;
    margin-top: 1rem;
  }
  .div3 {
    text-align: center;
    margin-top: 1rem;
    background-color: white;
    padding: 1rem 2.5rem;
  }
  .div5 {
    background-color: white;
    margin: 1rem 0;
    padding-bottom: 1rem;
    button.weui-btn,
    input.weui-btn {
      width: 50%;
    }
    .youhui{
      height:5.3rem;
      width: calc(50% - 2rem);
      background: #F3F1EB;
      border-radius: 0.3rem;
      margin-left: 0.75rem;
      padding: 0.5rem;
      float: left;
      .span{
        color: #F49900;
        font-size: 0.812rem;
      }
      .img{
        margin-left:0.5rem;
        float: right;
           height:4.3rem;
        width: 3.4rem;
      }
      .button{
        background: #FFA611;
        width: 3.8rem;
        height: 1.75rem;
        border: none;
        color: #FFFFFF;
        border-radius: 1rem;
        margin-top:0.5rem;
      }
    }
     .youhui1{
      height:5.3rem;
      width: calc(50% - 2rem);
      background: #FFDFDF;
      border-radius: 0.3rem;
      margin-right: 0.75rem;
      padding: 0.5rem;
      float: right;
       .span{
        color: #F66565;
        font-size: 0.812rem;
      }
      .img{
        margin-left:0.5rem;
        float: right;
        height:4.3rem;
        width: 3.4rem;
      }
        .button{
        background: #F66565;
        width: 3.8rem;
        height: 1.75rem;
        border: none;
        color: #FFFFFF;
        border-radius: 1rem;
        margin-top:0.5rem;

      }
    }
  }
  .div6 {
    .qiang {
      float: left;
     width: calc(100%/4);
     text-align: center;
    }
    .active {
      color: #ff2953;
      .border {
        border: 0.1rem solid #ff2953;
          width: calc(100%/4);
        margin: auto;
      }
    }
  }
  .div7 {
    .weui-progress {
      width: 5.9rem;
      float: left;
      margin: 0.5rem 0rem;
    }
    .weui-progress__bar {
      height: 0.375rem;
    }
    .weui-progress__inner-bar {
      background-color: #ff4569;
    }
  }
  .weui-btn_warn {
    background-image: linear-gradient(to right, #ff214c, #ff4f71);
    border-radius: 1.125rem;
  }
  .res{
    position: relative;
    
    .abs{
      position:absolute;
      left: 0rem;
      top:0rem
    }
  }
  
}
}

</style>
