<template>
  <div>
    <div class="PersonContainer">
      <!--头部-->
      <div class="tp_head">
        <div class="topic_head">
          <i class="iconfont icon-home"></i>
          <img src="/static/images/logo/logo.png" alt="">
          <div>
            <i class="iconfont icon-search"></i>
            <i class="iconfont icon-gouwuche"></i>
          </div>
        </div>
      </div>
      <div class="person_img">
        <img src="/static/images/Person/person01.png" alt="">
      </div>
      <div class="p_login">
        <div class="p_phone">
          <span>手机号码登录</span>
        </div>
        <div class="p_mail">
          <span>邮箱账号登录</span>
        </div>
        <p>手机号快捷注册
          <i class="iconfont icon-jiantou"></i>
        </p>
      </div>

      <div class="others">
        <span class="span_icon1">
          <i class="iconfont icon-weixin"></i>微信</span>
        <span> | </span>
        <span class="span_icon2">
          <i class="iconfont icon-icon"></i>QQ</span>
        <span> | </span>
        <span class="span_icon3">
          <i class="iconfont icon-weibo"></i>微博</span>
      </div>


    </div>

    <FooterNav/>
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
    background #F2F5F4
  }
  .PersonContainer {
    .tp_head {
      display flex
      position: relative
      top: 0
      left: 0
      .topic_head {
        width 1rem
        height (88 /$rem)
        background #fff
        display flex
        flex 1
        align-items center
        padding 0 (10 * 2 /$rem)
        .iconfont {
          font-size (24 * 2 /$rem)
          flex 1
        }
        > img {
          transform scale(1.2)
          margin-right (200 /$rem)
        }
      }
    }
    .person_img {
      width: 100%
      height: (408 /$rem)
      background sandybrown
      text-align center
      line-height (45*2 /$rem)
      > img {
        width: (134 * 2 /$rem)
        height: (45 * 2 /$rem)
        text-align center
        margin-top (160 /$rem)
      }
    }
    .p_login{
      width: 100%
      height: (146*2/$rem)
      padding (40/$rem)
      text-align center
      .p_phone, .p_mail{
        width: (335*2/$rem)
        height: (47*2/$rem)
        border (1*2/$rem) solid #b4282d
        text-align center
        line-height: (43*2/$rem)
        margin-bottom (20/$rem)
        >span{
          font-size (14*2/$rem)
          color #fff
          &::before{
            display inline-block
            width: (40/$rem)
            height: (40/$rem)
            vertical-align middle
            margin-right (10/$rem)
          }
        }
      }
      .p_phone{
        background #b4282d
        >span::before{
          content ' '
          background-image url("/static/images/Person/person.png")
          background-position:  0 -52px
        }
      }
      .p_mail{
        background: #fff
        >span{
          color #b4282d
          &::before{
            content ' '
            background-image url("/static/images/Person/person.png")
            background-position:  0 -4px
          }
        }
      }

      >p{
        text-align center
        margin-top (20/$rem)
        font-size (16*2/$rem)
      }
      .icon-jiantou{
        font-size (14*2/$rem)
      }
    }
    .others{
      position: absolute
      bottom: (80*2/$rem)
      width: 65%
      height: (20*2/$rem)
      margin-left 20%
      font-size (14*2/$rem)
      display flex
      align-items center


      >span{
        display flex
        flex 1
        align-items center
        justify-content space-around
        >.icon-weixin{
          font-size (16*2/$rem)
        }
        >.icon-icon{
           font-size (16*2/$rem)
         }
        >.icon-weibo{
          font-size (16*2/$rem)
        }
      }
      /*>.span_icon1::before{
        content ' '
        width: (20*2/$rem)
        height: (20*2/$rem)
        background-image url("/static/images/Person/person.png")
        background-position 0 -255px
      }
      >.span_icon2::before{
        content ' '
        width: (20*2/$rem)
        height: (20*2/$rem)
        background-image url("/static/images/Person/person.png")
        background-position 0 -150px
      }
      >.span_icon3::before{
        content ' '
        width: (20*2/$rem)
        height: (20*2/$rem)
        background-image url("/static/images/Person/person.png")
        background-position 0 -205px
      }*/
    }
  }

</style>
