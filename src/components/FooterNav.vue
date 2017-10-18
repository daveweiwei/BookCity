<template>
  <div class="footer">
    <router-link tag="span" to="/findlist">
      <i class="iconfont icon-faxian"></i>
      <p>发现</p>
    </router-link>
    <router-link tag="span" to="/bookrack">
      <i class="iconfont icon-shujia"></i>
      <p>书架</p>
    </router-link>
    <router-link tag="span" to="/idea">
      <i class="iconfont icon-xiaoxi"></i>
      <p>想法</p>
    </router-link>
    <router-link tag="span" to="/setme">
      <i class="iconfont icon-wo1"></i>
      <p>我</p>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {}
  }

</script>
<style scoped>
  .footer {
    flex: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: -0.5rem 0rem 1rem #888888;
    z-index: 1;
  }

  .footer span {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .footer i {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }

  .router-link-active {
    color: #4395FF;
  }
</style>
