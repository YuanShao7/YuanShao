<template>
  <div class="rec">
    <!-- 背景图片 -->
    <div class="bg"></div>
    <!-- 半透明遮罩层 -->
    <div class="bg1"></div>
    <!--推荐(recommend)面板组件-->
    <!-- 头部 -->
    <div class="recheader">
      <div class="recheader-item">
        <span class="mysize">推荐</span>
        <img src="/图标/搜索.png" class="serachimg" @click="gosearch" />
      </div>
    </div>
    <!--可滑动导航栏 -->
    <div class="container" id="container" :class="isFixed==true?'isFixed':''">
      <div class="inner">
        <img src="../../public/tuijian-img/lol (1).png" class="imgstyle1" @click="gocom1" />
        <van-image
          round
          fit="scale-down"
          radius="28"
          src="../../tuijian-img/qqfc1.jpg"
          class="imgstyle1"
        />
        <van-image
          round
          fit="contain"
          radius="28"
          src="../../tuijian-img/timg.jpg"
          class="imgstyle1"
        />
        <van-image
          round
          fit="contain"
          radius="28"
          src="../../tuijian-img/timg1.jpg"
          class="imgstyle1"
        />
        <van-image
          round
          fit="contain"
          radius="28"
          src="../../tuijian-img/j3.jpg"
          class="imgstyle1"
        />
        <img src="../../public/tuijian-img/dnf.png" class="imgstyle1" />
        <van-image
          round
          radius="28"
          src="../../tuijian-img/cda667f9d72a6059ab4089d92434349b013bbacf.jpg"
          class="imgstyle1"
        />
        <van-image
          round
          radius="28"
          src="../../tuijian-img/2019101649322633_APP.png"
          class="imgstyle1"
        />
        <van-image
          round
          fit="cover"
          radius="28"
          src="../../tuijian-img/320 (1).jpg"
          class="imgstyle1"
        />
        <van-image
          round
          fit="cover"
          radius="28"
          src="../../tuijian-img/320 (4).jpg"
          class="imgstyle1"
        />
      </div>
      <div class="inner2" @click="goall">
        <div class="inner3">
          <van-image src="../../tuijian-img/全部.png" class="imgstyles" />
        </div>
      </div>
    </div>
    <!--内容区域 -->
    <div class="body">
      <!--下拉刷新-->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="zhanshi" @click="gocom">
          <img src="../../public/page_img/page7_2.jpg" alt />
          <p class="zhanshi1">S9赛季奖励已全部发放完毕，各位召唤师们请查收</p>
          <p class="zhanshi2">英雄联盟</p>
        </div>
        <div
          class="recbody van-hairline--bottom"
          v-for="(item,i) of list"
          :key="i"
          :data-pid="item.pid"
          :data-ptitle="item.ptitle"
          :data-premaek="item.premark"
          :data-artimg="item.artimg"
          @click="to_news"
        >
          <div>
            <p class="title1">{{item.ptitle}}</p>
            <p class="title2">{{item.premark}}</p>
          </div>
          <img :src="item.artimg" class="imgstyle" />
        </div>
        <div class="nomore">没有更多了...</div>
      </van-pull-refresh>
    </div>
    <!-- 底部导航栏 -->
    <tabbar class="tabbar" id="tabbar" :class="isHide==true?'isHide':''"></tabbar>
  </div>
