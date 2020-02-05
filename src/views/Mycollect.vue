<template>
  <div>
    <div class="dyh">
      <!--第一行-->
      <router-link to="/Sm">
        <span>
          <img class="fh" src="/my_img/fh.png" />
        </span>
      </router-link>
      <span class="llls" @click="show(1)">浏览历史</span>
      <span class="wdsc" @click="show(2)">我的收藏</span>
      <span @click="clear">清空</span>
    </div>
    <!--第一行end-->
    <div class="deh" v-if="isShow==1">
      <!--第二行-->
      <!-- <span>
        <img src="/my_img/zwnr2.png" />
      </span>
      <span>浏览历史暂无内容</span>-->
      <div
        class="recbody van-hairline--bottom"
        v-for="(item,i) of list1"
        :key="i"
        :data-copid="item.hipid"
        @click="to_news"
      >
        <div>
          <p class="title1">{{item.hiptitle}}</p>
          <p class="title2">{{item.hipremaek}}</p>
        </div>
        <img :src="item.hiartimg" class="imgstyle" />
      </div>
    </div>
    <!--第二行end-->
    <div class="deh" v-else>
      <!--第二行-->
      <!-- <span><img src="/my_img/zwnr2.png" /></span>
      <span>我的收藏暂无内容</span>-->
      <div
        class="recbody van-hairline--bottom"
        v-for="(item,i) of list"
        :key="i"
        :data-copid="item.copid"
        @click="to_news"
      >
        <div>
          <p class="title1">{{item.coptitle}}</p>
          <p class="title2">{{item.copremaek}}</p>
        </div>
        <img :src="item.coartimg" class="imgstyle" />
      </div>
    </div>
    <!--第二行end-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      list1: [],
      isShow: 1
    };
  },
  methods: {
    clear() {
      var url = "/clear";
      // console.log(1);
      this.axios.get(url).then(res => {
        this.loadhistoryMore();
      });
    },
    to_news(event) {
      var num = event.currentTarget.dataset.copid;
      this.$router.push(`/news/${num - 1}`);
      // console.log(this.num);
    },
    show(a) {
      this.isShow = a;
    },
    loadMore() {
      var url = "/findsc";
      this.axios.get(url).then(res => {
        var rows = res.data.data;
        this.list = rows;
      });
    },
    loadhistoryMore() {
      var url = "/findhi";
      this.axios.get(url).then(res => {
        var rows = res.data.data;
        this.list1 = rows;
      });
    }
  },
  created() {
    this.loadMore();
    this.loadhistoryMore();
  }
};
</script>
<style scoped>
.dyh {
  width: 100%;
  height: 46px;
  background-color: #fff;
  display: flex;
} /* 第一行 */
.dyh img:first-child {
  margin-left: 17px;
  margin-top: 15.5px;
} /* 返回 */
.dyh span:nth-child(2) {
  margin-left: 65px;
} /* 浏览历史 */
.dyh span:nth-child(3) {
  margin-left: 20px;
} /* 我的收藏 */
.dyh span:nth-child(2),
.dyh span:nth-child(3) {
  line-height: 46px;
  font-size: 18px;
} /* 浏览历史和我的收藏字体大小 */
.dyh span:nth-child(4) {
  display: block;
  font-size: 13px;
  margin: 10px 0 0 50px;
  border: 1px solid #4d82b7;
  width: 40px;
  height: 22px;
  line-height: 22px;
  text-align: center;
} /* 清空 */
.deh {
  height: 600px;
  background-color: #eff3fc;
  padding: 11px;
} /* 第二行 */
.deh img:first-child {
  margin: 255px 0 0 120px;
}
.deh span:last-child {
  display: flex;
  margin: 5px 0 0 115px;
  padding-bottom: 300px;
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
</style>