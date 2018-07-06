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
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>

    <!-- swiper -->
    <div class="swiper-area">
      <van-swipe Lautoplay="1000">
        <van-swipe-item v-for="(item,index) in bannerPicArr" :key="index">
          <img :src="item.imageUrl" alt="" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
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
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/variable.scss";
.shopping-mall {
  .search-bar {
    height: 2.2rem;
    background-color: $BgColor;
    line-height: 2.2rem;
    overflow: hidden;
  }
  .search-input {
    width: 100%;
    height: 1.3rem;
    border: none;
    border-bottom: 1px solid #ffffff;
    background-color: $BgColor;
    color: #ffffff;
  }
  .location-icon {
    width: 1.6rem;
    height: 1.6rem;
    padding-top: 0.2rem;
    padding-left: 0.3rem;
  }
  .swiper-area{
    clear: both;
  }
}
</style>


