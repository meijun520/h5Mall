<template>
    <div class="search">
      
    <img :src="ab()">

    <input type="text"  :placeholder="neir" class="input-kw" >
    </div>  
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
    }
  },
  props: {
    neir: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    ab () {
      return require('@/assets/qita/搜索.png')
    }

  }
}
</script>

<style lang="scss" scoped>
.search{
  width:81vw;
  top:0;
  padding:0.5rem;
  z-index: 1000;
  text-align: center;

}
::-webkit-input-placeholder {
padding-left: 3.5rem;
}
img{
  width: 1rem;
  position: absolute;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.input-kw{
  background-color: #F7F5F5;
  width: 100%;
  height: 2rem;
  border-radius:1rem;
  border: 0;
  text-align:left;
    &:focus::-webkit-input-placeholder { 
      color:transparent;
     }

}


</style>
