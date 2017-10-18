<template>
  <div id="app">
    <Login v-show="Lstatuc"/>
    <Home v-show="Hstatuc"/>
  </div>
</template>

<script>
  import Login from './containers/Login.vue'
  import Home from './containers/Home.vue'
  export default {
  name: 'app',
  data(){
    return{
      Lstatuc:true,
      Hstatuc:false
    }
  },
  components:{
    Login,
    Home
  },
  mounted(){
    setTimeout(()=>{
      this.Lstatuc=false;
      this.Hstatuc=true;
      this.$router.push('/findlist');
    },1500)
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html,body{
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    overflow:hidden;
  }
  a{
    text-decoration: none;
  }
  #app{
    height: 100%;
  }
</style>
