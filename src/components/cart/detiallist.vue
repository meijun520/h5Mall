<template>
  <div class="detial">
    <!-- <input type="checkbox" v-model="goodCheck"/> -->
    <check-icon :value.sync="goodCheck" class="icon"></check-icon>
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
        <br />
        <div>¥{{cost}}</div>
      </div>
      <div>
        <inline-x-number :min="1" v-model="goodCount"></inline-x-number>
      </div>
    </div>
  </div>
</template>
 
<script>
import { InlineXNumber, CheckIcon } from 'vux'
export default {
  components: {
    InlineXNumber,
    CheckIcon
  },
  data () {
    return {
      goodCount: 1,
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
      required: false,
      default: ''
    },
    count: {
      type: Number,
      default: 1
    },
    check: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.goodCount = this.count
    this.goodCheck = this.check
  },
  watch: {
    count (newval) {
      if (this.goodCount !== newval) {
        this.goodCount = newval
      }
    },
    goodCount (newval) {
      this.$emit('countChange', newval)
    },
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
  padding-top: 1.8rem;
  float: left;
}

  // .check-box {
  //   //height: 100%;
  //   line-height: 6rem;
  //   input[type="checkbox"] {
  //     width: 1.5rem;
  //     height: 1.5rem;
  //     //background-color: #fff;
  //     //-webkit-appearance: none;
  //     border: 1px solid #c9c9c9;
  //     border-radius: 2px;
  //     //outline: none;
  //   }
  //   input[type="checkbox"]:checked {
  //     //background: "2713";
  //   }
  // }
  .border {
    border-bottom: 0.1rem solid #ececec;
    width: calc(100% - 2.4rem);
    float: left;
    .item-box {
      margin-left: 0.8rem;
      float: left;
    }
    .img {
      width: 5rem;
      height: 5rem;
      float: left;
    }
    .vux-number-selector svg {
      fill: #333333;
    }
    .vux-inline-x-number {
      position: absolute;
      right: 1rem;
      bottom: 2rem;

    }
   .vux-number-selector{
     height: 1.375rem;
     line-height:1.375rem;
         padding: 1px 3px 1px 3px;
   }
   .vux-number-input{
        height: 1.375rem;
     line-height:1.375rem;
     font-size: 0.82rem;
         padding: 1px 3px 1px 3px;
         width: 2.5rem!important;
   }
  }
}
 
</style>
