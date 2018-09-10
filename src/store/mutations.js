/*
包含n个接口请求函数的模块
 */
import {
  RECEIVE_HEADER,

} from './mutation-types'

export default {
  //头部信息
  [RECEIVE_HEADER] (state, {headerList}) {
    state.headerList = headerList
  },

}
