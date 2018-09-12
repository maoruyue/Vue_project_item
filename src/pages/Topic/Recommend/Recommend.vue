<template>
  <!--为你推荐-->
  <!--<div class=" i in 2" >-->
    <!---->
  <!--</div>-->
  <div class="select_content_list" v-if="recommend">
    <div class="select_content_title">为你推荐</div>
    <div class="select_content_product" v-if="recommend.recommendBanner">
      <div class="select_product_pic" style="background-image:url(//yanxuan.nosdn.127.net/201eb7ad6eeb93fd9468f3f9f2deb8d4.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;">
        <span>{{recommend.recommendBanner.typeName}}</span>
      </div>
      <div class="select_product_text">
        <span>{{recommend.recommendBanner.nickname}}</span>
        <span class="price">{{recommend.recommendBanner.priceInfo}}元起</span>
      </div>
      <span class="info">{{recommend.recommendBanner.subtitle}}</span>
    </div>
    <div class="select_content_food" v-for="(item, index) in recommend.recommends" :key="index">
      <div class="select_food_text">
        <div class="select_inner_text">
          <img src="http://yanxuan.nosdn.127.net/bb9873e306c58607c77c3577344eced5.jpg" alt="">
          <span>{{item.nickname}}</span>
        </div>
        <p class="text_top">
          {{item.title}}
        </p>
        <p class="text_bottom">
         {{item.subtitle}}
        </p>
      </div>
      <div class="select_food_pic" style="background-image:url(//yanxuan.nosdn.127.net/e267628e894f76ff50a6afe1d4a265dd.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;">
        <p>{{item.typeName}}</p>
      </div>
    </div>
    <!--<div class="select_content_food">
      <div class="select_food_text">
        <div class="select_inner_text">
          <img src="http://yanxuan.nosdn.127.net/bb9873e306c58607c77c3577344eced5.jpg" alt="">
          <span>饮食组:万万</span>
        </div>
        <p class="text_top">
          10分钟做出异域大餐
        </p>
        <p class="text_bottom">
          所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异域美食
        </p>
      </div>
      <div class="select_food_pic" style="background-image:url(//yanxuan.nosdn.127.net/68ccc6c33be6b7e82d242993c1a18cf1.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;">
        <p>丁嘉的好物推荐</p>
      </div>
    </div>

    <div class="select_content_product">
      <div class="select_product_pic" style="background-image:url(//yanxuan.nosdn.127.net/2be20de13202cad9ff0feb5cd6828b1b.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;">
        <span>严选推荐</span>
      </div>
      <div class="select_product_text">
        <span>成为满分的家务料理人</span>
        <span class="price">4.9元起</span>
      </div>
      <span class="info">懒人清扫、 日式收纳、 洗衣神器</span>
    </div>
    <div class="select_content_food">
      <div class="select_food_text">
        <div class="select_inner_text">
          <img src="http://yanxuan.nosdn.127.net/bb9873e306c58607c77c3577344eced5.jpg" alt="">
          <span>饮食组:万万</span>
        </div>
        <p class="text_top">
          10分钟做出异域大餐
        </p>
        <p class="text_bottom">
          所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异域美食
        </p>
      </div>
      <div class="select_food_pic" style="background-image:url(//yanxuan.nosdn.127.net/d7a2f652368123b7f25917163dc2da20.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;">
        <p>丁嘉的好物推荐</p>
      </div>
    </div>
    <div class="select_content_food">
      <div class="select_food_text">
        <div class="select_inner_text">
          <img src="http://yanxuan.nosdn.127.net/bb9873e306c58607c77c3577344eced5.jpg" alt="">
          <span class="name">饮食组 : 万万</span>
        </div>
        <p class="text_top">
          10分钟做出异域大餐
        </p>
        <p class="text_bottom">
          所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异域美食
        </p>
      </div>
      <div class="select_food_pic" style="background-image:url(//yanxuan.nosdn.127.net/68ccc6c33be6b7e82d242993c1a18cf1.jpg?imageView&quality=75);background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-ms-background-size:cover;-moz-background-size:cover;background-position:center;background-repeat:no-repeat;">
        <p>丁嘉的好物推荐</p>
      </div>
    </div>
    <div class="select_moment">
      <div class="select_moment_wrapper">
        <div class="select_moment_title">
          十点一刻
        </div>
        <div class="moment-container">
          <ul class="moment-wrapper">
            <li class=" moment_tops moment_topic"
                style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);">
              <div class="today_topic">
                <p class="topic">&#45;&#45;今日选题</p>
                <p class="content">你有哪些租房经历</p>
                <p class="connect">聊聊你用过的租房神器</p>

                <div class="join_peoples">
            <span class="icon">
             <i class="iconfont icon-geren"></i>
           </span>
                  <span class="img"><img src="//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48">
            </span>
                  <span class="img"><img src="//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48">
            </span>
                  <span class="icon">
             <i class="iconfont icon-xiaoxi"></i>
           </span>
                  <span class="john_num">991人参与送题</span>
                </div>
              </div>
            </li>
            <li class=" moment_tops more_topics"  style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)">
              查看全部话题
              <span><i class="iconfont icon-xiayige"></i></span>
            </li>
          </ul>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$store.dispatch('getRecommend')
    },
    computed:{
      ...mapState(['recommend']),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  @import '../../../common/stylus/mixins.styl'

  .select_content_list
    width 100%
    background-color white
    box-sizing border-box
    padding 0 (15*2 /$rem)
  .select_content_title
    font-size (15*2 /$rem)
    width 100%
    height (50*2 /$rem)
    text-align center
    line-height (50*2 /$rem)
    &.more_wonderful
      background-color #ededed
  .mediaImg
    width 100%
    height (375*2 /$rem)
  .select_content_product
    margin (20*2 /$rem) 0
    width 100%
    height (290*2 /$rem)
    border-radius (5*2 /$rem)
    overflow hidden
    color #333
    .select_product_pic
      width 100%
      height (200*2 /$rem)
      span
        margin (5*2 /$rem) 0 0 (10*2 /$rem)
        display inline-block
        background-color #ffffff
        border 1px solid #ffffff
        line-height (16*2 /$rem)
        font-size (12*2 /$rem)
        padding 0 (10*2 /$rem)
        color black
        border-radius (10*2 /$rem)
    .select_product_text
      width 100%
      height (40*2 /$rem)
      line-height (40*2 / $rem)
      font-size (18*2 / $rem)
      box-sizing border-box
      padding 0 (10*2 /$rem)
      .price
        float right
      &.notice
        font-size (14*2 /$rem)
    .info
      padding-left (10*2 /$rem)
      font-size (14*2 /$rem)
      color #9f9f9f
  .select_content_food
    border (.1*2 /$rem) solid #d9d9d9
    padding-bottom (15*2 /$rem)
    height (150*2 /$rem)
    margin-top (20*2 /$rem)
    .select_food_text
      float left
      width 50%
      .select_inner_text
        font-size (12*2 /$rem)
        width 100%
        height (20*2 /$rem)
        padding (20*2 /$rem) 0
        img
          width (23*2 /$rem)
          height (23*2 /$rem)
          border-radius 50%
          vertical-align middle
        .name
          font-size (12*2 /$rem)
          color #7f7f7f
      .text_top
        color #333
        line-height (30*2 /$rem)
        margin-bottom (5*2 /$rem)
        font-size (11*2 /$rem)
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
      .text_bottom
        font-size (18*2 /$rem)
        color #7f7f7f
        white-space nowrap
        text-overflow ellipsis
        overflow hidden

        img
          float left
          width (20*2 /$rem)
          height (20*2 /$rem)
          border-radius (20*2 /$rem)
          margin 0 (10*2 /$rem)
        span
          font-size (12*2 /$rem)
      .select_food_text
        font-size (16*2 /$rem)
        margin-left (10*2 /$rem)
        line-height (75*2 /$rem)
  .select_food_pic
    float right
    width 40%
    height 100%
    p
      margin (2*2 /$rem) 0 0 (5*2 /$rem)
      display inline-block
      background-color #ffffff
      border (1*2 /$rem) solid #ffffff
      line-height (16*2 /$rem)
      font-size (12*2 /$rem)
      padding 0 (10*2 /$rem)
      color #333
      border-radius (10*2 /$rem)
  .select_moment
    width 100%
    .select_moment_title
      text-align center
      line-height (60*2 /$rem)
      height (60*2 /$rem)
    .user
      font-size (12*2 /$rem)
      color #7e8c8d
      line-height(10*2 /$rem)
    .user_img
      vertical-align middle
      width (23*2 /$rem)
      height (23*2 /$rem)
    .info
      font-size (14*2 /$rem)
      color #333
      line-height (20*2 /$rem)
      margin-top (5*2 /$rem)
    .moment-container
      width 100%
      height (265*2 /$rem)
      .moment-wrapper
        width (600*2 /$rem)
        height 100%
        .moment_tops
          margin-left (15*2 /$rem)
          float left
          width (285*2 /$rem)
          height (205*2 /$rem)
          background-size 100% 100%
          background-repeat no-repeat
          &:first-child
            margin-left 0
            .today_topic
              padding (15*2 /$rem)
              width 100%
              height 100%
              text-align center
              .topic
                font-size (14*2 /$rem)
                color #7d7d7d
              .content
                font-size (20*2 /$rem)
                line-height (40*2 /$rem)
              .connect
                font-size (16*2 /$rem)
                color #7e8c8d
                white-space nowrap
                overflow hidden
                text-overflow hidden
              .join_peoples
                margin-top (40*2 /$rem)
                font-size (20*2 /$rem)
                color #7e8c8d
                margin-left (5*2 /$rem)
                .img
                  display inline-block
                  width (24*2 /$rem)
                  height (24*2 /$rem)
                  border-radius 50%
                  overflow hidden
                  margin-right (-6*2 /$rem)
                  img
                    width 100%
                    height 100%
                .icon
                  .iconfont
                    font-size (20*2 /$rem)
                .john_num
                  font-size (12*2 /$rem)
                  line-height (20*2 /$rem)
          &:nth-child(2)
            font-size (18*2 /$rem)
            color #7e8c8d
            text-align center
            line-height (205*2 /$rem)


</style>
