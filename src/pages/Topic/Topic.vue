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
      <div class="lunListContainer">
        <div class="lun_list" ref="lunUl">
          <ul class="lunList">
            <img src="/static/images/lun_list/lun_list01.png" alt="">
            <p>严选推荐</p>
            <span>342篇文章</span>
          </ul>
          <ul class="lunList">
            <img src="/static/images/lun_list/lun_list02.png" alt="">
            <p>严选推荐</p>
            <span>342篇文章</span>
          </ul>
          <ul class="lunList">
            <img src="/static/images/lun_list/lun_list03.png" alt="">
            <p>严选推荐</p>
            <span>342篇文章</span>
          </ul>
          <ul class="lunList">
            <img src="/static/images/lun_list/lun_list04.png" alt="">
            <p>严选推荐</p>
            <span>342篇文章</span>
          </ul>
          <ul class="lunList">
            <img src="/static/images/lun_list/lun_list03.png" alt="">
            <p>严选推荐</p>
            <span>342篇文章</span>
          </ul>
          <ul class="lunList">
            <img src="/static/images/lun_list/lun_list02.png" alt="">
            <p>严选推荐</p>
            <span>342篇文章</span>
          </ul>
        </div>
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
            <p class="t_m_l_p">10分钟做出异域大餐</p>
            <p>所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。
              在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</p>
          </div>
          <img src="/static/images/tuijian/tuijian02.jpg" alt="">
        </div>
        <div class="tuijian_small">
          <div class="t_m_l">
            <img src="/static/images/tuijian/tuijain03.jpg" alt="">
            <span>丁磊</span>
            <p class="t_m_l_p">澳洲名庄高分酒，为女生造的好酒</p>
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
            <p class="t_m_l_p">10分钟做出异域大餐</p>
            <p>所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。
              在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</p>
          </div>
          <img src="/static/images/tuijian/tuijian02.jpg" alt="">
        </div>
        <div class="tuijian_small">
          <div class="t_m_l">
            <img src="/static/images/tuijian/tuijain03.jpg" alt="">
            <span>丁磊</span>
            <p class="t_m_l_p">澳洲名庄高分酒，为女生造的好酒</p>
            <p>澳洲巴罗萨谷干红，限时第2瓶半价</p>
          </div>
          <img src="/static/images/tuijian/tuijian02.jpg" alt="">
        </div>

        <!--十点一刻-->
        <div class="shidianyike">
          <div class="t_p">
            <p>十点一刻</p>
          </div> </div>

          <div class="shidianListCon">
            <div class="shidianList" ref="shidian_List">
              <div class="shidian">
                <span>— 今日话题 —</span>
                <p>你有那些租房经历</p>
                <span class="shidian_span">聊聊你用过的租房神器</span>

                <div class="shidian_small">
                  <img src="/static/images/shidianyike/yike02.png" alt="">
                  <img src="/static/images/shidianyike/yike03.jpg" alt="">
                  <img src="/static/images/shidianyike/yike04.jpg" alt="">
                  <i class="iconfont icon-gengduo"></i>
                  <span>983人参与话题</span>
                </div>
              </div>
              <div class="shidian">
                <span>— 今日话题 —</span>
                <p>你有那些租房经历</p>
                <span class="shidian_span">聊聊你用过的租房神器</span>

                <div class="shidian_small">
                  <img src="/static/images/shidianyike/yike02.png" alt="">
                  <img src="/static/images/shidianyike/yike03.jpg" alt="">
                  <img src="/static/images/shidianyike/yike04.jpg" alt="">
                  <i class="iconfont icon-gengduo"></i>
                  <span>983人参与话题</span>
                </div>
              </div>
            </div>
          </div>


      </div>

      <!--严选臻品-->
      <div class="tuijian zhenpin">
        <div class="t_p">
          <p>严选臻品</p>
        </div>
        <div class="tuijian_big">
          <img src="/static/images/zhenpin/zhenpin01.jpg" alt="">
          <div class="tui_list">
            <p>严选按摩神器大公开</p>
            <span class="t_span">揭开每一款的秘技绝学</span>
          </div>
        </div>
        <div class="tuijian_small">
          <div class="t_m_l">
            <p>出门旅行，登机箱也要颜值在线</p>
            <p>德国进口PC材质，好看轻巧又耐摔</p>
          </div>
          <img src="/static/images/zhenpin/zhenpin02.jpg" alt="">
        </div>
        <div class="tuijian_small">
          <div class="t_m_l">
            <p>让洗衣变成一种享受</p>
            <p>在洗衣这种细微之事上，也要有美好体验</p>
          </div>
          <img src="/static/images/zhenpin/zhenpin03.jpg" alt="">
        </div>
      </div>
      <!--严选LOOK-->
      <div class="look">
        <p class="t_p">严选LOOK</p>
        <img src="/static/images/look/look01.jpg" alt="">
        <div class="look_p">
          <img src="/static/images/look/look02.png" alt="">
          <span>s*****u</span>
          <p>加了冰块一个小金橘，还是觉得比较甜。照评论员说的，下次用苏打水稀释。因为只优惠了10块钱，我有囤了一瓶～</p>
        </div>
      </div>

      <!--更多精彩-->
      <div class="colorful">
        <div class="t_p">更多精彩</div>
      </div>
      <div class="wonderful">
        <div class="colorful_more">
          <img src="/static/images/colorful/colorful02.jpg" alt="">
          <p>彩妆、配饰、洗护、衬等男神女神必备好物</p>
        </div>
      </div>
      <div class="wonderful">
        <div class="colorful_more">
          <img src="/static/images/colorful/colorful01.jpg" alt="">
          <p>彩妆、配饰、洗护、衬等男神女神必备好物</p>
        </div>
      </div>
      <div class="wonderful">
        <div class="colorful_more">
          <img src="/static/images/colorful/colorful02.jpg" alt="">
          <p>彩妆、配饰、洗护、衬等男神女神必备好物</p>
        </div>
      </div>

    </div>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      console.log(this.$route)
      this._initLunScroll()
      this._initShiDianScroll()
    },
    methods:{
      _initLunScroll(){
        const space = 20
        const lun_Ul = this.$refs.lunUl
        let lunDivW = 0
        Array.from(lun_Ul.children).forEach((item, index) =>{
          lunDivW += 165 + space
        })
        lun_Ul.style.width = lunDivW + 'px'
        new BScroll('.lunListContainer', {
          click: true,
          scrollX: true
        })
      },


      _initShiDianScroll(){
        const space = 20
        const timeDiv = this.$refs.shidian_List
        let shiW = 0
        Array.from(timeDiv.children).forEach((item, index) =>{
          shiW += 573 + space
        })
        timeDiv.style.width = shiW + 'px'
        new BScroll('.shidianListCon', {
          click: true,
          scrollX: true
        })
      }
    }

  }
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins';
$body_color = #f4f4f4
$color = #7f7f7f
$rem = 750/16rem
html,body{
  overflow: auto
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 60%;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}




