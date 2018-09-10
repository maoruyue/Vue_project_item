<template>
  <div class="navList" ref="navList">
    <ul class="content" ref="navUl">
      <li class="lis active" v-for="(nav, index) in navLists" :key="index">{{navLists[index]}}</li>
    </ul>
    <!-- you can put some other DOMs here, it won't affect the scrolling -->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$store.dispatch('getNavigation')
    },
    computed:{
      ...mapState(['navigation'])
    }
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
