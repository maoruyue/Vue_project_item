/*
  发送ajax的，与后台交互的模块
 */
import ajax from './ajax'

//获取data数据
export const reqHome = () =>　ajax('/Home')
