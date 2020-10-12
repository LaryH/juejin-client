import request from "@/utils/request";
import books from './books.json'
export default {
  getListbycAtegory(info){
     //return request({
      // url:"/zhuanfa/booklet_api/v1/booklet/listbycategory",
       //method:"GET",
       //data:info
    // })
    return books;
  }
}



//https://apinew.juejin.im/booklet_api/v1/booklet/listbycategory





