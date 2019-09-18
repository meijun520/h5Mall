<template>
  <div class="becomemar">
    <tabGroup :title="title"></tabGroup>
    <div class="text">
      <span>企业名称</span>
      <input type="text" placeholder="请输入企业名称" class="input" />
    </div>
    <div class="text">
      <span>企业名称</span>
      <input type="text" placeholder="请输入企业名称" class="input" />
    </div>
    <div class="text">
      <span>身份证号</span>

      <input type="text" placeholder="请输入 身份证号" class="input" />
    </div>
    <div class="pc">
      <p>营业执照副本照片</p>
      <div class="fl word">
        <div class="zf">
          <img src="./营业执照副本照片.png" />
        </div>
        <div>示范照片</div>
      </div>
      <div class="fr word">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div>上传照片</div>
      </div>
    </div>
    <div style="clear:both"></div>
    <div class="pc">
      <p>法人身份证正反面照片</p>
      <div class="fl word">
        <el-upload
          style="float:left"
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div>上传正面图片</div>
      </div>

      <div class="fr word">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div>上传反面图片</div>
      </div>
    </div>

    <button class="button">退出当前账户</button>
  </div>
</template>

<script>
import tabGroup from '@/components/group/tab'
import { Group } from 'vux'

export default {
  components: {
    tabGroup: tabGroup,
    Group
  },
  data () {
    return {
      title: '成为商家',
      imageUrl: ''
    }
  },
  props: {},
  computed: {},
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt10M = file.size / 1024 / 1024 < 10

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt10M) {
        this.$message.error('上传头像图片大小不能超过 10MB!')
      }
      return isJPG && isLt10M
    }
  }
}
</script>

<style lang="scss" >
.becomemar {
  background: #ffffff;
  .text {
    line-height: 3rem;
    padding: 0.875rem;
    border: 0.0125rem solid #f1f1f1;
    background: #ffffff;
  }
  .input {
    border: none;
    font-size: 1rem;
  }
  .pc{
    padding: 0.8rem;
.fr{
  float: right;
}
.fl{
  float: left;
}
.word{
  text-align: center;
  color: #999999;
}
  }

  .button {
    width: 21.4rem;
    height: 3.125rem;
    background: linear-gradient(
      225deg,
      rgba(255, 33, 76, 1) 0%,
      rgba(255, 79, 113, 1) 100%
    );
    box-shadow: 0px 0.25rem 0.5rem 0px rgba(255, 175, 189, 1);
    border-radius: 2.2rem;
    border: none;
    color: #fffffe;
    font-size: 1rem;

    margin: 1rem;
  }
  .avatar-uploader .el-upload {
    border: 0.0625rem dashed #d9d9d9;
    border-radius: 0.375rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 1.75rem;
    color: #8c939d;
    width: 10.5rem;
    height: 9rem;
    line-height: 9rem;
    text-align: center;
  }
  .avatar {
    width: 10.5rem;
    height: 9rem;
    display: block;
  }
}
</style>