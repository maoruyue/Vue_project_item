 import {
   reqHeadCateList,
   reqItemList,
   reqPopularItemList,
   reqTopicList,
   reqPolicyDescList,
   reqTagList,
   reqCateList,
   reqCategory,
   reqColumn,
   reqRecommend,
   reqFindMore,
   reqZhenpin,
   reqYxLook,

} from '../api'
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

  // 异步获取“头部导航”信息action
  async getHeaderNav({commit}, cb) {
    let result = await reqHeadCateList()
    if (result.code === 0) {
      console.log(result)
      const headerList = result.data
      commit(RECEIVE_HEADER, {headerList})
      cb && cb()
    }
  },

  //异步获取 “新品首发” 活动信息
  async getNewList({commit}, cb) {
    let result = await reqItemList()
    if (result.code === 0) {
      const newItemList = result.data
      commit(RECEIVE_NEWITEMLISTS, {newItemList})
      cb && cb();
    }
  },

  //异步获取“人气推荐”活动信息
  async getPopularItemList({commit}) {
    let result = await reqPopularItemList()
    if (result.code === 0) {
      const popularItemList = result.data
      commit(RECEIVE_POPULARITEMLIST, {popularItemList})
    }
  },

  //异步获取“专题精选”
  async getTopicList({commit}) {
    let result = await reqTopicList()
    if (result.code === 0) {
      const topicList = result.data
      commit(RECEIVE_TOPICLIST, {topicList})
    }
  },


  //保证
  async getPolicyDescList({commit}, db) {
    let result = await reqPolicyDescList()
    if (result.code === 0) {
      const policyDescList = result.data
      commit(RECEIVE_POLICYDESCLIST, {policyDescList})
    }
    db && db()
  },

  //品牌制造商
  async getTagList({commit}) {
    const result = await reqTagList()
    if (result.code === 0) {
      const tagList = result.data
      commit(RECEIVE_TAGLIST, {tagList})
    }
  },

  //居家好物
  async getCateList({commit}) {
    const result = await reqCateList()
    if (result.code === 0) {
      const cateList = result.data
      commit(RECEIVE_CATELIST, {cateList})
    }
  },


  //分类Category 左侧列表
  async getCategory({commit}, cb) {
    const result = await reqCategory()
    if (result.code === 0) {
      const categoryData = result.data
      commit(RECEIVE_CATEGORY, {categoryData})
    }
    cb && cb()
  },


  //实物页面的推荐小图标
  async getColumn({commit}) {
    const result = await reqColumn()
    if(result.code === 0){
      const column = result.data
      commit(RECEIVE_COLUMN, {column})
    }
  },

  //实物推荐
  async getRecommend({commit}){
    const result = await reqRecommend()
    if(result.code === 0){
      const recommend = result.data
      commit(RECEIVE_RECOMMEND, {recommend})
    }
  },

  //实物更多推荐
  async getFindMore({commit}){
    const result = await reqFindMore()
    if(result.code === 0){
      const findMore = result.data
      commit(RECEIVE_FINDMORE, {findMore})
    }
  },

  //实物臻品
  async getZhenpin({commit}){
    const result = await reqZhenpin()
    if(result.code === 0){
      const zhenpin = result.data
      commit(RECEIVE_ZHENPIN, {zhenpin})
    }
  },


  //严选LOOK
  async getYxLook({commit}){
    const result = await reqYxLook()
    if(result.code === 0){
      const yxLook = result.data
      commit(RECEIVE_YXLOOK, {yxLook})
    }
  },



}
