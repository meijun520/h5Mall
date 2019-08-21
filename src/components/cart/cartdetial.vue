<template>
  <div class="cart">
    <div class="header">
      购物车
      <p style="float:right" @click="bianji()">{{bian}}</p>
    </div>
    <div v-if="a">

   
    <div class="start">
     
限时优惠
 <img src="./header.png" style="float:right; margin-top: 0.6rem;">
      
     
    </div>
    <div class="cartdetial">
      <detial-list
        v-for="(item,key) in list1"
        :key="key"
        :title="item.productName"
        :imgurl="item.productIcon"
        :cost="item.salePrice"
        :count="item.number"
        :check="item.activated"
        :attribute="item.deleted"
        @countChange="a=>{item.count=a}"
        @checkChange="a=>{item.activated=a}"
      ></detial-list>
      <!-- <div class="cai">
        <div class="icon">
          <span>猜你喜欢</span>
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
        ></pai-lie>
        <div style="clear:both; margin-bottom:10rem"></div>
      </div> -->
      <you-like></you-like>
      <div class="div3" v-if='change'>
          <check-icon :value.sync="allcheck" class="icon" @click.native="quanxuan" @icon-success-color="color"></check-icon>
          <span>全选</span>
        <div class="jiesuan">
            总计：¥{{zongji}}
           <x-button mini type="warn" @click.native="todingdan()">去结算({{shul}})</x-button>
        </div>
      </div>
         <div class="div3" v-else>
          <check-icon :value.sync="allcheck" class="icon" @click.native="quanxuan"></check-icon>
          <span>全选</span>
        <div class="jiesuan">
           <x-button mini type="warn" @click.native="shanchu()">删除({{shul}})</x-button>
        </div>
      </div>
    </div>
     </div>
      <div v-else class="b">
       <img src="./车2.png" >
       <p>
        购物车空空如也…
       </p>

     </div>
  </div>
</template>

<script>
import paiLie from '@/components/goods'
import detialList from './detiallist'
import { Flexbox, FlexboxItem, CheckIcon, XButton } from 'vux'
import youLike from '@/components/group/youlike'
// import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    paiLie: paiLie,
    detialList: detialList,
    Flexbox,
    FlexboxItem,
    CheckIcon,
    XButton,
    youLike: youLike
  },
  data () {
    return {
      // list1: [
      //   { name: '1',
      //     img: '',
      //     cost: 1,
      //     count: 2,
      //     check: false,
      //     attribute: 'ok'},
      //   { name: '1',
      //     img: '',
      //     cost: 2,
      //     count: 5,
      //     check: false,
      //     attribute: 'ok'}
      // ],
      list1: [],
      allcheck: false,
      bian: '编辑',
      change: true,
      src: require('./购物车.png'),
      color: '#FF214C',
      a: true
    }
  },
  methods: {
    quanxuan () {
      if (this.allcheck === false) {
        for (let a = 0; a < this.list1.length; a++) {
          this.list1[a].activated = false
        }
      } else {
        for (let a = 0; a < this.list1.length; a++) {
          this.list1[a].activated = true
        }
      }
    },
    bianji () {
      if (this.change === true) {
        this.bian = '完成'
        this.change = false
      } else {
        this.bian = '编辑'
        this.change = true
      }
    },
    shanchu () {
      this.$http.post('').then(res => {

      })
    },
    todingdan () {
      this.$router.push('./dingdan')
    },
    getcartlist () {
      this.$http.get('ferrobag-server/shoppingCart/getShoppingCartList', {params: {userId: 258}}).then(res => {
        this.list1 = res.data.data
      })
    }
  },
  computed: {
    zongji () {
      let aa = 0
      for (let a = 0; a < this.list1.length; a++) {
        if (this.list1[a].activated === true) {
          aa += this.list1[a].salePrice * this.list1[a].number
        }
      }
      return aa
    },
    shul () {
      let ab = 0
      for (let a = 0; a < this.list1.length; a++) {
        if (this.list1[a].activated === true) {
          ab++
        }
      }
      return ab
    }
    // ...mapGetters(['list1']),
    // ...mapActions(['todingdan()'])
  },
  mounted () {
    this.getcartlist()
  }
}
</script>

<style  lang="scss" >
.vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before {
  color: #FF214C!important;
}
* {
  touch-action: pan-y;
}
  .weui-btn_warn{
    background-image: linear-gradient(to right, #FF214C, #FF4F71);
   border-radius: 1.125rem;
  }
.header {
  text-align: center;
  padding: 1rem;
  border-bottom: 0.05rem solid #F7F5F5;
}
.start {
  padding:0 1rem;
  color: #FF214C;
  background-color: #FFDAE1;
  height: 2rem;
  line-height: 2rem;
}
.cartdetial {
  background-color: #F7F5F5;
  padding-top: 0.75rem;
  .vux-x-icon {
    fill: #f70968;
  }
  // .cai {
  //   //width: calc(100vw - 4rem);

  //   background-color: #ececec;
  //   .icon {
  //     text-align: center;
  //   }
  //   .pai {
  //     width: calc(50% - 2rem);
  //     margin: 0.5rem 1rem;
  //     height: 13rem;
  //   }
  // }
  .div3{

  line-height: 4rem;
  height: 4rem;
  position: fixed;
  bottom: 3rem;
  background-color:#F7F5F5;
  width: 100%;
   .jiesuan {  
   float: right;
margin-right:1rem;
   }
  
  }
}
  .b{
    text-align: center;
    color: #D2D2D2;
    padding-top:4rem;
  }
</style>
