<template>
  <div class="bc">
    <div>
      <div class="img">
      <img :src="imgurl"  />
      </div>
      <div class="ms">描述{{title}}
      <div style="color: #DA0217;">¥{{cost}} 
       <span style="color:#999999; font-size:0.75rem; text-decoration:line-through">
         ¥{{cost}} 
       </span>
       <img :src="che" style="float:right">
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
    }
  },
  data () {
    return {
      item: true
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.bc{
  background-color: white;
  .ms{
    padding: 1.5rem 1rem;

  }

  .img{
  width: 5rem;
  height: 5rem;
  border:solid;
 margin: 1rem;
}

}

</style>