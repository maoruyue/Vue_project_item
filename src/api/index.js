/*
  发送ajax的，与后台交互的模块
 */
import ajax from './ajax'

//首页导航接口请求函数
export const reqHeadCateList = () => ajax("/headCateList")
export const reqItemList = () => ajax("/newItemList")
export const reqPopularItemList = () => ajax("/popularItemList")
export const reqTopicList = () => ajax("/topicList")
export const reqPolicyDescList = () => ajax('/policyDescList')
export const reqTagList = () => ajax('/tagList')
export const reqCateList = () => ajax('/cateList')
export const reqCategory = () => ajax('/categoryData')
export const reqColumn = () => ajax('/column')
export const reqRecommend = () => ajax('/recommend')
export const reqFindMore = () => ajax('/findMore')
export const reqZhenpin = () => ajax('/zhenpin')
export const reqYxLook = () => ajax('/yxLook')





