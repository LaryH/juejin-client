import request from '../../utils/request'

export default {
  //获取内容列表
  gethot (hotInfo) {
    return request({
      url: '/recommend_api/v1/short_msg/hot',
      method: 'POST',
      data:hotInfo
    })
  }
}