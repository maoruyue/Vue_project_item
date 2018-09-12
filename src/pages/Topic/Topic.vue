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
      <Column/>

      <!--为你推荐-->
      <Recommend />
      <!--严选臻品-->
      <div class="yanxuanzhenpin" v-if="zhenpin">
        <div class="zhenpin" v-if="zhenpin.zhenOne">
          <div class="t_p">
            <p>{{zhenpin.zhenOne.nickname}}</p>
          </div>
          <div class="tuijian_big">
            <img :src="zhenpin.zhenOne.picUrl" alt="臻品">
            <div class="tui_list">
              <p>{{zhenpin.zhenOne.title}}</p>
              <p class="t_span">{{zhenpin.zhenOne.subtitle}}</p>
            </div>
          </div>
          <div class="tuijian_small" v-for="(zps, index) in zhenpin.zhenpins" :key="index">
            <div class="t_m_l">
              <p>{{zps.title}}</p>
              <p>{{zps.subtitle}}</p>
            </div>
            <img :src="zps.picUrl" alt="">
          </div>
          <!--<div class="tuijian_small">
            <div class="t_m_l">
              <p>让洗衣变成一种享受</p>
              <p>在洗衣这种细微之事上，也要有美好体验</p>
            </div>
            <img src="/static/images/zhenpin/zhenpin03.jpg" alt="">
          </div>-->
        </div>
      </div>
            <!--严选LOOK-->
      <div class="look" v-if="yxlook.yxLook">
        <p class="t_p">严选LOOK</p>
        <img :src="yxlook.yxLook.picUrl" alt="">
        <div class="look_p">
          <img :src="yxlook.yxLook.avatar" alt="">
          <span>{{yxlook.yxLook.nickname}}</span>
          <p>{{yxlook.yxLook.content}}</p>
        </div>
      </div>

      <!--更多精彩-->
      <div class="colorful">
        <div class="t_p">更多精彩</div>
      </div>
      <div class="wonderful" v-if="findMore">
        <div class="colorful_more" v-for="(find, index) in findMore" :key="index">
          <img :src="find.itemPicUrl" alt="">
          <p>{{find.title}}</p>
        </div>
      </div>


    </div>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Column from '../../coponents/Column/Column.vue'  //banner下的推荐
  import Recommend from './Recommend/Recommend.vue'
  export default {
    mounted(){
      this.$store.dispatch('getFindMore')
      this.$store.dispatch('getYxLook')
      this.$store.dispatch('getZhenpin')


//      this._initLunScroll()
      this._initShiDianScroll()
    },
    computed:{

      ...mapState(['findMore']),
      ...mapState(['yxlook']),
      ...mapState(['zhenpin'])
    },
    methods:{
     /* _initLunScroll(){
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
      },*/
      _initShiDianScroll(){
        const space = 20
        const timeDiv = this.$refs.shidian_List
        let shiW = 0
        Array.from(timeDiv.children).forEach((item, index) =>{
          shiW += item.clientWidth+ 100 + space *2
        })
        timeDiv.style.width = shiW + 'px'
        new BScroll('.shidianListCon', {
          click: true,
          scrollX: true
        })
      }
    },
    components:{
      Column,
      Recommend
    },

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
.swiper-wrapper{
  width (670/$rem)
  height (345/$rem)

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

 /* .lun_list{
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
*/
  .zhenpin{
    clear both
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
          width (46/$rem)
          height (46/$rem)
          border-radius 50%
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
      height: (420/$rem)
      margin: auto
      >img{
        width (642/$rem)
        height (360/$rem)
      }
    >p{
        font-size (14*2/$rem)
      }
    }
  }



}
</style>
