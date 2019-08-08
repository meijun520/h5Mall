<template>
  <div style=" background-color:#F7F5F5; height:100vh">
    <div class="white">
      <div class="red">
        <img src="./形状.png" style="margin-top:20.7rem; margin-left:26rem;" />
      </div>
    </div>
    <div style>
      <search-for
        @click.native="tosearch()"
        :neir="neir"
        style="position: absolute;
    top: 1rem "
      ></search-for>
    </div>

    <div class="home-index">
      <div>
        <swiper
          loop
          auto
          :list="demo06_list"
          :index="demo06_index"
          @on-index-change="demo06_onIndexChange"
        ></swiper>
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
              @click.native="pindetial()"
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
      <div style="margin-top:1rem">
        人气TOP榜
        <img src alt />
      </div>
      <div class="div4">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3" v-for="(item,key) in list1" :key="key">
            <pai-lie :title="item.name" :imgurl="item.img" :cost="item.cost"></pai-lie>
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
        <img src alt />
        <img src alt />
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3" v-for="(item,key) in list1" :key="key">
            <pai-lie :title="item.name" :imgurl="item.img" :cost="item.cost"></pai-lie>
          </flexbox-item>
        </flexbox>
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3" v-for="(item,key) in list1" :key="key">
            <pai-lie :title="item.name" :imgurl="item.img" :cost="item.cost"></pai-lie>
          </flexbox-item>
        </flexbox>
        <x-button type="warn">开通会员</x-button>
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
            <x-button mini type="warn" style="float:right">马上抢</x-button>
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
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
  },
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
  },
  {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg',
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
        { name: '1', img: '', cost: '1' },
        { name: '1', img: '', cost: '2' }
      ],
      list1: [
        { name: '1', img: '', cost: '1' },
        { name: '1', img: '', cost: '2' },
        { name: '1', img: '', cost: '3' }
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
    pindetial () {
      this.$router.push('/pindetial')
    },
    topingou () {
      this.$router.push('./pintuan')
    },
    toxsqiangou () {
      this.$router.push('./xsqiangou')
    },
    tosearch () {
      this.$router.push('./searchfor')
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
.white {
  margin-top: -21rem;
  .red {
    background-image: linear-gradient(to bottom, #ff718d, #ff254f);

    height: 32rem;
    width: 32rem;
    border-radius: 32rem;
    position: absolute;
    margin-left: 50vw;
    left: -16rem;
    margin-top: 2rem;
  }
}
.home-index {
  padding: 0.75rem;
  overflow-y: auto;
  overflow: auto;
  margin-top: -12rem;
  padding-top: 25.5rem;
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
      width: calc(50% - 1.8rem);
      border: 0.1rem solid #ececec;
      margin: 0 0.8rem;
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
  }
  .div6 {
    .qiang {
      float: left;
      margin: 1rem;
    }
    .active {
      color: #ff2953;
      .border {
        border: 0.1rem solid #ff2953;
        width: 1rem;
        margin-left: 1rem;
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
}
</style>
