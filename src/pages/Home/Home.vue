<template>
  <div>
      <div class="homeContainer clearFix">
        <div class="head">
          <img class="logo" src="/static/images/logo/logo.png" alt="">
          <div class="search">
            <i class="iconfont icon-search"></i>
            <span>搜索商品，共9771款好物</span>
          </div>
        </div>

        <!--导航-->
        <div class="navList" ref="navList">
          <ul class="content" ref="navUl">
            <li class="lis active" v-for="(nav, index) in navLists" :key="index" >{{navLists[index]}}</li>
          </ul>
          <!-- you can put some other DOMs here, it won't affect the scrolling -->
        </div>
        <!--轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/static/images/banner/banner03.jpg" alt=""></div>
            <div class="swiper-slide"><img src="/static/images/banner/banner04.jpg" alt=""></div>
            <div class="swiper-slide"><img src="/static/images/banner/banner05.jpg" alt=""></div>
            <div class="swiper-slide"><img src="/static/images/banner/banner06.jpg" alt=""></div>
            <div class="swiper-slide"><img src="/static/images/banner/banner07.jpg" alt=""></div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <!--轮播下 保证-->
        <div class="baozheng">
          <div class="duigou">
            <i class="iconfont icon-duigou"></i>
            <span>网易自营品牌</span>
          </div>
          <div class="duigou">
            <i class="iconfont icon-duigou"></i>
            <span>30天无忧退货</span>
          </div>
          <div class="duigou">
            <i class="iconfont icon-duigou"></i>
            <span>48小时快速退款</span>
          </div>
        </div>
        <!--品牌制造商直供-->
        <div class="home_content">
          <div class="content_title">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-jiantou2"></i>
          </div>
          <div class="chanpinLIst-bg">
            <ul class="chanpin_list">
              <li>
                <span>海外制造商</span><br>
                <span>9.9元起</span><br>
                <span class="xin">上新</span>
                </li>
            </ul>
            <ul class="chanpin_list">
              <li>
                <span>CK制造商</span><br>
                <span>25元起</span><br>
                <span class="xin">上新</span>
              </li>
            </ul>
            <ul class="chanpin_list">
              <li>
                <span>新秀丽制造商</span><br>
                <span>159元起</span>
              </li>
            </ul>
            <ul class="chanpin_list">
              <li>
                <span>Nine West制造商</span><br>
                <span>209元起</span><br>
                <span class="xin">上新</span>
               </li>
            </ul>
          </div>
        </div>
        <!--新品首发-->
        <div class="newsProduce">
          <p>新品首发</p>
          <span>查看全部 <i class="iconfont icon-jiantou"></i></span>
        </div>
        <!--新品滑动列表-->

        <div class="produce">
          <div class="ProductList" ref="proUl">
            <ul class="news_list" >
              <li>
                <img src="../../../static/images/news_list/news_list01.png" alt="">
              </li>
              <span class="topic" style="display: none">爆品</span>
              <p>网易有道翻译王 2.0pro</p>
              <span class="ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span class="red">￥1688</span>
            </ul>
            <ul class="news_list">
              <li>
                <img src="../../../static/images/news_list/news_list01.png" alt="">
              </li>
              <span class="topic" style="display: none">爆品</span>
              <p>网易有道翻译王 2.0pro</p>
              <span class="ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span class="red">￥1688</span>
            </ul>
            <ul class="news_list">
              <li>
                <img src="../../../static/images/news_list/news_list01.png" alt="">
              </li>
              <span class="topic" style="display: none">爆品</span>
              <p>网易有道翻译王 2.0pro</p>
              <span class="ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span class="red">￥1688</span>
            </ul>
            <ul class="news_list">
              <li>
                <img src="../../../static/images/news_list/news_list01.png" alt="">
              </li>
              <span class="topic" style="display: none">爆品</span>
              <p>网易有道翻译王 2.0pro</p>
              <span class="ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span class="red">￥1688</span>
            </ul>
            <ul class="news_list">
              <li>
                <img src="../../../static/images/news_list/news_list01.png" alt="">
              </li>
              <span class="topic" style="display: none">爆品</span>
              <p>网易有道翻译王 2.0pro</p>
              <span class="ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span class="red">￥1688</span>
            </ul>
            <ul class="news_list">
              <li>
                <img src="../../../static/images/news_list/news_list01.png" alt="">
              </li>
              <span class="topic">满额减</span>
              <p>男士优质小牛皮手工正装鞋</p>
              <span class="ellipsis">精挑手工慢做，典雅大气</span>
              <span class="red">￥659</span>
            </ul>
          </div>
        </div>

        <!--人气推荐-->
        <div class="newsProduce renqi">
          <p>人气推荐 · 好物精选</p>
          <span>查看全部 <i class="iconfont icon-jiantou"></i></span>
        </div>
        <!--新品滑动列表-->
        <div class="">
          <ul class="news_list renqi_list">
            <li>
              <img src="../../../static/images/news_list/news_list01.png" alt="">
            </li>
            <span class="topic" style="display: none">爆品</span>
            <p>20寸全铝镁合金登机箱</p>
            <span class="ellipsis">41升超薄坚固 100%铝镁合金</span>
            <span class="red">￥699</span>
          </ul>
          <ul class="news_list renqi_list">
            <li>
              <img src="../../../static/images/news_list/news_list01.png" alt="">
            </li>
            <span class="topic">爆品</span>
            <p>AB面独立弹簧床垫 进口乳胶</p>
            <span class="ellipsis">仅售供应商建议价的1/3</span>
            <span class="red">￥2599</span>
          </ul>
        </div>
        <!--严选限时购-->
        <div class="xianshigou">
          <img src="/static/images/xianshihgou/xianshigou.png" alt="">
          <div class="xianshi_tit">
            <p>严选限时购</p>
            <div>10: 26: 24</div>
            <span>下一场 10:00 开始</span>
          </div>
        </div>
        <!--福利社-->
        <div class="fulishe">
          <img src="../../../static/images/fulishe.jpg" alt="">
        </div>
        <p class="jingxuan">专题精选 <i class="iconfont icon-jiantou2"></i></p>
        <!--精选滑动列表-->
        <div class="jingxuan_listContainer">
          <div class="jingxuan_list">
            <img src="../../../static/images/jingxuan01.jpg" alt="">
            <p>夏日厨房清新法则<span class="red">7.9元起</span></p>
            <span class="xuan_span">去除油腻的厨房清洁妙招</span>
          </div>
          <div class="jingxuan_list">
            <img src="../../../static/images/jingxuan01.jpg" alt="">
            <p>夏日厨房清新法则<span class="red">7.9元起</span></p>
            <span class="xuan_span">去除油腻的厨房清洁妙招</span>
          </div>
        </div>


        <!--居家好物-->
        <div class="jujia">
          <p class="jujia_p">居家好物</p>
          <div class="jujia_list">
            <div class="kexuan">
              <span>2</span>
              <span>色</span>
              <span>可</span>
              <span>选</span>
            </div>
            <div class="jujiaList_con">
              <img src="/static/images/jujia01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <span class="topic">满折</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> ￥279</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/jujia01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <span class="topic" style="display: none">今日特价</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> ￥279</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/jujia01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> ￥279</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_more">
              <!--<img src="/static/images/jujia01.png" alt="居家pic01">-->
              <!--<span class="span">宽细夹排，升级爽滑凉感</span>-->
              <p>更多居家好物</p><br>
              <i class="iconfont icon-jiantou-you"></i>
            </div>
          </div>
        </div>
        <!--配件好物-->
        <div class="jujia peijain">
          <p>配件好物</p>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/peijian.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/peijian.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/peijian.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/peijian.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
        </div>
        <!--服装好物-->
        <div class="jujia fuzhuang">
          <p>服装好物</p>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/fuzhuang01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/fuzhuang01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/fuzhuang01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/fuzhuang01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
        </div>
        <!--电器好物-->
        <div class="jujia dianqi">
          <p>电器好物</p>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/dianqi.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/dianqi.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/dianqi.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/dianqi.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
        </div>
        <!--洗护好物-->
        <div class="jujia xihu">
          <p>洗护好物</p>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
        </div>
        <!--饮食好物-->
        <div class="jujia yinshi">
          <p>饮食好物</p>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
        </div>
        <!--餐厨好物-->
        <div class="jujia canchu">
          <p>餐厨好物</p>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
        </div>
        <!--餐厨好物-->
        <div class="jujia canchu">
          <p>餐厨好物</p>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
        </div>
        <!--婴童好物-->
        <div class="jujia yingtong">
          <p>婴童好物</p>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
          <div class="jujia_list">
            <div class="jujiaList_con">
              <img src="/static/images/xihu01.png" alt="居家pic01">
              <span class="span">宽细夹排，升级爽滑凉感</span>
              <p>天然宽蔑头层清碳化竹签</p>
              <span class="red"> 279￥</span>
            </div>
          </div>
        </div>


        <!--底部-->
        <div class="foot">
          <div class="m-ft">
            <div class="bd">
              <div class="goApp">下载APP</div>
              <div class="goWeb">电脑版</div>
            </div>
            <p class="copyright">
              <span>网易公司版权所有 © 1997-</span>
              <span>2018</span>
              <br>
              <span>食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>


    </div>
    <FooterNav/>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        navLists:['推荐','居家','鞋包配饰','服装','电器','洗护','饮食', '餐厨', '婴童','文体','特色区']

      }
    },
    mounted(){
      this._initScroll()
      this._initProductScroll()
//      this.$store.dispatch('getProduct')

    },
    methods:{
      _initScroll(){
        const space = 80  //两个li之间的距离
        const size = this.navLists.length //共几个li
        const ul = this.$refs.navUl
        const lis = document.querySelectorAll('.navList>ul>li')
        let arr = []
        for(let i=0; i<lis.length;i++){
//          if(lis[i].clientWidth>60){   //两个字之间的长度为60
//            lis[i].style.width = 120 +'px'
//          }
          arr.push(lis[i].clientWidth)
        }
        console.log(arr,1)
        const width = arr.reduce((pre, width) =>
          pre + width
        , 0)
        ul.style.width = width + space*size +'px'
        new BScroll('.navList',{
          click: true,
          scrollX: true,
          scrollY: false
        })
      },
      _initProductScroll(){
        const space = 40   //ul之间的空隙是40
        const product = this.$refs.proUl   //获取proUl下的所有ul
        let divWidth = 0    //先令容器中的宽度为0，在遍历添加
        Array.from(product.children).forEach((item,index)=>{

          divWidth += 280 +space    //使每一次遍历的ul的宽度都添加进容器中
          console.log(divWidth,item)
        })

        product.style.width = divWidth +'px'   //最后得到容器的宽度
        console.log(product, divWidth)
        new BScroll('.produce',{    //滑动的对象及配置信息
          click: true,
          scrollX: true,
          scrollY: false
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins';
  $color = #666666
  $haowu_bg = #f4f4f4
  $haowu_p_bg = #f1ece2
  $haowu_p = #9f8a60
  html,body{
    /*overflow auto*/
    width 100%
    heihgt 100%
    background pink
    font-size 16px
    font-family Arial, "Helvetica Neue", Helvetica, sans-serif
  }
  body{
    height (2000*2 / $rem)
    margin-bottom 50px
    background #f4f4f4
  }

  .homeContainer {

    .iconfont{
      font-size (28/$rem)
    }
    .icon-jiantou-you{
      font-size (67/$rem)
    }
    .head{
      position fixed
      z-index: 5
      width: 100%
      height (120/$rem)
      background #fff
      > .logo {
        display: inline-block
        position: fixed
        left (5*2/$rem)
        top: (5*2/$rem)
        z-index 10
        /*width: (138/$rem)
        height: (40/$rem)*/
        padding (10*2 /$rem)
        padding-right 0
        float left
        font-weight bold
      }
      .search {
        position: fixed
        top: (5*2/$rem)
        right: (10*2/$rem)
        z-index 10
        margin (10/$rem) 0
        width 70%
        height (56 /$rem)
        line-height (56/$rem)
        background-color: #ededed;
        margin-left (20*2 /$rem)
        display: inline-block
        font-size (14*2 /$rem)
        .icon-search {
          margin-left (20*2 /$rem)
        }
      }

    }
    .swiper-wrapper {
      margin-top (120/$rem)
      width (750/$rem)
      height: (400/$rem)
      .swiper-slide {
        img {
          width 100%
          height 100%
        }
      }
      .swiper-pagination{
        width: (40/$rem)
        height: (4/$rem)
      }
    }
    .baozheng{
     /* padding (10*2/$rem) 0 */
      padding-top (10*2/$rem)
      display flex
      width: 100%
      height (20*2/$rem)
      z-index 5
      background #fff
      >.duigou{
        display flex
        flex 1
        padding-left (5*2/$rem)
        font-size (12*2/$rem)
        >.icon-duigou{
          color red
          margin-right (5*2/$rem)
          background #fff
        }
      }
    }
    .navList {
      position: fixed
      top: (40*2/$rem)
      z-index 5
      overflow hidden
      width 100%
      height (60/$rem)
      background #fff
      white-space nowrap
      text-overflow ellipsis
      margin-top (10*2/$rem)
      .content {
        overflow hidden
        > li {
          font-size (16*2/$rem)
          float left
          padding (5*2/$rem) (10*2/$rem)
        }
      }

    }

    .home_content {
      .content_title {
        width 100%
        height (48*2/$rem)
        line-height (48*2/$rem)
        margin-top (10*2/$rem)
        text-align center
        background #fff
        font-size (26/$rem)
        >span{
          /*display inline-block*/
        }
      }
      .chanpinLIst-bg{
        width: 100%
        height (510/$rem)
        background #fff
        margin-bottom (10*2/$rem)
      }
      .chanpin_list {
        float: left
        /*margin-right: 5px*/
        width (355/$rem)
        height (236/$rem)
        background-color $haowu_bg
        background-image: url(../../../static/images/content_list01.png)
        background-size 100%
        background-repeat no-repeat
        padding (5/$rem)
        margin (5/$rem) (3/$rem)
        font-size (14*2/$rem)
        span{
          display inline-block
          margin (3/$rem) 0
        }
        .xin{
          display inline-block
          color #B4A078
          font-size (12*2/$rem)
          padding (1/$rem) (3/$rem)
          border (1/$rem) solid #B4A078
          margin-top (5/$rem)
        }

      }
    }
    .newsProduce, .renqi {
      display: inline-block
      width 100%
      height (260/$rem)
      background url(/static/images/newProduce-bg.png)
      background-size 100%
      color: #8BA0B6;
      > p {
        text-align center
        margin-top (40*2/$rem)
        margin-bottom (10*2/$rem)
        font-size (14*2/$rem)
      }
      > span {
        display: block
        width (100*2/$rem)
        padding: (5/$rem) (10/$rem)
        margin auto
        text-align: center
        background #D8E5F1
        font-size (14*2/$rem)
      }
    }

    .renqi{
      background url(/static/images/renqi/renqi-bg.png)
      background-size 100%
      color: #B4A078;
      >span{
        background #F4E9CB
      }
    }
    .news_list, .renqi_list {
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

    .xianshigou{
      clear both
      width 100%
      height (380/$rem)
      background sienna
      >img{
        width (320/$rem)
        float: right
      }
      .xianshi_tit{
        float: left
        margin (20*2/$rem)
        width (150*2/$rem)
        height (130*2/$rem)
        background firebrick
        >p{
          font-size (16*2/$rem)
          padding (5*2/$rem)
        }
        >div{
          margin-top (10*2/$rem)
          width (150*2/$rem)
          height (50*2/$rem)
          font-size (24*2/$rem)
        }
        >span{
          margin-top (5*2/$rem)
          font-size (12*2/$rem)
        }
      }
    }
    .fulishe {
      img {
        width 100%
      }
    }

    .jingxuan {
      width 100%
      height (30*2/$rem)
      line-height (30*2/$rem)
      background #fff
      text-align: center
      padding (10*2/$rem) 0
      font-size (16*2/$rem)
    }

    .red {
      color #b4282d
    }
    .jingxuan_listContainer {
      /*overflow hidden*/
      width (1500/$rem)
      height: (453/$rem)
      background #795da3
      .jingxuan_list {
        /*overflow hidden*/
        float left
        margin (10*2/$rem) (5*2/$rem)
        width (575/$rem)
        height (430/$rem)
        background seashell
        > img {
          width 100%
        }
        > p {
          font-size (14*2/$rem)
          margin (10*2/$rem) 0
        }
        .xuan_span {
          color #7F7F7F
          font-size (12*2/$rem)
        }
        .red {
          float: right
          margin-right (5*2/$rem)
        }
      }
    }

    .jujia {
      position: relative

      > .jujia_p {
        top-border-1px($color)
        clear both
        text-align: center
        width 100%
        height (120/$rem)
        font-size (16*2/$rem)
        line-height (120/$rem)
        background #fff
      }
      .jujia_list {
        float: left
        width (375/$rem)
        height (550/$rem)
        /*background black*/
        position relative
        .jujiaList_con {
          width (345/$rem)
          height (345/$rem)
          background indianred
          margin 5px
          & img {
            width: 100%
            height: 100%
            background: $haowu_bg
          }
          > .span {
            display: inline-block
            width (345/$rem)
            height (70/$rem)
            line-height (70/$rem)
            font-size (12*2/$rem)
            color: $haowu_p
            background $haowu_p_bg
            margin-top (-5*2/$rem)
          }
          > .topic{
            display: inline-block
            padding (5*2/$rem)
            background orange
            font-size (10*2/$rem)
            font-weight bold
            color #fff
          }
          p {
            width (375/$rem)
            white-space nowrap
            overflow hidden
            text-overflow: ellipsis
            padding (10*2/$rem) 0
            font-size (14*2/$rem)
          }
          > .red {
            font-size (12*2/$rem)
            background: none
          }
        }

        .jujiaList_more{
          width (345/$rem)
          height (415/$rem)
          background rebeccapurple
          display flex
          flex-direction column
          align-items center
          justify-content center
          >p{
            font-size (18*2/$rem)
            margin-bottom (10*2/$rem)
          }
        }
        >.kexuan{
          position: absolute
          top: (10*2/$rem)
          left: (10*2/$rem)
          display: flex
          flex-direction column
          align-items center
          justify-content center
          width (32/$rem)
          height (110/$rem)
          font-size: (14*2/$rem)
          color #9F8A60
          border 1px solid #9F8A60
        }
      }
    }
    .peijain {
      > p {
        top-border-1px($color)
        clear both
        text-align: center
        width 100%
        height (120/$rem)
        font-size (16*2/$rem)
        line-height (120/$rem)
        background #fff
      }
    }

    .fuzhuang,.dianqi,.xihu, .yinshi, .canchu, .yingtong {
      > p {
        top-border-1px($color)
        clear both
        text-align: center
        width 100%
        height (120/$rem)
        font-size (16*2/$rem)
        line-height (120/$rem)
        background #fff
      }
    }



    /*
    .dianqi {
      > p {
        top-border-1px($color)
        clear both
        text-align: center
        width 100%
        height 45px
        line-height 45px
        background #fff
      }
    }
    .xihu {
      > p {
        top-border-1px($color)
        clear both
        text-align: center
        width 100%
        height 45px
        line-height 45px
        background #fff
      }
    }*/
    /*.yinshi {
      > p {
        top-border-1px($color)
        clear both
        text-align: center
        width 100%
        height 45px
        line-height 45px
        background #fff
      }
    }

    .canchu {
      > p {
        top-border-1px($color)
        clear both
        text-align: center
        width 100%
        height 45px
        line-height 45px
        background #fff
      }
    }

    .yingtong {
      > p {
        top-border-1px($color)
        clear both
        text-align: center
        width 100%
        height 45px
        line-height 45px
        background #fff
      }
    }*/



    .foot {
      clear both
      padding-bottom: (10*2/$rem)
      border-top: 1px solid rgba(0, 0, 0, .15);
      background-color: #414141;
      .m-ft {
        width: 100%;
        height: (100*2/$rem)
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        padding: (15*2/$rem)
        .bd {
          .goApp,.goWeb {
            width: (100*2/$rem)
            font-size: (14*2/$rem)
            color: #fff;
            margin-right: (20*2/$rem)
            height: (45*2/$rem)
            line-height: (45*2/$rem)
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            border: (1*2/$rem) solid #999;
          }
        }
        .copyright {
          margin-top: (10*2/$rem)
          font-size: (14*2/$rem)
          line-height: (15*2/$rem)
          color: #999;
          span {
            font-size: (14*2/$rem)
            line-height: (15*2/$rem)
            color: #999;
            text-align: center;
          }
        }
      }
    }
  }
</style>
