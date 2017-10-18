<template>
    <div class="Sign-header">
      <router-link to="/"><i class="iconfont icon-fanhui"></i></router-link>
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
  .Sign-header{
    line-height: 2;
    padding: 1rem;
    background: #30ABFF;
  }
  .iconfont{
    color: #fff;
    font-weight: bold;
  }
  .Sign-header span{
    display: inline-block;
    width: 50%;
    text-align: right;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
