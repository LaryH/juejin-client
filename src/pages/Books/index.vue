<template>
  <div class="books-list">
    <div  v-for="book in booklist" :key="book.booklet_id">
      <a class="item" href="#">
        <div class="poster">
          <img :src="book.base_info.cover_img" class="imagew">
        </div>
        <div class="info">
          <div class="title">
            <a class="">{{book.base_info.title}}</a>
          </div>
          <div class="desc">{{book.base_info.summary}}</div>


          <div class="author">
            <div>
              <img :src="book.user_info.avatar_large" class="imaget">
            </div>
            <span class="name">{{book.user_info.user_name}}</span>
            <div style="text-indent:1em">
              <img src="./image/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgd.svg">
            </div>

            <div style="text-indent:1em" class="selfDescription">
              <span> {{book.user_info.job_title}}</span>
            </div>
          </div>


          <div>
            <div class="other">
              <div class="price">￥29.9</div>
              <span class="message">
                <span>{{book.section_count}}小节 .</span>
              </span>
              <span class="message">
                <span>13629</span>

                <span> 人已购买</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
//import books from './books.json'
export default {
  name: 'Books',
  data(){
    return{
      info:{
      category_id: "0",
      cursor: "0",
      limit: 20,
      },
      booklist:[]
    }
   
  },

  mounted(){
    this.getCategoryWu()
  },

  methods:{
      async getCategoryWu(){
        const result = await this.$API.books.getListbycAtegory(this.info);
        if(result.err_msg === "success") {
          this.booklist = result.data;  
        }
    },

  },




}
</script>

<style lang="less" scoped>
a{
  text-decoration: none;
}
.books-list{
  height: 100%;
  width: 700px;
  margin:auto;
  margin-top: 106px;
  

  .item:hover{
    background-color: rgb(90%,90%,90%,);
  }

  .item{
    width: 700px;
    height: 191px;
    display: flex;
    padding: 25px;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #e6e8e8;

    .poster{
      height: 140px;
      width: 100px;

      .imagew{
        height: 140px;
        width: 100px;
      }
    }


    .info{
      width: 550px;
      height: 140px;
      margin-left: 50px;

      .title{
        color: inherit;
        font-size: 20px;
        font-weight: 400;
      }

      .desc{
        margin-top: 5px;
        line-height: 20px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color: #71777c;
      }

      .author{
        display: flex;
        align-items: center;
        margin-top: 6px;
        overflow: hidden;

        .imaget{
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-right: 8px;
      }

      .name{
        display: inline-block;
        color: #000;
        font-size: 15px;
      }
      .selfDescription{
        color: #71777c;
      }

      }

      .other{
        display: flex;
        margin-top: 6px;
        align-items: center;
        .price{
          color: #ed7b11;
          font-size: 18px;
          margin-right: 15px;
        }

      .message{
        opacity: .6;
        font-size: 13px;
        color: #71777c;

      }
      }
    }
  }
}
</style>
