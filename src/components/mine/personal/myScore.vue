<template>
  <div class="myScore">
    <tabGroup :title="title"></tabGroup>
    <div class="part1">
      <div class="money">130</div>
      <div class="word">当前积分</div>
    </div>

    <span class="heard">积分明细</span>
    <div class="part2">
      <div>
        <div class="fl" v-if="a">登录APP</div>
        <div class="fr">
          <span class="money fr">+20</span>
          <br />
          <div class="time">2018.09.08 12:08:34</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'

export default {
  components: {
    tabGroup: tabGroup
  },
  data () {
    return {
      title: '我的积分',
      a: true
    }
  },
  props: {},
  computed: {},
  mounted () {
    this.getMyScoreList()
  },
  methods: {
    getMyScoreList () {
      this.$http.get('ferrobag-server/score/getMyScoreList', {params: {pageNum: 1, pageSize: 10, userId: 14
      }}).then(res => {
        this.myScoreList = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" >
.myScore {
  .part1 {
    text-align: center;
    height: 7rem;
    background: #ffffff;
    margin: 0.75rem;
    .money {
      font-size: 1.625rem;
      color: rgba(59, 58, 58, 1);
      line-height: 2.3rem;
      padding-top: 1.19rem;
      height: 3.125rem;
    }
    .word {
      font-size: 0.875rem;
      color: rgba(153, 153, 153, 1);
      line-height: 1.25rem;
    }
  }
  .heard {
    font-size: 0.75rem;
    color: #8f8f8f;
    margin: 0.75rem;
  }
  .part2 {
    margin: 0.125rem 0.75rem;
    height: 3.125rem;
    background: #ffffff;
    padding: 0 0.75rem;
    .fl {
      float: left;
      line-height: 3.125rem;
    }
    .fr {
      float: right;
    }
    .money {
      font-size: 0.937rem;
    }
    .time {
      font-size: 0.6875rem;
      color: #8f8f8f;
    }
  }
}
</style>