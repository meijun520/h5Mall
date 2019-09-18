<template>
  <div class="view">
    <tabGroup :title="title" :ab="ab" @toother="fankui()"></tabGroup>

    <x-textarea
      :max="200"
      placeholder="输入公告内容～～"
      :show-counter="false"
      :height="150"
      :rows="8"
      :cols="30"
      v-model="neir"
    ></x-textarea>

    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
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
      this.$http
        .post('ferrobag-server/feedback/addFeedback', {
          userId: 1,
          content: this.neir
        })
        .then(res => {})
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" >
.view {
  height: 100vh;
  background: #ffffff;
  .avatar-uploader .el-upload {
    border: 0.0625rem dashed #d9d9d9;
    border-radius: 0.375rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader {
    margin-left: 0.8rem;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 1.75rem;
    color: #8c939d;
    width: 4.125rem;
    height: 4.125rem;
    line-height: 4.125rem;
    text-align: center;
  }
  .avatar {
    width: 4.125rem;
    height: 4.125rem;
    display: block;
  }
}
</style>