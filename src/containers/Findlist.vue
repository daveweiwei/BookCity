<template>
  <div class="listbody">
    <div class="listtitle">发现</div>
    <ol class="booklist">
      <li v-for="book in books">
        <div class="bookcontent">
          <div class="bookimg">
            <img class="imgs" :src="book.bookimgs">
            <h1>{{book.bookname}}</h1>
            <span>{{book.author}}</span>
          </div>
          <div class="bookfooter">
            <img :src="book.visimg">
            <span>{{book.visitor}}</span>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed:{
      ...mapState({books:'book_data'})
    },
    methods: {},
    components: {}
  }

</script>
<style scoped>
  .listbody {
    width: 100%;
    height: 100%;
    background: #F4F5F7;
  }

  .listtitle {
    font-size: 1.7rem;
    text-align: center;
    padding-top: 1rem;
    line-height: 3rem;
  }

  .listbody .booklist {
    width: 100%;
    height: 46rem;
    list-style: none;
    overflow-y: auto;
  }
  .booklist::-webkit-scrollbar {display:none}
  .booklist li {
    width: 80%;
    height: 44rem;
    padding: 0.5rem;
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0rem 0.2rem 2.5rem #E5E5E5;
    margin: 1rem auto;
  }
  .booklist .imgs{
    width: 15rem;
  }
  .booklist .bookcontent{
    padding-top: 2rem;
    position: relative;
    height: 100%;
  }
  .bookfooter,.booklist .bookimg{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bookimg h1{
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 200;
  }
  .bookimg span{
    font-size: 1.5rem;
  }
  .bookfooter{
    position: absolute;
    bottom: 3rem;
    left: 44%;
  }
  .bookfooter img{
    width: 3.5rem;
    padding: 0.5rem;
    border: 0.1rem solid #EDEDED;
    border-radius: 100%;
  }
  .bookfooter span{
    font-size: 1.5rem;
  }
</style>
