import request from '../../utils/request'

export default {
  //获取内容列表
  gethot(hotInfo) {
    console.log(hotInfo)
    return request({
      url: '/zhuanfa/recommend_api/v1/short_msg/hot',
      method: 'GET',
      data: {
        cursor: '0',
        id_type: 4,
        limit: 3,
        sort_type: 400
      }
    })
  },
 
  gethome(info) {
    return request({
      url: '/zhuanfa/recommend_api/v1/short_msg/recommend',
      method: 'GET',
      data: {
        cursor: '0',
        id_type: 4,
        limit: 3,
        sort_type: 400
      }
    })
  }

}