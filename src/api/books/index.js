import request from "@/utils/request";

export default {
  getListbycAtegory(info){
     return request({
       url:"/zhuanfa/booklet_api/v1/booklet/listbycategory",
       method:"post",
       data:info
     })
  }
}








