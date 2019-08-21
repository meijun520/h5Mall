<template>
  <button class="bigbutton">
    <img :src="icon">
    {{title}}
  </button>
</template>
 
 <script>
 export default {
   props: {
     title: {
       type: String,
       required: false,
       default: ''

     },
     icon: {
       type: String,
       required: false,
       default: ''

     }
   }
 
 }
 </script>
 <style lang="scss" scoped>
 .bigbutton{
    width: calc(100% - 3.5rem);
    height: 3.125rem;
    background: linear-gradient(
      225deg,
      rgba(255, 33, 76, 1) 0%,
      rgba(255, 79, 113, 1) 100%
    );
    box-shadow: 0px 0.25rem 0.5rem 0px rgba(255, 175, 189, 1);
    border-radius: 2.2rem;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    margin: 1.75rem;
 }
 
 
 </style>