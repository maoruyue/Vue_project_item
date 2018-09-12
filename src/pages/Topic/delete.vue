<template>
  <!--为你推荐-->
  <div class="tuijian">
    <div class="t_p">
      <p>为你推荐</p>
    </div>
    <div class="tuijian_list" v-for="(rem, index) in recommend.recommendBanner" :key="index" v-if="index < 5">
      <div class="tuijian_big">
        <img :src="rem.picUrl" alt="">
        <div class="tui_list">
          <p>{{rem.title}}<span>{{rem.priceInfo}}元起</span></p>
          <span class="t_span">{{rem.subtitle}}</span>
        </div>
      </div>
      <div class="tuijian_small" v-for="(mend, index) in recommend.recommends" :key="index" v-if="index <2 ">
        <div class="t_m_l">
          <img :src="mend.avatar" alt="">
          <span>{{mend.nickname}}</span>
          <p class="t_m_l_p">{{mend.title}}</p>
          <p>{{mend.subtitle}}</p>
        </div>
        <img :src="mend.picUrl" alt="">
      </div>
    </div>
  </div>


  <!--十点一刻-->
  <div class="tuijian">
    <div class="shidianyike">
      <div class="t_p">
        <p>十点一刻</p>
      </div>
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
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>



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
    width: 100%

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
  .shidianListCon {
    width (1500 /$rem)
    height (450/$rem)
    background darksalmon
    .shidianList {
      width: (1500*2 /$rem)
      height (550 /$rem)
      background deepskyblue
    }
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

</style>
