<template>
  <div>
    <div class="ItemContainer">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span>搜索商品，共13252款好物</span>
      </div>
      <div class="ItemList">
        <div class="ItemList_left">
          <ul ref="item_lsit">
            <li class="item_li"  v-for="(item, index) in ItemLists" :key="index"><a href="javascript:;">{{ItemLists[index]}}</a></li>
          </ul>
        </div>
      </div>

      <div class="IconList">
        <img src="/static/images/Item/icon.png" alt="">
        <div class="icon_line">
          <div class="icon_line_item">
            <img src="/static/images/Item/icon01.png" alt="">
            <p>配件第2件半价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon02.png" alt="">
            <p>配件特价低至5价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon03.png" alt="">
            <p>配件2件8价</p>
          </div>
        </div>
        <div class="icon_line">
          <div class="icon_line_item">
            <img src="/static/images/Item/icon01.png" alt="">
            <p>配件第2件半价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon02.png" alt="">
            <p>配件特价低至5价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon03.png" alt="">
            <p>配件2件8价</p>
          </div>
        </div>
        <div class="icon_line">
          <div class="icon_line_item">
            <img src="/static/images/Item/icon01.png" alt="">
            <p>配件第2件半价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon02.png" alt="">
            <p>配件特价低至5价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon03.png" alt="">
            <p>配件2件8价</p>
          </div>
        </div>

        <div class="icon_line">
          <div class="icon_line_item">
            <img src="/static/images/Item/icon01.png" alt="">
            <p>配件第2件半价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon02.png" alt="">
            <p>配件特价低至5价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon03.png" alt="">
            <p>配件2件8价</p>
          </div>
        </div>
        <div class="icon_line">
          <div class="icon_line_item">
            <img src="/static/images/Item/icon01.png" alt="">
            <p>配件第2件半价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon02.png" alt="">
            <p>配件特价低至5价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon03.png" alt="">
            <p>配件2件8价</p>
          </div>
        </div>
        <div class="icon_last">
          <div class="icon_line_item">
            <img src="/static/images/Item/icon01.png" alt="">
            <p>配件第2件半价</p>
          </div>
          <div class="icon_line_item">
            <img src="/static/images/Item/icon02.png" alt="">
            <p>配件特价低至5价</p>
          </div>
        </div>


      </div>


    </div>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        ItemLists: ['推荐专区','爆品区','秋季专场','居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','婴童','文体','特色区']
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
    .search{
      width: (690/$rem)
      height: (56/$rem)
      background #ededed
      text-align center
      margin auto
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

    .ItemList_left{
      font-size (14*2/$rem)
      position absolute
      top: (70/$rem)
      left: 0
      >ul{
        >li{
          padding (10*2/$rem) (20/$rem)
          background #ffecec
          line-height (50/$rem)
          text-align center
        }
      }
    }
    .IconList{
      >img{
        width: (528/$rem)
        height: (192/$rem)
        margin (20/$rem) 0
      }
      margin-left (180/$rem)
      >.icon_line{
        width: (528/$rem)
        height: (216/$rem)
        display flex
        .icon_line_item{
          width: (144/$rem)
          height: (216/$rem)
          text-align center
          flex 1
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
