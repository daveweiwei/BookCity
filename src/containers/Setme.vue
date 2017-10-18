<template>
  <div class="setme">
    <div class="setme_top" v-if="userstatus">
      <div class="setme_title">
        Melissa
        <i class="iconfont icon-shezhi"></i>
      </div>
      <div class="setme_info">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=634098145,264198475&fm=27&gp=0.jpg">
        <span>编辑个人资料</span>
      </div>
    </div>
    <div class="setme_login">
      <i class="iconfont icon-yonghu-copy"></i>
      <span @click="change">登陆/注册</span>
    </div>
    <div class="setme_center">
      <div class="setmerow">
          <span>
            <i class="iconfont icon-zhanghu"></i>
            <span>账户</span>
          </span>
        <span class="rightinfo">18</span>
      </div>
      <div class="setmerow">
          <span>
            <i class="iconfont icon-jichutubiao_userfuben"></i>
            <span>好友排行</span>
          </span>
        <span class="rightinfo">第2名</span>
      </div>
      <div class="setmerow">
          <span>
            <i class="iconfont icon-guanzhu"></i>
            <span>关注</span>
          </span>
        <span class="rightinfo">已关注15人</span>
      </div>
    </div>
    <div class="setme_footer">
      <div class="setmerow">
          <span>
            <i class="iconfont icon-biji"></i>
            <span>笔记</span>
          </span>
        <span class="rightinfo">0个</span>
      </div>
      <div class="setmerow">
          <span>
            <i class="iconfont icon-shudan"></i>
            <span>书单</span>
          </span>
        <span class="rightinfo">1个</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  import * as Types from '../vuexs/mutation-type'
  export default {
    data() {
      return {
        userstatus: false //用户登陆状态
      }
    },
    methods: {
      ...mapActions({IActions:Types.FOOTERSTATUS}),
      change(){
        this.IActions(false);
        this.$router.push('/signin');
      }
    },
    components: {}
  }

</script>
<style scoped>
  .setme {
    width: 100%;
    height: 100%;
    background: #F4F5F7;
  }

  .setme div {
    background: #fff;
    margin-bottom: 1rem;
  }

  .setme .setme_top, .setme_center {
    height: 15rem;
  }

  .setme .setme_login {
    height: 6rem;
    line-height: 4rem;
    padding: 1rem;
    font-size: 2rem;
  }

  .setme_login i {
    font-size: 4rem;
    vertical-align: middle;
    margin-right: 1rem;
  }

  .setme .setme_footer {
    height: 10rem;
  }

  .setme_top .setme_title {
    text-align: center;
    height: 2rem;
    font-size: 1.7rem;
    padding-top: 1rem;
    position: relative;
  }

  .setme_title i {
    font-size: 2.5rem;
    position: absolute;
    right: 1.5rem;
  }

  .setme_info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .setme_info img {
    width: 7rem;
    height: 7rem;
    padding: 0.5rem;
    border: 0.1rem solid #EDEDED;
    border-radius: 100%;
    margin: 1rem 0;
  }

  .setme_info span {
    color: #B0B0B0;
    font-size: 1.5rem;
    font-weight: 100;
  }

  .setme_center {
    overflow: hidden;
  }

  .setme_center div {
    margin: 1rem 0;
    height: 4rem;
    line-height: 4rem;
    padding: 0 1rem;
  }

  .setmerow {
    font-size: 1.7rem;
    position: relative;
  }

  .setmerow i {
    margin-right: 0.5rem;
  }

  .icon-zhanghu {
    color: red;
    font-size: 2rem;
  }

  .rightinfo {
    position: absolute;
    right: 2rem;
  }

  .icon-jichutubiao_userfuben{
    color: coral;
    font-size: 2rem;
  }
  .icon-guanzhu{
    color: orange;
    font-size: 2rem;
  }

  .setme_footer div{
    margin: 1rem 0;
    height: 5rem;
    line-height: 5rem;
    padding: 0 1rem;
  }
  .icon-biji{
    color: #1afa29;
  }
  .icon-shudan{
    color: #1296db;
  }
</style>
