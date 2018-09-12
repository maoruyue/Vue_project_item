<template> <!--此页面为“实物”页面下banner下的推荐小图轮播-->
  <div class="lunListContainer">
    <div class="lun_list" ref="lunUl">
      <ul class="lunList" v-for="(col, index) in column" :key="index">
        <img :src="col.picUrl" alt="">
        <p>{{col.title}}</p>
        <span>{{col.articleCount}}</span>
      </ul>

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
      this.$store.dispatch('getColumn', () =>{
        this.$nextTick(()=> {
          this._initLunScroll()
        })
      })


    },
    computed:{
      ...mapState(['column']),
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
     }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins';
  .lunListContainer{
    width: (1000/$rem)
    height (230/$rem)
    background: #000
  }
  .lun_list{
    margin (10*2/$rem) (5*2/$rem)
    width: (1500/$rem)
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

</style>
