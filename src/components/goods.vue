<template>
  <div class="bc">
    <div>
      <div class="img">
      <img :src="imgurl"  />
      </div>
      <div class="ms">描述{{title}}
      <div style="color: #DA0217;">¥{{cost}} 
       <span style="text-decoration:line-through" class="word" v-if="a">
         ¥{{cost}} 
       </span>
       <span class="word" v-else>
         已售23件
       </span>
       <div class="fr">
         <span class="word" v-show='b'>余3件</span>
 <img :src="che" style="vertical-align: middle;" @click="tojia()">
       </div>
      
      </div>
      </div>
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
      type: String,
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
    a: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      item: true
    }
  },
  methods: {
    tojia () {
      this.$emit('add')
    }
  }
}
</script>

<style lang="scss" scoped>
.bc{
  background-color: white;
  .ms{
    padding: 0.375rem 0.875rem;

  }
  .word{
    color:#999999; 
    font-size:0.75rem; 

  }
  .fr{
    float: right;
  }

}

</style>