.topicContainer{
  background $body_color
  margin-bottom (50*2/$rem)
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
      width: (1100/$rem)
      height (210/$rem)
      background darkturquoise
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
        font-size (16*2/$rem)
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
        >.t_m_l_p{
            display inline-block
            width: (328/$rem)
            height (38/$rem)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin-top (5*2/$rem)
          }
        & p:last-child{
            width: (398/$rem)
            height: (67/$rem)
            line-height: (33/$rem)
            overflow hidden
            text-overflow ellipsis
            margin-top (5*2/$rem)
            color #7f7f7f
            font-size (12*2/$rem)
          }
        }
      >img{
          width: (260/$rem)
          height (272/$rem)
          float right
        }

      }
    }
  .shidianyike{
      width: (1200/$rem)

      >.t_p{
        float: left
        text-align center
        margin: auto
        width: (690/$rem)
        height: (120/$rem)
        background saddlebrown
        line-height (120/$rem)
        font-size (16*2/$rem)
      }

    }
  .shidianListCon{
    width: (1500/$rem)
    height (550/$rem)
    background deepskyblue
  }
  .shidian{
      float left
      width: (580/$rem)
      height: (410/$rem)
      margin-right (10*2/$rem)
      /*background sandybrown*/
      text-align: center
      padding (10*2/$rem)
      box-sizing border-box
      background-image url("/static/images/shidianyike/yike01.png")
      >span:first-child{
        font-size (12*2/$rem)
        color #7f7f7
      }
    >p{
        font-size (16*2/$rem)
        margin-top (20*2/$rem)
        margin-bottom (10*2/$rem)
      }
    >.shidian_span{
        display block
        font-size (14*2/$rem)
        color #7f7f7
      }

    >.shidian_small{
        margin-top (20*2/$rem)
        >img{
          width:(48/$rem)
          height: (48/$rem)
          border-radius 50%
          margin (5*2/$rem) (-3*2/$rem)
          vertical-align middle
        }
      >.icon-gengduo{
          font-size (48/$rem)
          background-color #e9e9e9
          border-radius 50%
          vertical-align middle
          margin-top  (6*2/$rem)
          margin-left (-5*2/$rem)
        }
      >span {
          font-size (12 * 2 /$rem)
          color #7f7f7f
        }
      }
    }

  .zhenpin{
      clear both
    }
  .look{
    >.t_p{
        width: 100%
        height: (120/$rem)
        line-height: (120/$rem)
        text-align center
        font-size (16*2/$rem)
      }
    >img{
        width: (750/$rem)
        height: (750/$rem)
      }
    >.look_p{
        margin-left:(10/$rem)
        >img{
          display inline-block
          text-align left
          vertical-align middle
        }
      >span{
          font-size (12*2/$rem)
          vertical-align middle
        }
      >p{
          display inline-block
          padding (10/$rem)
          font-size (14*2/$rem)
          color #7f7f7f
          line-height 2em
          text-indent 2em
        }
      }
    }
  .colorful{
      width (690/$rem)
      >.t_p{
        top-border-1px ($color)
        text-align center
        margin: auto
        width: (80*2/$rem)
        height: (140/$rem)
        line-height (120/$rem)
        font-size (16*2/$rem)
        &::before{
          margin-top (30*2/$rem)
          margin-left: (-230/$rem)
          content: ' ';
          display: block;
          width: (100*2/$rem)
          height: 1;
          background-color: #d9d9d9;
        }
      &::after{
          margin-top (30*2/$rem)
          margin-left: (230/$rem)
          content: ' ';
          display: block;
          width: (120*2/$rem)
          height: 1;
          background-color: #d9d9d9;
        }
      }
    }
  .wonderful{
    width: (690/$rem)
    height (450/$rem)
    background: #fff
    margin 0 auto
    >.colorful_more{
      width: (642/$rem)
      height: (360/$rem)
      margin: auto
      >img{
        width: 100%
        height: 100%
      }
    >p{
        font-size (14*2/$rem)
      }
    }
  }



}
</style>
