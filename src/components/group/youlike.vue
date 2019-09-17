<template>
  <div class="cai">
  <div class="icon">
   
     <x-icon type="ios-heart" size="30"></x-icon>
          <span style="position: relative;
    bottom: 0.65rem;">猜你喜欢</span>
   
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
          :cart="src"
          :c="true"
          @click.native="productDetail ()"
        ></pai-lie>
        <div style="clear:both; margin-bottom:10rem"></div>
  </div>
</template>

<script>
import paiLie from '@/components/group/goods'
export default {
  components: {
    paiLie: paiLie
  },
  data () {
    return {
      list: [
        { name: '1', img: '', cost: '1', count: 1 },
        { name: '1', img: '', cost: '2', count: 2 },
        { name: '2', img: '', cost: '3', count: 3 }
      ],
      src: require('@/assets/search/购物车.png')
    }
  },
  methods: {
    productDetail () {
      this.$router.push('/productDetail')
    }

  }
}
</script>

<style lang="scss" scoped>
  .cai {
    //width: calc(100vw - 4rem);
    padding: 0.5rem;
    margin-top:2rem;
    background-color: #F7F5F5;
    .icon {
      text-align: center;
      fill:#FF214C;
    }
    .pai {
      width: calc(50% - 1rem);
      height: 13rem;
      margin:0.5rem ;
    }
    
  }


</style>
