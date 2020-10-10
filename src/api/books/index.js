import request from "@/utils/request";
import books from './books.json'
export default {
  getListbycAtegory(bookletId){
    // return request({
    //   url:"/booklet_api/v1/booklet/listbycategory",
    //   method:"POST",
    //   data:{
    //     booklet_id: bookletId,
    //   }
    // })
    return books;
  }
}



//https://apinew.juejin.im/booklet_api/v1/booklet/listbycategory





