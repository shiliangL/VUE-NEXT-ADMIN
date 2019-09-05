<template>
  <div class="user-login">
    <div class="user-login-bg" :style="{'background-image':`url(${backgroundImage})`}"></div>
    <div class="content-wrapper">
      <h2 class="slogan">
        欢迎使用
        <br />NEXT-ADmin管理系统
      </h2>
      <div class="form-container">
        <h4 class="form-title">登录</h4>
        <el-form ref="form" :model="user" label-width="0">
          <div class="form-items">
            <el-form-item prop="username" :rules="[ { required: true, message: '会员名/邮箱/手机号不能为空'}]">
              <div class="form-line-no">
                <i class="el-icon-edit-outline input-icon"></i>
                <el-input placeholder="会员名/邮箱/手机号" v-model="user.username"></el-input>
              </div>
            </el-form-item>

            <el-form-item prop="password" :rules="[ { required: true, message: '密码不能为空'}]">
              <div class="form-line-no">
                <i class="el-icon-service input-icon"></i>
                <el-input type="password" placeholder="密码" v-model="user.password"></el-input>
              </div>
            </el-form-item>

            <el-form-item>
              <el-checkbox class="checkbox">记住账号</el-checkbox>
            </el-form-item>

            <el-button type="primary" class="submit-btn" size="small" @click="submitBtn">登 录</el-button>
          </div>
          <div class="tips">
            <a href="/" class="link">立即注册</a>
            <span class="line">|</span>
            <a href="/" class="link">忘记密码</a>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
const backgroundImage = 'https://farm5.staticflickr.com/4176/34378167170_be43601df6_k.jpg'

export default {
  name: 'UserLogin',
  data() {
    return {
      backgroundImage: backgroundImage,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitBtn() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
