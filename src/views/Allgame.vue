<template>
  <div>
    <!-- 全部 -->
    <van-sticky>
      <div class="tabbar">
        <span style="font-weight:bold;font-size:19px;line-height:35px;padding-left:5px;">全部</span>
        <van-icon @click="goback" name="cross" />
      </div>
    </van-sticky>
    <div class="body">
      <van-search
        shape="round"
        style="padding-top:0;border-radius:10px;"
        placeholder="搜一搜游戏社区"
        v-model="value"
      />
      <!-- 导航区域 -->
      <van-sticky :offset-top="57">
        <ul class="navs">
          <li :class="{active: active===0}" @click="scrollTo(0)">推荐</li>
          <li :class="{active: active===1}" @click="scrollTo(1)">游戏</li>
          <li :class="{active: active===2}" @click="scrollTo(2)">小工具</li>
          <li :class="{active: active===3}" @click="scrollTo(3)">手游</li>
        </ul>
      </van-sticky>
      <!-- 内容区域 -->
      <div class="content">
        <div class="content1">
          <div class="content11">
            <div class="content2">
              <van-image
                round
                fit="cover"
                radius="28"
                src="../../tuijian-img/320 (2).jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;text-align:center;" class="van-ellipsis">饥荒</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="cover"
                radius="28"
                src="../../tuijian-img/320 (3).jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px; margin-top:5px;text-align:center;" class="van-ellipsis">沉浮</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="contain"
                radius="28"
                src="../../tuijian-img/timg.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >堡垒之夜</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="cover"
                radius="28"
                src="../../tuijian-img/320 (1).jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >乱动机战队</div>
            </div>
          </div>
          <div class="content11">
            <div class="content2">
              <van-image
                round
                fit="contain"
                radius="28"
                src="../../tuijian-img/j3.jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;text-align:center;" class="van-ellipsis">剑网三</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/4a673a651f150ba2609a6070cc18f0b2.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >权力的游戏:凛冬将至</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/3914bced0930d46c2de6b6b832c462a4.jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;text-align:center;" class="van-ellipsis">猎人</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/7ead85ab70cd9650580fefc646fbb58e.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >记忆重构</div>
            </div>
          </div>
          <div
            style="border:1px solid #808080; width:85%;text-align:center;margin-left:24px;margin-top:5px;"
          >
            <p
              style="margin-top:3px;margin-bottom:3px;font-size:13px;text-align:center;padding:0;font-weight:500"
            >展开更多</p>
          </div>
        </div>
        <div class="content1">
          <p>游戏</p>
          <div class="content11">
            <div class="content2">
              <img src="../../public/tuijian-img/lol (1).png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >英雄联盟</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="scale-down"
                radius="28"
                src="../../tuijian-img/qqfc1.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px; margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >QQ飞车</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="contain"
                radius="28"
                src="../../tuijian-img/timg.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >堡垒之夜</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="contain"
                radius="28"
                src="../../tuijian-img/timg1.jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;text-align:center;" class="van-ellipsis">剑灵</div>
            </div>
          </div>
          <div class="content11">
            <div class="content2">
              <van-image
                round
                fit="cover"
                radius="28"
                src="../../tuijian-img/j3.jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;text-align:center;" class="van-ellipsis">剑网三</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="cover"
                radius="28"
                src="../../tuijian-img/320 (1).jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;" class="van-ellipsis">乱动机战队</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="cover"
                radius="28"
                src="../../tuijian-img/dnf.png"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;" class="van-ellipsis">地下城与勇士</div>
            </div>
            <div class="content2">
              <van-image
                round
                fit="cover"
                radius="28"
                src="../../tuijian-img/320 (4).jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;" class="van-ellipsis">使命召唤OL</div>
            </div>
          </div>
          <div
            style="border:1px solid #808080; width:85%;text-align:center;margin-left:24px;margin-top:5px;"
          >
            <p
              style="margin-top:3px;margin-bottom:3px;font-size:13px;text-align:center;padding:0;font-weight:500"
            >展开更多</p>
          </div>
        </div>
        <div class="content1">
          <p>小工具</p>
          <div class="content11">
            <div class="content2">
              <img src="../../public/tuijian-img/QQ截图20191220153307.png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >LOL战绩</div>
            </div>
            <div class="content2">
              <img src="../../public/tuijian-img/QQ截图20191220153338.png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >DNF战绩</div>
            </div>
            <div class="content2">
              <img src="../../public/tuijian-img/QQ截图20191220153351.png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >CF战绩</div>
            </div>
            <div class="content2">
              <img src="../../public/tuijian-img/QQ截图20191220153401.png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >云顶战绩</div>
            </div>
          </div>
          <div class="content11">
            <div class="content2">
              <img src="../../public/tuijian-img/QQ截图20191220153412.png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >LOL资讯</div>
            </div>
            <div class="content2">
              <img src="../../public/tuijian-img/QQ截图20191220153422.png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >每日一笑</div>
            </div>
            <div class="content2">
              <img src="../../public/tuijian-img/QQ截图20191220153433.png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >召唤师查询</div>
            </div>
            <div class="content2">
              <img src="../../public/tuijian-img/QQ截图20191220153447.png" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >篝火微站</div>
            </div>
          </div>
        </div>
        <div class="content1">
          <p>手游</p>
          <div class="content11">
            <div class="content2">
              <van-image round radius="28" src="../../tuijian-img/timg2.jpg" class="imgstyle1" />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >英雄联盟手游</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/cda667f9d72a6059ab4089d92434349b013bbacf.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >天涯明月刀手游</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/130-160513143221L8.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >三国杀手游</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/2019101649322633_APP.png"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >英雄联盟电竞经理</div>
            </div>
          </div>
          <div class="content11">
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/b3c01859b13b3b6f71a5943515839a85.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >使命召唤手游</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/8d7468ab6c37cc467961fa3ff9b98c5c.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >荒野乱斗</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/643a5f5f1bad769ab6e1bd19335873d7.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >龙族幻想</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/b65bcb2c3f5ba3a88d6a84d02cef4417.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >我的起源</div>
            </div>
          </div>
          <div class="content11">
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/528eeaa5ed669e11817fff72dfd8cffa.png"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >中国式家长</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/0ad278a36729fa96b153d734a58f5067.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >英雄就是我</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/95a2dc449596d68f82bce2da51456350.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >王牌战士</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/307497253f9502f499ee33c865a1d0f8.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >多多自走棋</div>
            </div>
          </div>
          <div class="content11">
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/6e530c5c2e1a5fbfdb4b9e5c177a1a8b.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >雪鹰领主</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/3914bced0930d46c2de6b6b832c462a4.jpg"
                class="imgstyle1"
              />
              <div style="font-size:12px;margin-top:5px;text-align:center;" class="van-ellipsis">猎人</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/7ef5d340f6a8fc62eedf1372d2bb2a70.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >隐形守护者</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/37e7a1a32c7558685cb67c9a71c05d6e.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >我的侠客</div>
            </div>
          </div>
          <div class="content11">
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/4a673a651f150ba2609a6070cc18f0b2.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >权力的游戏:凛冬将至</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/7ead85ab70cd9650580fefc646fbb58e.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >记忆重构</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/6c52fdb81ab10f9a81fd10d0047e42b7.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >元素地牢</div>
            </div>
            <div class="content2">
              <van-image
                round
                radius="28"
                src="../../tuijian-img/dcf4442a202fe85092d22f3088e99934.jpg"
                class="imgstyle1"
              />
              <div
                style="font-size:12px;margin-top:5px;text-align:center;"
                class="van-ellipsis"
              >神明在上</div>
            </div>
          </div>
          <div
            style="border:1px solid #808080; width:85%;text-align:center;margin-left:24px;margin-top:5px;"
          >
            <p
              style="margin-top:3px;margin-bottom:3px;font-size:13px;text-align:center;padding:0;font-weight:500"
            >展开更多</p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      active: 0, // 当前激活的导航索引
      value: ""
    };
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.onScroll, false);
  },
  destroy() {
    // 移除监听器
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    // 点击x返回上一级
    goback() {
      this.$router.go(-1);
    },
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll(".content .content1");
      // 所有锚点元素的 offsetTop
      const offsetTopArr = [];
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop);
      });
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 定义当前点亮的导航下标
      let navIndex = 0;
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n] - 80) {
          navIndex = n;
        }
      }
      this.active = navIndex;
    },
    // 跳转到指定索引的元素
    scrollTo(index) {
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop =
        document.querySelector(`.content .content1:nth-child(${index + 1})`)
          .offsetTop - 75;
      // 获取当前 offsetTop
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 定义一次跳 50 个像素，数字越大跳得越快
      const STEP = 50;
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp();
      } else {
        // 往下滑
        smoothDown();
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += 50;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          requestAnimationFrame(smoothDown);
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          requestAnimationFrame(smoothUp);
        }
      }
    }
  }
};
</script>
<style scoped>
.body {
  padding: 0 10px 10px;
}
/* 顶部样式 */
.tabbar {
  width: 350px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 12px;
}
.tabbar > .van-icon {
  padding-top: 8px;
}
.body div[data-v-2b0ea249] >>> .van-sticky--fixed {
  padding-left: 12px;
  padding-right: 12px;
}
/* 内容区的样式 */
.content {
  height: 600px;
  background-color: white;
  width: 100%;
}
.content1 {
  width: 340px;
  font-size: 15px;
  padding: 5px;
}
.content11 {
  display: flex;
  justify-content: space-between;
}
.content1 p {
  padding-left: 19px;
  font-weight: bold;
}
.content2 {
  height: 80px;
  width: 60px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
}
.imgstyle1 {
  width: 45px;
  height: 45px;
  margin: 0 auto;
}
/* 导航栏的样式 */
.navs {
  width: 95%;
  top: 50px;
  left: 0px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-left: 5px;
}
.navs li {
  padding: 0 15px;
  line-height: 1.6;
  font-size: 15px;
}
/* 当导航被点亮后样式 */
.navs .active {
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  border-bottom: 2px solid #ffc900;
}
</style>