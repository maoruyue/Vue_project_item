<template>
  <div>
    <div class="topicContainer">

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
      <!--轮播-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="/static/images/banner/topic_01.jpg" alt=""></div>
          <div class="swiper-slide"><img src="/static/images/banner/topic_02.jpg" alt=""></div>
          <div class="swiper-slide"><img src="/static/images/banner/topic_03.jpg" alt=""></div>
          <div class="swiper-slide"><img src="/static/images/banner/banner06.jpg" alt=""></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <!--轮播下面的列表-->
      <div class="lun_list">
        <ul class="lunList">
          <img src="/static/images/lun_list/lun_list01.png" alt="">
          <p>严选推荐</p>
          <span>342篇文章</span>
        </ul>
        <ul class="lunList">
          <img src="/static/images/lun_list/lun_list01.png" alt="">
          <p>严选推荐</p>
          <span>342篇文章</span>
        </ul>
        <ul class="lunList">
          <img src="/static/images/lun_list/lun_list01.png" alt="">
          <p>严选推荐</p>
          <span>342篇文章</span>
        </ul>
        <ul class="lunList">
          <img src="/static/images/lun_list/lun_list01.png" alt="">
          <p>严选推荐</p>
          <span>342篇文章</span>
        </ul>
        <ul class="lunList">
          <img src="/static/images/lun_list/lun_list01.png" alt="">
          <p>严选推荐</p>
          <span>342篇文章</span>
        </ul>
        <ul class="lunList">
          <img src="/static/images/lun_list/lun_list01.png" alt="">
          <p>严选推荐</p>
          <span>342篇文章</span>
        </ul>
      </div>
      <!--为你推荐-->
      <div class="tuijian">
        <div class="t_p">
          <p>为你推荐</p>
        </div>
        <div class="tuijian_big">
          <img src="/static/images/tuijian/tuijian01.jpg" alt="">
          <div class="tui_list">
            <p>9月服饰鞋包上新<span>7.59元起</span></p>
            <span class="t_span">秋天从新在开始，更有超值换季折扣等你哦</span>
          </div>
        </div>
        <div class="tuijian_small">
          <div class="t_m_l">
            <img src="/static/images/tuijian/tuijain03.jpg" alt="">
            <span>饮食组： 万万</span>
            <p>10分钟做出异域大餐</p>
            <p>所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。
              在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</p>
          </div>
          <img src="/static/images/tuijian/tuijian02.jpg" alt="">
        </div>
        <div class="tuijian_small">
          <div class="t_m_l">
            <img src="/static/images/tuijian/tuijain03.jpg" alt="">
            <span>丁磊</span>
            <p>澳洲名庄高分酒，为女生造的好酒</p>
            <p>澳洲巴罗萨谷干红，限时第2瓶半价</p>
          </div>
          <img src="/static/images/tuijian/tuijian02.jpg" alt="">
        </div>

        <div class="tuijian_big tuijian_big_p">
          <img src="/static/images/tuijian/tuijian01.jpg" alt="">
          <div class="tui_list">
            <p>9月服饰鞋包上新<span>7.59元起</span></p>
            <span class="t_span">秋天从新在开始，更有超值换季折扣等你哦</span>
          </div>
        </div>
        <div class="tuijian_small">
          <div class="t_m_l">
            <img src="/static/images/tuijian/tuijain03.jpg" alt="">
            <span>饮食组： 万万</span>
            <p>10分钟做出异域大餐</p>
            <p>所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。
              在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</p>
          </div>
          <img src="/static/images/tuijian/tuijian02.jpg" alt="">
        </div>
        <div class="tuijian_small">
            <div class="t_m_l">
              <img src="/static/images/tuijian/tuijain03.jpg" alt="">
              <span>丁磊</span>
              <p>澳洲名庄高分酒，为女生造的好酒</p>
              <p>澳洲巴罗萨谷干红，限时第2瓶半价</p>
            </div>
            <img src="/static/images/tuijian/tuijian02.jpg" alt="">
          </div>
      </div>
      <!--十点一刻-->
      <div class="shidian">
        <span>— 今日话题 —</span>
        <p>你有那些租房经历</p>
        <span>聊聊你用过的租房神器</span>

        <div>
          <img src="/static/images/shidianyike/yike01.png" alt="">
          <img src="/static/images/shidianyike/yike02.png" alt="">
          <img src="/static/images/shidianyike/yike03.jpg" alt="">
          <img src="/static/images/shidianyike/yike04.jpg" alt="">
          <span>983人参与话题</span>
        </div>
      </div>

    </div>
    <FooterNav/>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins';
  html,body{
    overflow: auto
  }
  body{
    height: (4000*2/$rem)
    margin-bottom 50px
  }
  .topicContainer{
    .clearFix{
      content: ''
      clear both
      display none
    }
    .tp_head{
      display flex
      position: relative
      top: 0
      left: 0
      .topic_head{
        width 1rem
        height (88/$rem)
        background #fff
        display flex
        flex 1
        align-items center
        padding 0 (10*2/$rem)
        .iconfont{
          font-size (24*2/$rem)
          flex 1
        }
        >img{
          transform scale(1.2)
          margin-right (200/$rem)
        }
      }
    }
    .swiper-container{
      .swiper-slide {
        width (670/$rem)
        height (385/$rem)
        img {
          width(670/$rem)
          /*height 100%*/
          text-align center
        }
      }
    }

    .lun_list{
      margin (10*2/$rem) (5*2/$rem)
      width: 100%
      height (210/$rem)
      display: flex
      .lunList{
        position: relative
        & img{
          width: (164/$rem)
          height (164/$rem)
          margin-right (10*2/$rem)
          justify-content center
        }
        & p{
          font-size (12*2/$rem)
          text-align center
        }
        & span{
          position absolute
          top: 0
          right: 0
          font-size (12*2/$rem)
          color #fff
          margin-right (10*2/$rem)
          background: linear-gradient(to right, #ffffff 0%,#999999 100%);
        }

      }
    }

    .tuijian{
      margin (15*2/$rem)
      width: (690/$rem)
      >.t_p{
        text-align center
        margin: auto
        width: (690/$rem)
        height: (120/$rem)
        background saddlebrown
        line-height (120/$rem)
      }
      >.tuijian_big{
        margin (10*2/$rem) 0
        width: (690/$rem)
        height (460/$rem)
        font-size (16*2/$rem)
        background red

        img{
          width: (688/$rem)
          height: (386/$rem)
        }
        >.tui_list{
          width (688/$rem)
          text-align center
          margin:auto
          >p{
            text-align: left
            >span{
              text-align: left
              float: right
            }
          }
          >t_span{
            display block
            text-align: left

          }
        }
      }
      >.tuijian_small{
        height (272/$rem)
        margin (10*2/$rem) 0
        border (1*2/$rem) solid #d9d9d9
        >img{
          width: (280/$rem)
          height: (272/$rem)
        }
        >.t_m_l{
          float: left
          width: (400/$rem)
          margin (20*2/$rem) (5*2/$rem)
          >img{
            border-radius 50%
            width: (46/$rem)
            height: (46/$rem)
            vertical-align middle
          }
          & span, & p{
            font-size (14*2/$rem)
            vertical-align middle
          }
          & p:first-child{
            width: (328/$rem)
            overflow hidden
            text-overflow ellipsis
          }
          & p:last-child{
            width: (398/$rem)
            height: (67/$rem)
            line-height: (33/$rem)
            overflow hidden
            text-overflow ellipsis
            margin-top (5*2/$rem)
          }
        }
        >img{
          width: (260/$rem)
          height (272/$rem)
          float right
        }

      }
    }
    .shidian{
      width: 580px
      height: 411px
      background sandybrown
      text-align: center
      >span:first-child{
        font-size (12*2/$rem)
        color #7f7f7
      }
      >p{
        font-size (16*2/$rem)
      }
      >span:last-child{
        font-size (14*2/$rem)
        color #7f7f7
      }

    }
  }
</style>