</template>
<script>
// 引入底部导航栏组件
import tabbar from "../components/tabbar.vue";
export default {
  data() {
    return {
      list: [], // 推荐列表
      isLoading: false,
      isFixed: false, //动态导航栏
      num: -1,
      isHide: false //底部导航栏是否隐藏
    };
  },
  // 注册组件
  components: {
    tabbar: tabbar
  },
  methods: {
    // 跳转游戏界面
    goall() {
      this.$router.push("/allgame");
    },
    // 跳转社区界面
    gocom1() {
      this.$router.push("/com");
    },
    gocom() {
      this.$router.push("/news/6");
    },
    // 详情界面
    to_news(event) {
      this.num = event.currentTarget.dataset.pid;
      this.$router.push(`/news/${this.num - 1}`);
      // var pid = this.num;
      // console.log(this.num);
      // console.log(pid);
      // var ptitle = event.currentTarget.dataset.ptitle;
      // var premaek = event.currentTarget.dataset.premaek;
      // var artimg = event.currentTarget.dataset.artimg;
      // console.log(artimg);
      // var url = "/history";
      // var obj = { pid: pid, ptitle: ptitle, premaek: premaek, artimg: artimg };
      // this.axios.get(url, { params: obj }).then(res => {});
    },
    // 获取数据
    loadMore() {
      var url = "/";
      this.axios.get(url).then(res => {
        var rows = res.data.data;
        this.list = rows;
      });
    },
    // 跳转搜索界面
    gosearch() {
      this.$router.push("search");
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    //在methods监控滚动时间
    handleScroll() {
      this.$nextTick(() => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let headerTop = document.getElementById("container");
        if (scrollTop > 50) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      });
    },
    tabbarScroll() {
      var fix_height = 200;
      var nav = document.documentElement.scrollTop || document.body.scrollTop;
      var navTop = nav.offsetTop;
      var winTop_1 = 130;
      this.$nextTick(() => {
        var winTop_2 =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (winTop_2 > winTop_1) {
          this.isHide = true;
        } else {
          this.isHide = false;
        }
      });
      // var beforeScrollTop=document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(beforeScrollTop)
      // this.$nextTick(() => {
      //     var afterScrollTop=document.documentElement.scrollTop || document.body.scrollTop;
      //     console.log(afterScrollTop)
      //     var delta=afterScrollTop-beforeScrollTop;
      //     if(delta>0){
      //         if(afterScrollTop>0){
      //             this.isHide=false;
      //         }
      //     }else if(delta<0){
      //         this.isHide=true;
      //     }
      //     beforeScrollTop=afterScrollTop;
      // })
    }
  },
  created() {
    this.loadMore();
  },
  // 监听滚动事件
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.tabbarScroll);
  },
  // 以及在最后销毁这个方法
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.tabbarScroll);
  }
};
</script>
<style  scoped>
.rec {
  font-family: Verdana, sans-serif;
}
.bg {
  width: 375px;
  height: 400px;
  background-image: url(../../public/page_img/page7_2.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: absolute;
  top: -100px;
  left: 0px;
  z-index: -2;
  filter: blur(15px);
  overflow: hidden;
}
.bg1 {
  width: 100%;
  height: 930px;
  background: #ddd;
  opacity: 0.6;
  position: absolute;
  z-index: -1;
}
.recheader {
  padding: 8px 8px 3px 11px;
}
.recheader-item {
  border-bottom: 1px solid #808080;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
}
.mysize {
  font-size: 21px;
  font-weight: bold;
}
.serachimg {
  width: 16px;
  height: 16px;
  padding-top: 8px;
  padding-right: 2px;
}
.container {
  width: 100%;
  height: 60px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.inner {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: calc(180px + 17px);
}
.inner2 {
  width: 70px;
  height: 53px;
  padding-right: 7px;
  padding-left: 7px;
  padding-top: 5px;
}
.imgstyles {
  padding-left: 10px;
  width: 26px;
  height: 7px;
  padding-top: 20px;
}
.inner3 {
  background-color: rgb(222, 225, 230);
  border-radius: 100%;
  width: 45px;
  height: 45px;
}
.imgstyle1 {
  width: 45px;
  height: 45px;
  padding-right: 10px;
  padding-left: 11px;
  padding-top: 5px;
}
/* 吸顶后样式 */
.isFixed {
  position: fixed;
  top: 0px;
  z-index: 4;
  height: 52px !important;
  background: #ebebeb;
}
.isFixed .imgstyle1 {
  transform: scale(0.8);
  transition: 0.6s;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
}
.isFixed .inner2 {
  transform: scale(0.8);
  transition: 0.6s;
  padding-right: 6px;
  padding-left: 6px;
  padding-top: 4px;
}
.body {
  padding: 5px 12px 0px;
}
.zhanshi {
  margin-bottom: 4px;
  background-color: #fff;
  margin-bottom: 10px;
}
.zhanshi img {
  width: 100%;
  height: 210px;
}
.zhanshi1 {
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 6px;
  margin-left: 10px;
}
.zhanshi2 {
  font-size: 12px;
  color: gray;
  margin: 1px;
  margin-left: 10px;
  padding-bottom: 5px;
}
.recbody {
  display: flex;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.recbody > div {
  padding: 9px;
}
.title1 {
  font-size: 15px;
  margin: 1px;
  margin-bottom: 6px;
}
.title2 {
  font-size: 12px;
  color: gray;
  margin: 1px;
}
.imgstyle {
  width: 100px;
  height: 65px;
  overflow: hidden;
  display: flex;
  margin-top: 8px;
  margin-right: 10px;
}
/*修改弹窗样式 */
.text {
  font-size: 2rem;
}
.nomore {
  text-align: center;
  font-size: 13px;
  color: gray;
  padding: 5px 0 0 5px;
}
.tabbar {
  position: fixed;
  transition: top 0.2s;
  top: 93.6%;
}
/* 隐藏效果 */
.isHide {
  top: 100%;
}
</style>