<template>
  <div class="Signup">
    <SignHeader/>
    <div class="Sign-body">
      <input type="text" placeholder="邮箱/手机号" v-model="phone">
      <input type="text" placeholder="用户名" v-model="showname">
      <input type="password" ref="pass" placeholder="密码" v-model="password">
      <i @click="changeBlue" class="iconfont icon-yincangmima" :class="{icon_blue:iblue}"></i>
    </div>
    <button @click.prevent="signup" class="butSign">注册</button>
  </div>
</template>
<script>
  import SignHeader from '../components/SignHeader.vue'
  import * as Types from '../vuexs/mutation-type'
  import {mapActions} from 'vuex'
  import axios from 'axios'

  export default {
    data() {
      return {
        iblue: false,//控制隐藏密码图标的显示
        inum: 0,//隐藏密码的计数器开关
        phone: '',//邮箱和手机号input
        showname: '',//用户名input
        password: '',//密码input
      }
    },
    methods: {
      ...mapActions({IActions: Types.FOOTERSTATUS}),
      ...mapActions({AIctions: Types.LOGINSTATA}),
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
        axios.post('http://localhost:3000/api/users', {
          username: this.phone,
          passowrd: this.password,
          showname: this.showname
        }).then(res => {
          if (res.data.result == 0) {
            this.IActions(true);
            this.AIctions(true);
            this.$router.push('/setme');
            console.log('注册')
          }
        });
      }
    },
    components: {
      SignHeader
    }
  }

</script>
<style scoped>

</style>
