<template>
  <div>
    <SignHeader/>
    <div class="Sign-body">
      <input type="text" placeholder="邮箱/手机号" v-model="iemail">
      <input type="password" ref="pass" placeholder="密码" v-model="ipassword">
      <i @click="changeBlue" class="iconfont icon-yincangmima" :class="{icon_blue:iblue}"></i>
    </div>
    <button @click="sigin" class="butSign">登陆</button>
    <div class="sign">
      <router-link to="/signup">sign up</router-link>
    </div>
  </div>
</template>
<script>
  import SignHeader from '../components/SignHeader.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        iblue: false,//控制隐藏密码图标的显示
        inum: 0,//隐藏密码的计数器开关
        iemail: '',//邮箱和手机号input
        ipassword: '',//密码input
      }
    },
    methods: {
      changeBlue() {
        if (!this.inum) {
          this.iblue = true;
          this.inum = 1;
          this.$refs.pass.type = "text"//获取密码输入框的元素，更改其类型来达到显示和隐藏密码的效果
        } else {
          this.iblue = false;
          this.inum = 0;
          this.$refs.pass.type = "password"//获取密码输入框的元素，更改其类型来达到显示和隐藏密码的效果
        }
      },
      sigin() {
        axios.post('/api/users',{imail:this.iemail,ipassword:this.ipassword}).then(res=>{
          console.log(res.data)
        });
        //this.$router.push('/home');
        //console.log('登陆')
      }
    },
    components: {
      SignHeader
    }
  }
</script>
<style scoped>
  .sign{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: 2.5;
    font-size: 1.5rem;
    text-align: right;
    padding-right:1rem;
  }
  .sign a{
    color: green;
  }
</style>
