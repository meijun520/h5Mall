<template>
  <div class="mycollect">
     <tabGroup :title="title" :ab="ab" @toother="to()"></tabGroup>
    <div v-if="c"> 
    <detial-list
      v-for="(item,key) in list1"
      :key="key"
      :title="item.name"
      :imgurl="item.img"
      :cost="item.cost"
      :check="item.check"
      @checkChange="a=>{item.check=a}"
      :attribute="item.attribute"
      :icon-show="a"
    >
    </detial-list>
    
    <div class="div3" v-show="a">
      <check-icon :value.sync="allcheck" class="icon" @click.native="quanxuan"></check-icon>
      <span>全选</span>
      <div class="fr">
        <an-niu :title="b" @click.native="detele()"></an-niu>
      </div>
    </div>

    </div>
   
     <div v-else class="b">
      <img src="./收藏.png" />
      <p>暂时没有收藏…</p>
    </div>
      <confirm v-model="show"
      :title="tishi"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
      </confirm>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import detialList from '@/components/cart/detial'
import { CheckIcon, Confirm } from 'vux'
import anNiu from '@/components/group/anniu'

export default {
  components: {
    detialList: detialList,
    tabGroup: tabGroup,
    CheckIcon,
    anNiu: anNiu,
    Confirm
  },
  data () {
    return {
      list1: [
        { name: '1', img: '', cost: 1, check: false, attribute: 'ok' },
        { name: '1', img: '', cost: 2, check: false, attribute: 'ok' }
      ],
      title: '我的收藏',
      ab: '管理',
      a: false,
      b: '删除',
      c: true,
      allcheck: false,
      show: false,
      tishi: '是否删除该收藏？'
    }
  },
  props: {},
  computed: {},
  mounted () {
    this.getCollectList()
  },
  methods: {
    to () {
      if (this.a === true) {
        this.a = false
        this.ab = '管理'
      } else {
        this.a = true
        this.ab = '完成'
      }
    },
    quanxuan () {
      if (this.allcheck === true) {
        for (let a = 0; a < this.list1.length; a++) {
          this.list1[a].check = true
        }
      } else {
        for (let a = 0; a < this.list1.length; a++) {
          this.list1[a].check = false
        }
      }
    },
    detele () {
      this.show = true
    },
    onCancel () {
      this.show = false
    },
    onConfirm () {
      this.$http.post('ferrobag-server/collect/batchDeleteMyCollect', { userId: 216 }).then(
        res => {
          if (res.data.data === true) {
            alert('删除成功')
          } else {
            alert('失败')
          }
        }
      )
    },
    getCollectList () {
      this.$http.get('ferrobag-server/collect/getCollectList', {params: { pageNum: 1, pageSize: 10, userId: 1 }}).then(res => {
        this.collectList = res.data.data
      })
    }

  }
}
</script>

<style lang="scss" >
.mycollect {
  background: #f8f8f8;
  height: 100vh;
  .div3 {
    line-height: 4rem;
    height: 4rem;
    position: fixed;
    bottom: 0rem;
    width: 100%;
    background: #ffffff;
    .fr {
      float: right;
      margin-right: 1rem;
    }
  }
  .b {
  text-align: center;
  color: #d2d2d2;
  padding-top: 4rem;
}
}
</style>