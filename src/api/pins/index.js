import request from '../../utils/request'

export default {
  //获取内容列表
  gethot(hotInfo) {
    return request({
      url: '/zhuanfa/recommend_api/v1/short_msg/hot',
      method: 'post',
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
      method: 'post',
      data: {
        cursor: '0',
        id_type: 4,
        limit: 20,
        sort_type: 400
      }
    })
  }

}