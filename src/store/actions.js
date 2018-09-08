 import {reqProduct} from '../api'
 import {Product} from './mutation-types'
export default {
  //
  // //异步获取首页home数据
  // async getHome ({commit}){
  //   const result = await reqHome()
  //   commit({Home})
  // }
  async getProduct({commit,}, ){
    const result = await reqProduct()
    commit({Product})
  }
}
