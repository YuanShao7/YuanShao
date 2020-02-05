<template>
  <div class="container">
    <!--头部 -->
    <div class="xiding van-hairline--top" id="container" :class="isFixed==true?'isFixed':''">
      <van-image @click="back" class="timg" src="/tuijian-img/返回.png" />
      <span>详情</span>
      <van-image is-link @click="showPopup" class="timg1" src="/tuijian-img/全部.png" />
      <!-- 分享界面 -->
      <van-popup v-model="show" position="bottom" :style="{ height: '32%' }">
        <van-grid :border="false" :column-num="5">
          <van-grid-item>
            <van-image src="/图标/社区 .png" class="imgsize" />
            <p>社区</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="/图标/微信.png" class="imgsize" />
            <p>微信</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="/图标/朋友圈.png" class="imgsize" />
            <p>朋友圈</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="/图标/QQ.png" class="imgsize" />
            <p>QQ</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="/图标/QQ空间.png" class="imgsize" />
            <p>QQ空间</p>
          </van-grid-item>
        </van-grid>
        <van-grid :border="false" :column-num="5">
          <van-grid-item>
            <van-image src="/图标/链接.png" class="imgsize" />
            <p>复制链接</p>
          </van-grid-item>
        </van-grid>
      </van-popup>
    </div>
    <!-- 内容 -->
    <!-- 置顶图片 -->
    <van-image :src="list.topimg" class="imgstyle" />
    <div class="body">
      <!-- 标题 -->
      <p>{{list.etitle}}</p>
      <div class="title">
        <span style="display:flex;">
          <van-image round :src="list.userimg" class="imgstyle1" />
          <div class="user">{{list.username}}</div>
        </span>
        <span class="data">{{list.edate}}</span>
      </div>
      <div class="text" v-html="list.mainbody"></div>
    </div>
    <div class="foot">
      <div class="foot1" @click="gocom">
        <div class="foot2">
          <van-image round radius="5" src="../../tuijian-img/320.jpg" class="imgstyle3" />
          <span>
            <p class="first">英雄联盟</p>
            <p class="second">192.2万人在讨论</p>
          </span>
        </div>
        <van-image class="timg3" src="/图标/箭头.png" alt />
      </div>
      <div class="pinlun">
        <span>全部评论</span>
        <div class="ping">
          <div class="ping1">
            <div class="ping2">
              <van-image round width="25px" height="25px" :src="list2.tzimg" />
              <span class="ping3">
                <span class="item1">{{list2.tzuser}}</span>
                <span class="item2">{{list2.tzdate}}</span>
                <span class="item3">{{list2.tztitle}}</span>
              </span>
            </div>
            <div>
              <span @click="like">
                <van-image v-if="isClick==0" width="20px" src="/图标/点赞.png" />
                <van-image v-if="isClick==1" width="20px" src="/图标/点赞 (1).png" />
              </span>
              <span style="color:#696969;margin-left:5px;position:relative;top:-2px">{{dianzan}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <van-tabbar style="height:40px;" active-color="#000" class="van-hairline--top">
      <van-tabbar-item class="dd">
        <input type="search" class="shuru" placeholder="我也来说两句..." @click="keyboad" ref="inputArea" />
        <van-image
          style="width:23px;margin-top:-5px; margin-left:-3px;margin-right:12px"
          src="/page_img/pl.png"
        ></van-image>
        <span
          @click="shoucang"
          :data-pid="list3.pid"
          :data-ptitle="list3.ptitle"
          :data-premaek="list3.premark"
          :data-artimg="list3.artimg"
        >
          <van-image v-if="isClick1==0" width="23px" src="/图标/收 藏  (1).png"></van-image>
          <van-image v-if="isClick1==1" width="23px" src="/图标/收 藏 .png"></van-image>
        </span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  props: ["num"],
  data() {
    return {
      list: [],
      list2: [],
      list3: [],
      isFixed: false, //吸顶
      show: false, //分享
      dianzan: 0, //点赞数
      isClick: "", //是否选中
      isClick1: "" //是否收藏
    };
  },
  methods: {
    keyboad() {
      this.$refs.inputArea.focus();
    },
    shoucang(e) {
      if (this.isClick1 == 0) {
        this.isClick1 = 1;
        this.$toast.success("已收藏");
      } else {
        this.isClick1 = 0;
        this.$toast.success("已取消收藏");
      }
      var pid = e.currentTarget.dataset.pid;
      var ptitle = e.currentTarget.dataset.ptitle;
      var premaek = e.currentTarget.dataset.premaek;
      var artimg = e.currentTarget.dataset.artimg;
      var url = "/shoucang";
      // console.log(pid);
      var obj = { pid: pid, ptitle: ptitle, premaek: premaek, artimg: artimg };
      this.axios.get(url, { params: obj }).then(res => {});
    },
    // 点赞
    like() {
      if (this.isClick == 0) {
        this.isClick = 1;
        this.dianzan += 1;
      } else {
        this.isClick = 0;
        this.dianzan -= 1;
      }
    },
    gocom() {
      this.$router.push("/com");
    },
    showPopup() {
      this.show = true;
    },
    back() {
      this.$router.go(-1);
    },
    loadMore() {
      var url = "/";
      this.axios.get(url).then(res => {
        var rows = res.data.data;
        this.list3 = rows[this.num];
        // console.log(this.list3);
      });
    },
    loadNews() {
      var url = "/news";
      this.axios.get(url).then(res => {
        var rows = res.data.data;
        // console.log(rows)
        this.list = rows[this.num];
        // console.log(this.list)
      });
    },
    loadPl() {
      var url = "/tpl";
      this.axios.get(url).then(res => {
        var rows1 = res.data.data;
        this.list2 = rows1[this.num];
        // console.log(this.list2);
      });
    },
    handleScroll() {
      this.$nextTick(() => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let headerTop = document.getElementById("container");
        if (scrollTop > 0) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      });
    }
  },
  created() {
    this.loadPl();
    this.loadNews();
    this.loadMore();
  },
  // 在mounted调用
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 以及在最后销毁这个方法
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style  scoped>
.xiding {
  z-index: 4;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0);
  /* position:absolute; */
  position: fixed;
}
.xiding span {
  font-size: 15px;
  margin-top: 12px;
  display: none;
}
.timg {
  width: 18px;
  height: 18px;
  margin: 8px;
  margin-top: 15px;
}
.timg1 {
  width: 22px;
  height: 6px;
  margin: 9px;
  margin-top: 19px;
}
.imgsize {
  width: 20px;
  height: 20px;
}
.van-grid-item {
  margin-top: 15px;
}
.van-grid-item p {
  font-size: 12px;
  color: #696969;
}
.isFixed {
  position: fixed;
  top: 0px;
  z-index: 4;
  height: 45px !important;
  background: rgba(255, 255, 255, 1);
  transition: 1s;
}
.isFixed span {
  display: inline;
}
.imgstyle {
  width: 100%;
  height: 190px;
}
.body {
  padding: 12px;
  color: #696969;
  border-bottom: 1px solid #ccc;
}
.body > p {
  margin-top: 2px;
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
.imgstyle1 {
  width: 20px;
  height: 20px;
}
.user {
  font-size: 12px;
  margin-left: 8px;
  padding-top: 2px;
}
.data {
  font-size: 12px;
  margin-right: 20px;
}
.title {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.text {
  letter-spacing: 1px;
  font-size: 15px;
  text-indent: 2em;
  line-height: 28px;
  padding-bottom: 10px;
}
.text >>> img {
  width: 100%;
  height: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
}
.foot {
  background-color: #ebebeb;
}
.foot1 {
  background-color: #fff;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.foot2 {
  display: flex;
  justify-content: space-between;
}
.imgstyle3 {
  width: 110px;
  height: 60px;
}
.first {
  font-weight: bolder;
  font-size: 15px;
  margin: 10px 10px 0;
}
.second {
  font-size: 13px;
  margin: 2px 8px 7px;
  color: #696969;
}
.timg3 {
  width: 13px;
  height: 13px;
  margin-top: 22px;
}
.pinlun {
  background-color: #fff;
  padding: 12px;
}
.pinlun > span {
  font-size: 13px;
  font-weight: bold;
}
.ping {
  margin-top: 10px;
}
.ping1 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.ping2 {
  display: flex;
}
.ping3 {
  display: flex;
  flex-flow: column;
}
.item1 {
  margin: 0 6px 6px;
  font-size: 13px;
}
.item2 {
  margin: 0 6px 6px;
  font-size: 12px;
  color: #696969;
}
.item3 {
  font-size: 13px;
  color: #696969;
  margin: 6px;
}
.dd {
  display: flex;
  justify-content: space-between;
  margin-right: -10px;
}
.shuru {
  width: 265px;
  height: 28px;
  border: 0;
  background: #ccc;
  position: relative;
  left: -20px;
  top: -5px;
  padding-left: 15px;
  border-radius: 3px;
}
</style>