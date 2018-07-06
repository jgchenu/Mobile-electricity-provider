<template>
  <div class="shopping-mall">
    <!-- banner -->
    <div class="search-bar">
      <van-row >
        <van-col span="3">
          <img v-lazy="locationIcon" alt="location" class="location-icon">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini" class="search-button">查找</van-button>
        </van-col>
      </van-row>
    </div>

    <!-- swiper -->
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(item,index) in bannerPicArr" :key="index">
          <img :src="item.imageUrl" alt="pic" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- type-bar -->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img  v-lazy="cate.image">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>

    <!-- adBanner -->
      <div>
        <img v-lazy="adBanner" alt="adbanner" width="100%">
      </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$axios({
      url: "https://easy-mock.com/mock/5b3f56f118892e144d79f944/SmileVue/index",
      method: "get"
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.category = res.data.data.category;
          this.adBanner=res.data.data.advertesPicture.PICTURE_ADDRESS;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      msg: "Shopping Mall",
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArr: [
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg"
        }
      ],
      category: [],
      adBanner:'',
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/variable.scss";
.shopping-mall {
  .search-bar {
    height: 2.2rem;
    background-color: $IndexColor;
    line-height: 2.2rem;
    overflow: hidden;
  }
  .search-input {
    width: 100%;
    height: 1.3rem;
    border: none;
    border-bottom: 1px solid #ffffff;
    background-color: $IndexColor;
    color: #ffffff;
  }
  .location-icon {
    width: 1.6rem;
    height: 1.6rem;
    padding-top: 0.2rem;
    padding-left: 0.3rem;
  }
  .swiper-area {
    clear: both;
    max-height: 12rem;
    overflow: hidden;
  }
  .type-bar {
    background-color: #ffffff;
    margin: 0 0.3rem 0.3rem 0.3rem;
    border-radius: 0.3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    div {
      padding: 0.3rem;
      font-size: 12px;
      text-align: center;
      img{
        width: 3rem;
      }
    }
  }
}
</style>


