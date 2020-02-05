<template>
  <div>
    <div><!--大框-->
      <div class="dyh"><!--第一行-->
      <!-- 如果消息、好友显示，好友内容隐藏，如果好友、消息显示，消息内容隐藏 -->
        <span @click="back"><img class="fh" src="/my_img/fh.png" /></span>
        <div @click="look(1)" class="xxhy1">消息</div>
        <div @click="look(2)" class="xxhy2">好友</div>
        <span><img class="tj" src="/my_img/tj.png" /></span>
      </div><!--第一行end-->
      <div v-if="isLook==1"><!--消息-->
        <div class="deh"><!--第二行-->
          <ul>
            <li><img src="/my_img/xx_pl1.png" /></li>
            <li><img src="/my_img/xx_zan.png" /></li>
            <li><img src="/my_img/xx_fs.png" /></li>
          </ul>
          <ul>
            <li>评论</li>
            <li>赞</li>
            <li>粉丝</li>
          </ul>
        </div><!--第二行end-->
        <div class="dsh">
        </div><!--第三行-->
        <div class="dsih"><!--游戏消息-->
          <ul class="dsh_ul">
            <li>
            <a href="javascript:;"><span><img src="/my_img/xx_yx.png" /></span><span><strong>游戏消息</strong></span></a>
            </li>
            <li>
              <a href="javascript:;"><span><img src="/my_img/yf.png" /></span><span>暂无系统消息</span></a>
            </li>
          </ul>
        </div><!--游戏消息end-->
        <div class="dsih"><!--新的好友-->
          <ul class="dsh_ul">
            <li>
            <a href="javascript:;"><span><img src="/my_img/xx_hy.png" /></span><span><strong>新的好友</strong></span></a>
            </li>
            <li>
              <a href="javascript:;"><span><img src="/my_img/yf.png" /></span><span>暂无验证消息</span></a>
            </li>
          </ul>
        </div><!--新的好友end-->
      </div><!--消息end-->
      <div v-else><!--好友-->
        <div>
          <van-search v-model="value" placeholder="搜索当前好友" shape="round"/>
          <van-collapse v-model="activeNames">
            <van-collapse-item title="ToGame好友" name="1">
              <div class="togame">
                <div><img src="/my_img/jl.png" /></div>
                <ul>
                  <li>获奖通知</li>
                  <li>离线</li>
                </ul>
                <div>聊天</div>
              </div>
            </van-collapse-item>
            <van-collapse-item title="英雄联盟好友" name="2">
              <div>
                <div class="yxlmhy"><!--第一个好友-->
                  <div><img src="/my_img/tx1.png" /></div>
                  <ul>
                    <li>23465106313</li>
                    <li>游戏在线 | 搁浅1237</li>
                  </ul>
                </div>
                <div class="hr"></div><!--第一个好友end-->
                <div class="yxlmhy"><!--第二个好友-->
                  <div><img src="/my_img/tx6.png" /></div>
                  <ul>
                    <li>沉剑入池不恋生杀</li>
                    <li>游戏在线 | 能不填不</li>
                  </ul>
                </div>
                <div class="hr"></div><!--第二个好友end-->
                <div class="yxlmhy"><!--第三个好友-->
                  <div><img src="/my_img/tx7.png" /></div>
                  <ul>
                    <li>断魂天罗萌</li>
                    <li>游戏在线 | 简安</li>
                  </ul>
                </div>
                <div class="hr"></div><!--第三个好友end-->
                <div class="yxlmhy"><!--第四个好友-->
                  <div><img src="/my_img/tx8.png" /></div>
                  <ul>
                    <li>Penta ` 余生</li>
                    <li>离线 | 虚浮余生</li>
                  </ul>
                </div>
                <div class="hr"></div><!--第四个好友end-->
                <div class="yxlmhy"><!--第五个好友-->
                  <div><img src="/my_img/tx4.png" /></div>
                  <ul>
                    <li>美男子薄情欧巴c</li>
                    <li>离线 | o且行且珍惜oO</li>
                  </ul>
                </div>
                <div class="hr"></div><!--第五个好友end-->
                <div class="yxlmhy"><!--第六个好友-->
                  <div><img src="/my_img/tx5.png" /></div>
                  <ul>
                    <li>艾文同眼</li>
                    <li>离线 | elvin噜啦啦</li>
                  </ul>
                </div>
                <div class="hr"></div><!--第六个好友end-->
                <div class="yxlmhy"><!--第七个好友-->
                  <div><img src="/my_img/tx2.png" /></div>
                  <ul>
                    <li>柒秒钟记忆</li>
                    <li>离线 | geigggg</li>
                  </ul>
                </div>
                <div class="hr"></div><!--第七个好友end-->
                <div class="yxlmhy"><!--第八个好友-->
                  <div><img src="/my_img/tx3.png" /></div>
                  <ul>
                    <li>受到广</li>
                    <li>离线 | 晚上的梦</li>
                  </ul>
                </div>
                <div class="hr"></div><!--第八个好友end-->
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div><!--好友end-->
      <!-- <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" @cancel="onCancel"/> -->
    </div><!--大框end-->
  </div>
</template>
<script>
export default {
  data(){
    return{
      isLook:1,
      value:'',
      activeNames: ['1'],
      // show: false,
      // actions: [
      //   { name: '扭曲丛林' },
      //   { name: '怒瑞玛' },
      //   { name: '德玛西亚' },
      //   { name: '弗雷尔卓德' },
      //   { name: '无畏先锋' },
      //   { name: '暗影岛' },
      //   { name: '取消' }
      // ]
    }
  },
  methods:{
    look(a){
      this.isLook=a;
    },
    onCancel() {
      this.show = false;
      Toast('cancel');
    },
    back(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.dyh{border-bottom:1px solid #dcd9d9;height:41px;width:100%;display:flex;}/* 第一行 */
.xxhy1,.xxhy2{font-size:17px;line-height:41px;}/* 消息好友字体大小 */
.fh{margin-left:17px;margin-top:13px;}/* 返回 */
.xxhy1{margin-left:107px;}.xxhy2{margin-left:30px;}.tj{margin:5px 0 -5px 95px;}
.deh{width:100%;height:96px;}/* 第二行 */
.deh ul{display:flex;justify-content:space-around;}
ul:first-child li{margin-top:15px;}
ul:last-child li{font-size:14px;}
.dsh{height:8px;background-color:#f4f2f2;}/* 第三行 */
.dsih{height:71px;border-bottom:1px solid #dcd9d9;margin:0 15px;}/* 游戏消息 */
.dsh_ul{display:flex;}
.dsh_ul li:first-child span:last-child{color:#000;font-size:17px;display:block;margin:-48px 0 0 55px;}
.dsh_ul li:last-child span:last-child{color:#848080;font-size:13px;display:block;margin:-2px 0 0 -70px;}
.dsh_ul li:last-child img{margin:12px 0 0 210px;}
.togame{display: flex;}/* ToGame好友 */
.togame>ul>li:first-child{margin:2px 0 3px 10px;font-size:17px;}/* 获奖通知 */
.togame>ul>li:last-child{margin:0 0 0 10px;font-size:15px;color:#969393;}/* 离线 */
.togame>div:last-child{margin:10px 0 0 163px;width:50px;height:30px;line-height:30px;text-align:center;border:1px solid #ff976a;border-radius:6px;color:#ff976a;}/* 聊天 */
.yxlmhy{display: flex;}/* 英雄联盟好友 */
.yxlmhy>div:first-child>img{border-radius:50%;}/* 头像 */
.yxlmhy>ul>li:first-child{color:#000;margin:1px 0 3px 10px;font-size:16px;}/* 游戏名字 */
.yxlmhy>ul>li:last-child{margin:0 0 0 10px;font-size:13px;color:#969393;}/* 是否在线 */
.hr{width:100%;height:1px;background-color:#f4f3f3;margin:9px 0 14px 0;}
/* 
<div class="yxlmhy">
  <div><img src="/my_img/tx1.png" /></div>
  <ul>
    <li>23465106313</li>
    <li>游戏在线 | 搁浅1237</li>
  </ul>
</div>
<div class="hr"></div>
 */
</style>