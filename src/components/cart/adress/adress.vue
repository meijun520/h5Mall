<template>
  <div class="adress">
    <tabGroup :title="title"></tabGroup>
    <div v-if="adress">
      <div
        class="address1"
        :class="a===false?'active':''"
        v-for="(item,key) in adresslist"
        :key="key"
      >
        <div class="fl">
          <div>{{item.addressee}}&nbsp;&nbsp;{{item.addresseePhone}}</div>
          <div class="fr">
            <span class="moren">默认</span>
            <span style="color:#666666; font-size:0.8rem">{{item.address}}</span>
          </div>
        </div>

        <span class="bianji" @click="bianji(key)">编辑</span>
        <div class="bianji" v-show="a===key">
          <div class="blue" @click="tochangeadress(item)">编辑</div>
          <div class="red">删除</div>
        </div>
      </div>
    </div>
    <div v-else class="wu">
      <img src="./无地址.png" />
      <p>您还没添加收货地址…</p>
    </div>
    <button class="button" @click="newchange()">新增收货地址</button>
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
      title: '收货地址',
      a: '',
      adress: true,
      adresslist: []
    }
  },
  props: {},
  computed: {},
  mounted () {
    this.getaddress()
  },
  methods: {
    bianji (key) {
      this.a = key
    },
    newchange () {
      this.$router.push('./newadress')
    },
    tochangeadress (item) {
      this.$router.push({path: './changeadress', query: {id: item.addressId}})
    },
    getaddress () {
      this.$http
        .get('ferrobag-server/address/getAddressList', {
          params: { userId: 4, pageNum: 2, pageSize: 2 }
        })
        .then(res => {
          this.adresslist = res.data.data
        })
    }
  }
}
</script>

<style lang="scss" >
.adress {
  height: 100vh;
  background-color: #ffffff;
  .address1 {
    background: #ffffff;
    padding: 0.85rem;
    height: 4.68rem;
    .moren {
      width: 2rem;
      height: 1.25rem;
      background: rgba(255, 46, 87, 1);
      border-radius: 0.125rem;
      color: #ffffff;
      line-height: 1.25rem;
      padding: 0.25rem;
      font-size: 0.75rem;
    }
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .bianji {
      float: right;
      line-height: 4.68rem;
      text-align: center;
    }
    .blue {
      float: left;
      width: 5.2rem;
      background: #1987ff;
      color: #ffffff;
      height: 4.7rem;
      line-height: 4.7rem;
    }
    .red {
      float: right;
      width: 5.2rem;
      color: #ffffff;
      height: 4.7rem;
      background: #ff8721;
      line-height: 4.7rem;
    }
  }
  .active {
    margin-left: -5rem;
    padding: 0rem;
  }

  .button {
    width: 90%;
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
    position: fixed;
    bottom: 3rem;
    left: 1rem;
  }
  .wu {
    text-align: center;
    color: #d2d2d2;
    padding-top: 4rem;
  }
}
</style>