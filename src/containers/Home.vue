<template>
  <div class="home">
    <router-view class="homebody"></router-view>
    <FooterNav v-if="footer"/>
  </div>
</template>
<script>
  import FooterNav from '../components/FooterNav.vue'
  import * as Types from '../vuexs/mutation-type'
  import {mapState,mapMutations, mapActions} from 'vuex'
  import axios from 'axios'

  export default {
    data() {
      return {}
    },
    created() {
      this.pull()
    },
    methods: {
      ...mapMutations([Types.PULLDATA]),
      ...mapActions({AIncrement: Types.PULLDATA}),
      pull() {
        axios.get('http://localhost:3000/api/books').then((res) => {
          this.AIncrement(res.data)
        }).catch(() => {
          console.log('请求错误')
        })
      }
    },
    components: {
      FooterNav
    },
    computed:{
      ...mapState({footer:'footer_state'})
    }
  }

</script>
<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .homebody {
    flex: 90%;
  }
</style>
