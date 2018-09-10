<template>
  <div>
    <div class="shopping">
      <div class="shop_head">
        <span>领券</span>
        <p>购物车</p>
      </div>
      <div class="baozheng">
        <span>30天无忧退货</span>
        <span> &nbsp;&nbsp;48小时快速退货</span>
        <span>满88元免邮费</span>
      </div>
      <div class="shop_con">
        <img src="/static/images/shop/shop.png" alt="">
        <p>去添加点什么吧</p>
      </div>
      <div class="login">登录 </div>
    </div>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins';
  $body_color = #f4f4f4
  $rem = 750/16rem

  html,body{
    background $body_color
  }
  .shopping{
    font-size (16*2/$rem)
    .shop_head{
      width (750/$rem)
      height (88/$rem)
      background #fff
      line-height (88/$rem)
      font-size (16*2/$rem)
      >span{
        display inline-block
        color red
        float: right
        padding-right (10*2/$rem)
      }
      >p{
         display block
         text-align center
       }
    }
    .baozheng{
      width: 100%
      margin-top: (10*2/$rem)
      display flex
      flex 1
      >span{
        font-size (12*2/$rem)
        display flex
        flex 1
        justify-content: space-around
        /*flex-flow: row nowrap*/
      /*  align-items: center;*/
        &::before{
          content ' '
          width: (10/$rem)
          heihgt: (10/$rem)
          margin-right (-35*2/$rem)
          margin-top: (5/$rem)
          box-sizing border-box
          background-image url("/static/images/shop/dian.png")
          background-repeat no-repeat
        }
      }
    }
    .shop_con{
      /*background $body_color*/
      width 100%
      height: (900/$rem)
      position: absolute
      top: 50%
      left: 50%
      margin-top (-124*2/$rem)
      margin-left (-124/$rem)
      >img{
        display inline-block
      }
    }
    .login{
      width: (480/$rem)
      height: (92/$rem)
      background #b4282d
      text-align center
      line-height (92/$rem)
      color #fff
      position: absolute
      top: 62%
      left: 50%
      right: 0
      bottom: 0
      margin-top: (-46*2/$rem)
      margin-left (-240/$rem)


    }
  }

</style>
