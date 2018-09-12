<template>
  <div class="renqiCon clearFix">
    <div class="renqituijian" ref="renUl">
      <div class="renqiList" v-for="(pop, index) in popularItemList" :key="index">
        <ul class="news_list renqi_list">
          <li>
            <img :src="pop.listPicUrl" alt="">
          </li>
          <span class="topic" style="display: none">爆品</span>
          <p>{{pop.name}}</p>
          <span class="ellipsis">{{pop.simpleDesc}}</span>
          <span class="red">￥{{pop.retailPrice}}</span>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {

      }
    },
    mounted(){
      this.$store.dispatch('getPopularItemList', () => {
        this.$nextTick(() => {
          this._initProductScroll()
        })
      })
    },

    methods: {
      _initProductScroll(){
        const space = 20
        const rqUl = this.$refs.renUl
        let divWidth = 0
        Array.from(rqUl.children).forEach((item, index) => {
          console.log(rqUl, 1111111)
          divWidth += 280 + space * 2
        })
        rqUl.style.width = divWidth + 'px'
        new BScroll('.renqiCon',{    //滑动的对象及配置信息
          click: true,
          scrollX: true
        })
      }
    },
    computed:{
      ...mapState(['popularItemList'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins';
  $haowu_bg = #f4f4f4
  .renqiCon{
    clear both
    height (530/$rem)
  }
  .renqituijian{
    /*clear both*/
    /*float left*/
    width: (3000/$rem)
    height (520/$rem)
  }
  .renqiList{
    float left
  }
  .renqi_list {
    float: left
    width (280/$rem)
    height (240*2/$rem)
    background darkturquoise
    font-size (14*2/$rem)
    margin (10*2/$rem)
    & img {
      width (280/$rem)
      height (280/$rem)
      background-color $haowu_bg
    }
    .topic {
      display: inline-block
      margin-top (5*2/$rem)
      padding (5*2/$rem)
      background orange
      font-size (12*2/$rem)
      font-weight bold
      color #fff
      margin-bottom (5*2/$rem)
    }
    >p{
      width (140*2/$rem)
      white-space nowrap
      overflow hidden
      text-overflow: ellipsis
      margin (5*2/$rem) 0
    }
    .ellipsis {
      width (140*2/$rem)
      display: block
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      color #7f7f7f
      margin (2*2/$rem) 0
    }
    .red {
      display: inline-block
      color: #b4282d
      margin-top (5*2/$rem)
    }
  }
</style>
