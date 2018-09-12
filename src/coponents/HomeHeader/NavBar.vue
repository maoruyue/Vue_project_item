<template>
  <div class="navList" ref="navList">
    <ul class="content" ref="navUl">
      <li class="lis active" v-for="(header, index) in headerList" :key="index">{{header.name}}</li>
    </ul>
    <!-- you can put some other DOMs here, it won't affect the scrolling -->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$store.dispatch('getHeaderNav' , ()=>{
          this.$nextTick(() => {
            this._initScroll()
          })
      })

    },
    methods:{
      _initScroll(){
        const space = 20; //两个li之间的距离
        const NavUl = this.$refs.navUl;
        let liWidth = 0;
        Array.from(NavUl.children).forEach((item, index) =>{
          liWidth += 280 + space *2
        })

        NavUl.style.width = liWidth +'px';
        new BScroll('.navList', {
          click: true,
          scrollX: true,
        })
      }
    },
    computed:{
      ...mapState(['headerList'])
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins';
  .navList {
    position: fixed
    top: (40*2/$rem)
    z-index 5
    overflow hidden
    width 100%
    height (60/$rem)
    background #fff
    white-space nowrap
    text-overflow ellipsis
    margin-top (10*2/$rem)
    .content {
      overflow hidden
      > li {
        font-size (16*2/$rem)
        float left
        padding (5*2/$rem) (10*2/$rem)
      }
    }

  }

</style>
