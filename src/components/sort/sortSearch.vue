<template>
  <div class="sortSearch">
    <div class="header">
      <img src="@/assets/sort/返回.png" alt class="fl img" />
      <search-for :neir="neir" @click.native="tosearch()"></search-for>
    </div>
    <div class="header-tab">
      <div class="part1">
        <span>综合</span>
        <img src="@/assets/sort/筛选.png" alt="">
      </div>

    </div>
  </div>
</template>
<script>
import searchFor from '@/components/home/demo1/search'
export default {
  data () {
    return {
      neir: '输入标题、内容搜索'
    }
  },
  components: {
    searchFor: searchFor
  },
  methods: {
    tosearch () {
      this.$router.push('./searchfor')
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
    background: #FFFFFF;
    .search {
      width: 85vw;
      margin-left: 2rem;
    }
    .img{
padding: 0.7rem;
    }
  }
  .header-tab{
    height: 2.5rem;
    ba
    .part1{
      text-align: center;
      width:33.3%
    }
  }
}
</style>