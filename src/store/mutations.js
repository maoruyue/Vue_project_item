/*
包含n个接口请求函数的模块
 */
import {
  RECEIVE_HEADER,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_TAGLIST,
  RECEIVE_CATELIST,
  RECEIVE_CATEGORY,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_FINDMORE,
  RECEIVE_ZHENPIN,

  RECEIVE_YXLOOK
} from './mutation-types'

export default {
  //头部信息
  [RECEIVE_HEADER] (state, {headerList}) {
    state.headerList = headerList
  },
  //新品首发
  [RECEIVE_NEWITEMLISTS](state, {newItemList}){
    console.log(newItemList)
    state.newItemList = newItemList
  },
  //人气推荐
  [RECEIVE_POPULARITEMLIST](state, {popularItemList}){
     state.popularItemList = popularItemList
  },
  //专题精选
  [RECEIVE_TOPICLIST](state, {topicList}){
    state.topicList = topicList
  },

  //保证
  [RECEIVE_POLICYDESCLIST](state, {policyDescList}){
    state.policyDescList = policyDescList
  },

  //品牌制造商
  [RECEIVE_TAGLIST](state, {tagList}){
    state.tagList = tagList
  },

  //居家好物
  [RECEIVE_CATELIST](state, {cateList}) {
    state.cateList = cateList
  },

  //分类
  [RECEIVE_CATEGORY](state, {categoryData}){
    state.categoryData = categoryData
  },

  //实物banner下的小轮播
  [RECEIVE_COLUMN](state, {column}){
    state.column = column
  },

  //recommend推荐
  [RECEIVE_RECOMMEND](state,{recommend}){
    state.recommend = recommend
  },

  //findmorese更多精彩
  [RECEIVE_FINDMORE](state, {findMore}){
    state.findMore = findMore
  },

  //实物臻品
  [RECEIVE_ZHENPIN](state, {zhenpin}){
    state.zhenpin = zhenpin
  },

  //严选LOOK
  [RECEIVE_YXLOOK](state, yxlook){
    state.yxlook = yxlook
  }



}
