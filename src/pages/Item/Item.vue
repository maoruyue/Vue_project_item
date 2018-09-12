<template>
  <div>

    <div class="ItemContainer">
      <div class="Item_search">
        <div class="search">
          <i class="iconfont icon-search"></i>
          <span>搜索商品，共13252款好物</span>
        </div>
      </div>


      <div class="ItemList">
        <div class="ItemList_left">
          <ul ref="item_lsit" v-if="categoryData.length">
            <li class="item_li" v-for="(item, index) in categoryData"
                @click="getIndex(index)"
                :class="{active: currentIndex === index }"
                :key="index">
              <p>{{item.name}}</p>
            </li>
          </ul>

        </div>
      </div>

      <div class="IconList" v-if="categoryData[0]">
        <img src="/static/images/Item/icon.png" alt="">
        <div class="icon_line" v-for="(sub, index) in categoryData[currentIndex].subCateList" :key="index">
          <div class="icon_line_item">
            <img :src="sub.wapBannerUrl" alt="">
            <p>{{sub.name}}</p>
          </div>
        </div>



      </div>


    </div>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        currentIndex: 0
      }
    },

    mounted() {
      this.$store.dispatch('getCategory', () => {
        this.$nextTick(() => {
          this._initScroll()
        });
      })

    },
    computed: {
      ...mapState(['categoryData'])
    },

    methods: {
      //初始化滚动
      _initScroll() {
        new BScroll(".ItemList", {
          click: true,
          scrollY: true
        })
      },
      _initItemScroll(){
        new BScroll('.IconList', {
          click: true,
          scrollY: true
        })
      },
      getIndex(everyIndex){
        this.currentIndex = everyIndex
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins';
  $body_color = #f4f4f4
  $rem = 750/16rem

  .ItemContainer{
    width: 100%
    margin-bottom:(100*2/$rem)
    .Item_search{

      width 100%
      height (70/$rem)
      background #fff
      position: fixed
      top: 0
      left: 0
      z-index  100
      border-bottom (2/$rem) solid #eee
      .search{
          width: (690/$rem)
          height: (56/$rem)
          text-align center

          >.icon-search{
            font-size (16*2/$rem)
            vertical-align middler
          }
          >span{
            font-size (16*2/$rem)
            color #666
            line-height (56/$rem)
          }
        }

    }

    .ItemList{
       float left
       height (800/$rem)
       padding-right (5*2/$rem)
       border-right (2/$rem) solid #eee
    }
    .ItemList_left{
      width (80*2/$rem)
      font-size (14*2/$rem)
      background sandybrown
      >ul{
        >li{
          margin (25*2/$rem) (10/$rem)
          line-height (50/$rem)
          text-align center
          &.active{
            color #ab2b2b
            box-sizing border-box
            border-left (3*2/$rem) solid #ab2b2b
        }
        }

      }
    }
    .IconList{
      margin-top (70/$rem)
      >img{
        width: (528/$rem)
        height: (192/$rem)
        margin (20/$rem) 0
      }
      margin-left (180/$rem)
      >.icon_line{
        width: (144/$rem)
        height: (216/$rem)
        float left
        margin-right (20*2/$rem)
        margin-bottom (10*2/$rem)
        .icon_line_item{
          width: 100%
          height: 100%
          text-align center

          >img{
            width: (144/$rem)
            height: (144/$rem)
          }
          >p{
            width: (144/$rem)
            height (72/$rem)
            font-size (12*2/$rem)
          }
        }

      }
      >.icon_last{
        height (50*2/$rem)
        .icon_line_item{
          width: (144/$rem)
          height: (216/$rem)
          text-align center
          margin 0 (10/$rem)
          float: left
          >img{
            width: (144/$rem)
            height: (144/$rem)
          }
          >p{
            width: (144/$rem)
            font-size (12*2/$rem)
          }
        }
       }
    }
  }

</style>
