<template>
  <div class="Signup">
    <SignHeader/>
    <div class="Sign-body">
      <input type="text" placeholder="邮箱/手机号" v-model="iemail">
      <input type="text" placeholder="用户名" v-model="iname">
      <input type="password" ref="pass" placeholder="密码" v-model="ipassword">
      <i @click="changeBlue" class="iconfont icon-yincangmima" :class="{icon_blue:iblue}"></i>
    </div>
    <button @click="signup" class="butSign">注册</button>
  </div>
</template>
<script>
  import SignHeader from '../components/SignHeader.vue'

  export default {
    data() {
      return {
        iblue: false,//控制隐藏密码图标的显示
        inum: 0,//隐藏密码的计数器开关
        iemail: '',//邮箱和手机号input
        iname: '',//用户名input
        ipassword: '',//密码input
      }
    },
    methods: {
      changeBlue() {
        if (!this.inum) {
          this.iblue = true
          this.inum = 1
          this.$refs.pass.type = "text"//获取密码输入框的元素，更改其类型来达到显示和隐藏密码的效果
        } else {
          this.iblue = false
          this.inum = 0
          this.$refs.pass.type = "password"//获取密码输入框的元素，更改其类型来达到显示和隐藏密码的效果
        }
      },
      signup() {
        console.log('注册')
      }
    },
    components: {
      SignHeader
    }
  }

</script>
<style scoped>

</style>
