<template>
  <div class="head">
    <img class="logo" src="./images/logo.png" alt="">
    <div class="search">
      <i class="iconfont icon-search"></i>
      <span>搜索商品，共9771款好物</span>
    </div>
  </div>
</template>

<script>

  export default {

    mounted () {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins';
  .head{
    position fixed
    z-index: 5
    width: 100%
    height (120/$rem)
    background #fff
    > .logo {
      display: inline-block
      position: fixed
      left (5*2/$rem)
      top: (5*2/$rem)
      z-index 10
      /*width: (138/$rem)
      height: (40/$rem)*/
      padding (10*2 /$rem)
      padding-right 0
      float left
      font-weight bold
    }
    .search {
      position: fixed
      top: (5*2/$rem)
      right: (10*2/$rem)
      z-index 10
      margin (10/$rem) 0
      width 70%
      height (56 /$rem)
      line-height (56/$rem)
      background-color: #ededed;
      margin-left (20*2 /$rem)
      display: inline-block
      font-size (14*2 /$rem)
      .icon-search {
        margin-left (20*2 /$rem)
      }
    }

  }
</style>
