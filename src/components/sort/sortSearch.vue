<template>
  <div class="sortSearch">
    <div class="header">
      <img src="@/assets/sort/返回.png" class="fl img" @click="back()" />
      <search-for :neir="neir" @click.native="tosearch()"></search-for>
    </div>
    <div class="header-tab">
      <div class="part1 fl" v-for="(item,key) in headerList" :key="key" @click="showborder(key)">
        <span>{{item.title}}</span>
        <img :src="item.icon" />
        <div class="border" v-show="show===key"></div>
      </div>
    </div>
    <div class="all" v-show="show===0">
      <div class="quan">
        <p>
          全部
          <img src="@/assets/sort/打勾.png" style="float:right" />
        </p>
        <div class="word">价格升序</div>
        <div class="word">价格降序</div>
      </div>
    </div>
    <pai-lie
      v-for="(item,key) in list"
      :key="key"
      style="float:left"
      :imgurl="item.img"
      :title="item.name"
      :cost="item.cost"
      :border="false"
      class="pai"
      :che="src"
      @add="addto()"
    ></pai-lie>
    <div class="choose" v-show='show===2'>
      <div class="fr">
        <p>品牌</p>
        <div>
          <button class="button" v-for="(item,key) in brandList" :key="key">{{item}}</button>
        </div>
        <p>价格范围</p>
        <input type="text" class="input" placeholder="最低价" />--
        <input type="text" class="input" placeholder="最高价"/>
        <div style="position:fixed; bottom:1.5rem; right:0.875rem">
          <button class="bl" @click="backto()">重置</button>
          <button class="br" @click="backto()">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchFor from '@/components/home/demo1/search'
import paiLie from '@/components/goods'
export default {
  data () {
    return {
      neir: '输入标题、内容搜索',
      headerList: [
        { title: '综合', icon: require('@/assets/sort/筛选.png') },
        { title: '销量', icon: '' },
        { title: '筛选', icon: require('@/assets/sort/筛选.png') }
      ],
      list: [
        { name: '1', img: '', cost: '1', count: 1 },
        { name: '1', img: '', cost: '2', count: 2 },
        { name: '2', img: '', cost: '3', count: 3 }
      ],
      src: require('@/components/group/9.png'),
      show: '',
      brandList: ['妃立宝', '妃立宝', '妃立宝', '妃立宝']
    }
  },
  components: {
    searchFor: searchFor,
    paiLie: paiLie
  },
  methods: {
    // img (a) {
    //   return require('@/assets/sort/' + a + '.png')
    // },
    tosearch () {
      this.$router.push('./searchfor')
    },
    showborder (key) {
      this.show = key
    },
    back () {
      history.go(-1)
    },
    backto () {
      this.show = ''
    }
  }
}
</script>
<style lang="scss">
.sortSearch {
  .fl {
    float: left;
  }
  .header {
    padding-top: 2.375rem;
    background: #ffffff;
    .search {
      width: 85vw;
      margin-left: 2rem;
    }
    .img {
      padding: 0.7rem;
    }
  }
  .header-tab {
    margin-top: 0.1rem;
    height: 2.5rem;
    background: #ffffff;

    .part1 {
      text-align: center;
      color: #666666;
      width: 33.3%;
      height: 2.3rem;
      line-height: 2.3rem;
      .border {
        margin: auto;
        width: 2.375rem;
        border: 0.125rem solid #fb4e62;
      }
    }
  }
  .pai {
    width: calc(50% - 0.75rem);
    height: 13rem;
    margin: 0.5rem 0 0 0.5rem;
  }
  .all {
    margin-top: 0.1rem;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    .quan {
      padding: 0.875rem;
      background: #ffffff;
      p {
        font-size: 0.875rem;
        height: 1.25rem;
        padding: 0.3rem;
        padding-right: 2rem;
      }
      .word {
        color: #666666;
        font-size: 0.875rem;
        height: 1.25rem;
        padding: 0.25rem;
      }
    }
  }
  .choose {
    position: fixed;
    top: 0rem;
    right: 0rem;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    p{
      margin-top: 2.625rem;
      color: #666666;
      font-size: 0.8125rem;
    }
    .fr {
      padding: 0rem 0.875rem;
      width: 17.5rem;
      background: #ffffff;
      float: right;
      height: 100vh;
      .button {
        width: 5.25rem;
        height: 2.375rem;
        background: rgba(246, 246, 246, 1);
        border-radius: 0.125rem;
        border: none;
        color: #666666;
        margin-right: 0.5rem;
        margin-top: 0.5rem;
      }
      .input {
        width: 118px;
        height: 30px;
        background: rgba(245, 245, 245, 1);
        border-radius: 18px;
        border: none;
        text-align: center;
        margin-top: 0.5rem;
      }
      .bl{
width:5.56rem;
height:2.125rem;
background:linear-gradient(225deg,rgba(255,135,33,1) 0%,rgba(255,167,93,1) 100%);
border-radius:6.25rem 0px 0px 6.25rem;
border: none;
color: #FFFFFF;
      }
      .br{
width:5.56rem;
height:2.125rem;
background:linear-gradient(225deg,rgba(255,33,76,1) 0%,rgba(255,79,113,1) 100%);
border-radius:0px 1.125rem 1.125rem 0px;
border: none;
color: #ffffff;
      }
    }
  }
}
</style>