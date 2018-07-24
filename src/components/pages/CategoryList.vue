<template>
    <div class="categoryList">
        <div class="navBar">
            <van-nav-bar title="类别列表" left-arrow />
        </div>
        <div>
            <van-row>
                <van-col span="6">
                    <div class="leftNav">
                        左侧导航
                    </div>
                </van-col>
                <van-col span="18">
                    右侧列表
                </van-col>

            </van-row>
        </div>
    </div>
</template>

<script>
import url from "@/serviceAPI.config.js";
import { Toast } from "vant";

export default {
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.$axios({
        url: url.getCategoryList,
        method:'get'
      })
        .then(res => {
          console.log(res);
          if (res.data.code === 200 && res.data.message) {
          } else {
            Toast("服务器错误，数据获取失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.categoryList {
  .leftNav {
  }
}
</style>

