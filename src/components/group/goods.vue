<template>
  <div class="bc">
    <div>
      <div class="img">
        <img :src="imgurl" />
      </div>
      <div class="ms">
        <span class="word1">{{title}}</span>
        <div style="color: #DA0217;">
          ¥{{cost}}
          <span style="text-decoration:line-through" class="word" v-if="a">¥{{cost1}}</span>
          <span class="word" v-else>已售23件</span>
          <div class="fr">
            <span class="word" v-show="b">余3件</span>
            <img :src="cart" v-show="c" >
          </div>
        </div>
      </div>
      <button @click="addcart()" v-show="shop">
        <img :src="che" />&nbsp;去进货
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
      default: ''
    },
    cost1: {
      type: Number,
      required: false,
      default: ''
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    },
    che: {
      type: String,
      required: false,
      default: ''
    },
    b: {
      type: Boolean,
      required: false,
      default: false
    },
    cart: {
      type: String,
      required: false,
      default: ''
    },
    c: {
      type: Boolean,
      required: false,
      default: false
    },
    a: {
      type: Boolean,
      required: false,
      default: true
    },
    shop: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      item: true
    }
  },
  methods: {
    addcart () {
      this.$emit('add')
    }
  }
}
</script>

<style lang="scss" scoped>
.bc {
  background-color: white;
  .ms {
    padding: 0.375rem 0.875rem;
  }
  .word {
    color: #999999;
    font-size: 0.75rem;
  }
  .word1{
      font-size: 0.81rem;
  }
  .fr {
    float: right;
  }
  button {
    width: 5.93rem;
    height: 1.75rem;
    background: linear-gradient(
      225deg,
      rgba(255, 33, 76, 1) 0%,
      rgba(255, 79, 113, 1) 100%
    );
    border-radius: 0.9375rem;
    color: #ffffff;
    margin-left: calc(50% - 2.96rem);
    border: none;
    img {
      vertical-align: middle;
    }
  }
}
</style>