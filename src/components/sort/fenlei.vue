<template>
  <div class="fenlei">
    <search-for :neir="neir"></search-for>
    <div class="div">
      <div class="fl">
        <div
          v-for="(item,key) in list"
          :key="key"
          class="fldh"
          @click="hdindex(item)"
          :class="item===shuz?'active':''"
        >{{item.typeName}}</div>
      </div>
      <div class="fl1">
        <div class="fl12">
          <img :src="getzhu()" />
        </div>
        <div class="a">分类推荐</div>
        <flexbox :gutter="0" wrap="wrap">
          <!-- 使用vux组件 -->
          <flexbox-item :span="1/3" v-for="(item,key) in shuz.childrenType" :key="key">
            <div class="flex-demo" >
                <img  :src="item.level" class="img" />
                <span class="typename">
              {{item.typeName}}
              
              </span>
            </div>
          </flexbox-item>
        </flexbox>
        <div class="a">热门品牌</div>
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3" v-for="(item,key) in shuz.typeList" :key="key">
            <div class="flex-demo">
              <img style="width:2rem;" :src="item.level" />
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider } from 'vux'
import searchFor from '@/components/home/demo1/search'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    searchFor: searchFor
  },
  data () {
    return {
      // list: [
      //   {
      //     typeName: '洗涤',
      //     typeIcon: 'xxx',
      //     typeList: [
      //       { typeName: '纸巾', typeIcon: '香水', brandIcon: '纸巾' },
      //       { typeName: '纸巾1', typeIcon: '纸巾', brandIcon: '纸巾' },
      //       { typeName: '纸巾2', typeIcon: '香水', brandIcon: '纸巾' },
      //       { typeName: '纸巾3', typeIcon: '香水', brandIcon: '纸巾' },
      //       { typeName: '纸巾4', typeIcon: '纸巾', brandIcon: '纸巾' },
      //       { typeName: '纸巾5', typeIcon: '纸巾', brandIcon: '纸巾' }
      //     ]
      //   },
      //   {
      //     typeName: '洗涤',
      //     typeIcon: ' xxx',
      //     brandIcon: '纸巾',
      //     typeList: [{ typeName: '纸巾', typeIcon: '香水', brandIcon: '纸巾' }]
      //   }
      // ],
      neir: '家用洗衣包',
      shuz: {},
      list: []
    }
  },
  mounted () {
    this.producttype()
  },
  methods: {
    hdindex (item) {
      this.shuz = item
    },
    // geticon (icon) {
    //   return require('./img/' + icon + '.png')
    // },
    getzhu () {
      return require('./img/zhu.png')
    },
    producttype () {
      this.$http.get('ferrobag-server/productType/all').then(res => {
        console.log()
        this.list = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.fenlei{
.search {
    margin-top: 1.69rem;
    width: 95vw;
}
.div {
  margin-top: 0.2rem;
  padding-right: 0.75rem;
  border-top: 0.0625rem solid #F7F5F5;
  .fl {
    width: 7.12rem;
    height: 43rem;
    background-color: #F7F5F5;
    text-align: center;
    float: left;
    div {
      height: 3rem;
      line-height: 3rem;
    }
  }
  .fl1 {
    // width: calc(100% - 9rem);

    margin-left: 7.69rem;

    .fl12 img {
      height: 7rem;
      width: 100%;
      padding-top: 0.5rem;
    }
  }
  .active {
    background-color: white;
    color: #FF214C;
    border-left: 0.3rem solid #FF214C;
  }        
  .flex-demo{
    width: 4.75rem;
    /* margin: 0 auto; */
    text-align: center;
  }
  .img{
      height: 4.5rem;
      width: 4.75rem;
    }
    .typename{
      font-size: 0.75rem;
      color: #666666;
   
    }
}
}

</style>