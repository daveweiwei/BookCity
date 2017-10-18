<template>
  <div :class="{alerts:aletinfo}">
    {{aletinfo}}
  </div>
</template>
<script>
  export default {
    props: ['aletinfo'],//父组件传过来的错误提示信息
    data() {
      return {}
    },
    methods: {},
    components: {}
  }
</script>
<style scoped>
  .alerts {
    position: fixed;
    left: 25%;
    top: 25%;
    padding: 1.2rem;
    background: rgba(75,72,72,0.5);
    color: #fff;
    border-radius: 0.3rem;
    font-size: 1.5rem;
    z-index: 1;
  }
</style>
