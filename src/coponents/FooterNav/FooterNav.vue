<template>
  <div class="footer">
    <div class="footer-home">
      <a href="javascript:;" @click.prevent="$router.replace('/')">
        <div class="footer-class-icon icon-home" :class="{active: $route.path==='/'}"></div>
        <span>首页</span>
      </a>
    </div>
    <div class="footer-topic">
      <a href="javascript:;" @click.prevent="$router.replace('/topic')">
        <div class="footer-class-icon icon-topic" :class="{active: $route.path==='/topic'}"></div>
        <span>识物</span>
      </a>
    </div>
    <div class="footer-class">
      <a href="javascript:;" @click.prevent="$router.replace('/item')">
        <div class="footer-class-icon icon-class" :class="{active: $route.path==='/item'}"></div>
        <span>分类</span>
      </a>
    </div>
    <div class="footer-cart">
      <a href="javascript:;" @click.prevent="$router.replace('/shopping')">
        <div class="footer-class-icon icon-cart" :class="{active: $route.path==='/shopping'}"></div>
        <span>购物车</span>
      </a>
    </div>
    <div class="footer-person">
      <a href="javascript:;" @click.prevent="$router.replace('/person')">
        <div class="footer-class-icon icon-person" :class="{active: $route.path==='/person'}"></div>
        <span>个人</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer
    top-border-1px(#eee)
    justify-content space-around
    position fixed
    z-index 5
    left 0
    bottom 0
    width 100%
    height (49*2/$rem)
    background-color #fafafa
    display flex
    align-items center
    >div
      font-size (13*2/$rem)
      color black
      >a
        display flex
        flex-direction column
        align-items center
        cursor pointer
        >span
          margin-top (3*2/$rem)
        .footer-class-icon
          width: (20*2/$rem)
          height: (20*2/$rem)
          background-image url("./image/foot.png")
          background-size (20*2/$rem)
          background-repeat no-repeat
        .icon-home
          background-position (-1*2/$rem) (-125*2/$rem)
          &.active
            background-position (-1*2/$rem) (-99*2/$rem)
        .icon-topic
          background-position (-1*2/$rem) (-176*2/$rem)
          &.active
            background-position (-1*2/$rem) (-150*2/$rem)
        .icon-class
          background-position (-1*2/$rem) (-76*2/$rem)
          &.active
            background-position (-1*2/$rem) (-50*2/$rem)
        .icon-cart
          background-position (-1*2/$rem) (-26*2/$rem)
          &.active
            background-position (-1*2/$rem) 0
        .icon-person
          background-position (-1*2/$rem) (-226*2/$rem)
          &.active
            background-position (-1*2/$rem) (-200*2/$rem)






</style>
