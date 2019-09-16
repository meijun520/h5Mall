<template>
  <div class="view">
    <tabGroup :title="title" :ab="ab" @toother="fankui()"></tabGroup>
    <group>
      <x-textarea  :max="200" placeholder="输入公告内容～～" :show-counter="false" :height="620" :rows="8" :cols="30" v-model="neir"></x-textarea>
    </group>
    <img src="./pic.png" class="img">
   
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Group, XTextarea } from 'vux'

export default {
  components: {
    tabGroup: tabGroup,
    Group,
    XTextarea
  },
  data () {
    return {
      title: '意见反馈',
      ab: '提交',
      neir: ''

    }
  },
  props: {},
  computed: {},
  methods: {
    fankui () {
      this.$http.post('ferrobag-server/feedback/addFeedback', {params: { userId: 1, content: this.neir }}).then(res => {

      })
    }

  }
}
</script>

<style lang="scss" >
.view {
  height: 100vh;
  .img{
      position: relative;
    top: -32rem;
    left:1rem;
  }
}
</style>