<template>
    <div class="Sign-header">
      <a @click="goback"><i class="iconfont icon-fanhui"></i></a>
    </div>
</template>
<script>
  import {mapActions} from 'vuex';
  import * as Types from '../vuexs/mutation-type'
    export default {
        data() {
            return {}
        },
        methods: {
          ...mapActions({IActions:Types.FOOTERSTATUS}),
          goback(){
            this.IActions(true);
            this.$router.push('/setme');
          }
        },
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
