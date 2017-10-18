<template>
  <div id="hmbg">
    <div class="logbox">
      <img src="../images/logo.png">
      <p>知遇读书</p>
    </div>
    <!--<div class="sign">-->
      <!--<router-link to="/signup">sign up</router-link>-->
      <!--<router-link to="/signin">sign in</router-link>-->
    <!--</div>-->
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
  #hmbg {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../images/timg.gif") no-repeat;
  }
  #hmbg .logbox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .logbox p{
    text-align: center;
    font-size:1.5rem;
  }
  #hmbg .sign{
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
  .sign a:nth-last-child(1){
    margin-left: 1rem;
  }
</style>
