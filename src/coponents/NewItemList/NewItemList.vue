<template>
<div class="pro clearFix">

  <div class="produce" ref="proUl">
    <div class="ProductList"  v-for="(item, index) in newItemList" :key="index">
      <ul class="news_list">
        <li>
          <img :src="item.listPicUrl" alt="">
        </li>
        <span class="topic" style="display: none">{{item.itemTagList[0].name}}</span>
        <p>{{item.name}}</p>
        <span class="ellipsis">{{item.simpleDesc}}</span>
        <span class="red">￥{{item.retailPrice}}</span>
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
      return {}
    },
    mounted(){
      this.$store.dispatch('getNewList', ()=>{
        this.$nextTick(()=>{
          this._initProductScroll();
        })
      })

    },
    methods:{
      _initProductScroll(){
        const space = 20   //ul之间的空隙是40
        const prod = this.$refs.proUl   //获取proUl下的所有ul
        let divWidth = 0    //先令容器中的宽度为0，在遍历添加
        Array.from(prod.children).forEach((item,index)=>{
          divWidth += 280 + space*2    //使每一次遍历的ul的宽度都添加进容器中
        })
        prod.style.width = divWidth +'px'   //最后得到容器的宽度
        new BScroll('.pro',{    //滑动的对象及配置信息
          click: true,
          scrollX: true,
        })
      }
    },
    computed:{
      ...mapState(['newItemList'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins';
  $haowu_bg = #f4f4f4
  .pro{
    clear both
    width (1000/$rem)
    height (520/$rem)
  }
  .produce{
    clear both

    height (520/$rem)
  }
  .ProductList{
    float left
    width (300/$rem)
  /*
    height (480/$rem)*/
  }
  .news_list {
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
