 import {reqHeadCateList} from '../api'
 import {RECEIVE_HEADER} from './mutation-types'
export default {

  // 异步获取头部导航信息action
  async getHeaderNav ({commit}) {
    let result = await reqHeadCateList()
    if(result.code === 0){
      console.log(result)
      const headerList = result.data
      commit(RECEIVE_HEADER, {headerList})
    }
  },
}
