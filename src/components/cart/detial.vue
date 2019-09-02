<template>
  <div class="detial">
    <div style="float:left;">
    <check-icon :value.sync="goodCheck" class="icon" v-show="iconShow"></check-icon>
    </div>
    
    <div class="border">
      <div class="img">
        <img :src="imgurl" style="height:5rem" />
      </div>
      <div class="item-box">
        {{title}}
        <br />
        <span style="color:#999999; font-size:0.687rem">
        {{attribute}}
        </span>
        <br />
        <span style="color:#FF214C; border:0.0625rem solid #FF5B7A; font-size:0.563rem">包邮</span>
        <div>¥{{cost}}</div>
      </div>
     
    </div>
  </div>
</template>
 
<script>
import { CheckIcon } from 'vux'
export default {
  components: {
    CheckIcon
  },
  data () {
    return {
      goodCheck: false
    }
  },
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
    attribute: {
      type: String,
      required: false,
      default: ''
    },
    cost: {
      type: Number,
      default: 0
    },
    check: {
      type: Boolean,
      default: false
    },
    iconShow: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.goodCheck = this.check
  },
  watch: {
    check (newval) {
      if (this.goodCheck !== newval) {
        this.goodCheck = newval
      }
    },
    goodCheck (newval) {
      this.$emit('checkChange', newval)
    }
  },
  methods: {}
}
</script>

<style  lang="scss" >
.detial { 
  width: calc(100vw - 4rem + 0.0625rem);
  margin-left: 1rem;
  height: 6.5rem;
  background-color: white;
  padding: 1.25rem 1rem;
 position: relative;
 .icon{
  margin-top:2rem;
}
  .border {
    border-bottom: 0.1rem solid #ececec;
    width: 100%;
    .img {
      width: 5rem;
      height: 5rem;
      float: left;
    }
  }
}
 
</style>
