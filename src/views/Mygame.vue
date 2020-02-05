<template>
  <div>
    <div><!--大框-->
      <div class="yx"><!--游戏-->
        <router-link to="/Sm"><span><img class="fh" src="/my_img/fh.png" /></span></router-link>
        <span><strong>游戏</strong></span>
        <span>购买记录</span>
      </div><!--游戏end-->
      <div class="yx_xt"></div><!--游戏下的线条-->
      <div class="yxzsc"><!--游戏总时长-->
        <div>
          <span>1873小时</span>
          <span>游戏总时长</span>
        </div>
        <div>
          <span>6款</span>
          <span>拥有游戏</span>
        </div>
        <div>
          <span>0分钟</span>
          <span>今日时长</span>
        </div>
      </div><!--游戏总时长end-->
      <div class="yxzsc_xt"></div><!--游戏总时长下的线条-->
      <div class="qbyx"><!--全部游戏-->
        <div>
          <span><strong>全部游戏</strong></span>
          <span>6</span>
        </div>
        <div><!--英雄联盟-->
          <span><img src="/my_img/yxlm.jpg" /></span>
          <ul>
            <li><strong>英雄联盟</strong></li>
            <li>1033小时</li>
            <li>
              <!-- <van-progress pivot-text="" color="#f2826a" :percentage="100"/> -->
              <div data-v-69169150="" class="van-progress"><span class="van-progress__portion" style="background: rgb(242, 130, 106); width: 50px;" :percentage="100"></span></div>
            </li>
          </ul>
          <div>
            <div></div>
            <div></div>
          </div>
        </div><!--英雄联盟end-->
        <div class="fc"><!--QQ飞车-->
          <span><img src="/my_img/fc.jpg" /></span>
          <ul>
            <li><strong>QQ飞车</strong></li>
            <li>700小时</li>
            <li>
              <div data-v-69169150="" class="van-progress"><span class="van-progress__portion" style="background: rgb(242, 130, 106); width:40px;" :percentage="100"></span></div>
            </li>
          </ul>
          <div>
            <div></div>
            <div></div>
          </div>
        </div><!--QQ飞车end-->
        <div class="dxc"><!--地下城与勇士-->
          <span><img src="/my_img/dxc.jpg" /></span>
          <ul>
            <li><strong>地下城与勇士</strong></li>
            <li>140小时</li>
            <li>
              <div data-v-69169150="" class="van-progress"><span class="van-progress__portion" style="background: rgb(242, 130, 106); width:10px;" :percentage="100"></span></div>
            </li>
          </ul>
          <div>
            <div></div>
            <div></div>
          </div>
        </div><!--地下城与勇士end-->
        <div class="qsj"><!--枪神纪-->
          <span><img src="/my_img/qsj.jpg" /></span>
          <ul>
            <li><strong>枪神纪</strong></li>
            <li>0小时</li>
            <li>
              <div data-v-69169150="" class="van-progress"><span class="van-progress__portion" style="background: rgb(242, 130, 106); width:0px;" :percentage="100"></span></div>
            </li>
          </ul>
          <div>
            <div></div>
            <div></div>
          </div>
        </div><!--枪神纪end-->
        <div class="cyhx"><!--穿越火线-->
          <span><img src="/my_img/cyhx.png" /></span>
          <ul>
            <li><strong>穿越火线</strong></li>
            <li>0小时</li>
            <li>
              <div data-v-69169150="" class="van-progress"><span class="van-progress__portion" style="background: rgb(242, 130, 106); width:0px;" :percentage="100"></span></div>
            </li>
          </ul>
          <div>
            <div></div>
            <div></div>
          </div>
        </div><!--穿越火线end-->
        <div class="nz"><!--逆战-->
          <span><img src="/my_img/nz.jpg" /></span>
          <ul>
            <li><strong>逆战</strong></li>
            <li>0小时</li>
            <li>
              <div data-v-69169150="" class="van-progress"><span class="van-progress__portion" style="background: rgb(242, 130, 106); width:0px;" :percentage="100"></span></div>
            </li>
          </ul>
          <div>
            <div></div>
            <div></div>
          </div>
        </div><!--逆战end-->
      </div><!--全部游戏end-->
    </div><!--大框end-->
  </div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style scoped>
.yx{height:45px;}/* 游戏 */
.fh{margin-left:17px;margin-top:13px;}/* 返回 */
.yx>span:nth-child(2){margin:0 0 0 140px;font-size:17px;line-height:45px;}
.yx>span:nth-child(3){line-height:45px;margin:0 0 0 92px;font-size:14px;}/* 购买记录 */
.yx_xt{height:1px;background-color:#bfbebe;margin-bottom:25px;}/* 游戏下的线条 */
.yxzsc>div{display:flex;flex-direction:column;float:left;width:33%;}
.yxzsc>div:nth-child(2){border:1px solid #ccc;border-top:0;border-bottom:0;}
.yxzsc>div>span{text-align:center;}
.yxzsc>div>span:nth-child(2){font-size:14px;color:#9a9595;}
.yxzsc_xt{height:10px;background-color:#f4f2f2;margin:93px 0 25px 0;}/* 游戏总时长下的线条 */
.qbyx{display:flex;flex-direction: column;}
.qbyx>div:first-child{margin:-10px 0 10px 0;}
.qbyx>div:first-child>span:first-child{font-size:20px;margin:0 0 0 17px;}/* 全部游戏 */
.qbyx>div:first-child>span:nth-child(2){font-size:15px;margin:-2px 0 0 7px;color:#666565;}/* 游戏数量 */
.qbyx>div:nth-child(2){display:flex;margin-left:15px;}
.qbyx>div:nth-child(2)>span>img,.dxc>span>img,.qsj>span>img,.cyhx>span>img,.nz>span>img{width:120px;height:70px;}/* 游戏图片 */
.qbyx>div:nth-child(2)>ul>li:first-child,.fc>ul>li:first-child{font-size:17px;margin:2px 0 5px 10px;}/* 英雄联盟、QQ飞车 */
.qbyx>div:nth-child(2)>ul>li:nth-child(2),.fc>ul>li:nth-child(2),.dxc>ul>li:nth-child(2),.qsj>ul>li:nth-child(2),.cyhx>ul>li:nth-child(2),.nz>ul>li:nth-child(2){color:#b4b0b0;font-size:13px;margin:0 0 0 10px;}/* 1033小时、700小时、14小时、0小时 */
.van-progress{margin:10px 0 0 10px;}
.van-progress__portion{height:76%;}
.qbyx>div:nth-child(2)>div{float: left;}
.qbyx>div:nth-child(2)>div>div:nth-child(1){width:10px;border:0.5px solid #afaeae;margin:30px 0 0 100px;}
.qbyx>div:nth-child(2)>div>div:nth-child(2){width:10px;border:0.5px solid #afaeae;margin:-1px 0 0 120px;}/* 两个破折号 */
.fc>span>img{width:120px;height:70px;margin:10px 0 0 15px;}/* QQ飞车 */
.fc,.dxc,.qsj,.cyhx,.nz{display:flex;}
.fc>ul{margin-top:10px;}
.fc>div>div:nth-child(1){width:10px;border:0.5px solid #afaeae;margin:35px 0 0 107px;}
.fc>div>div:nth-child(2){width:10px;border:0.5px solid #afaeae;margin:-1px 0 0 127px;}/* 两个破折号 */
/* 地下城与勇士 */
.dxc>span>img,.qsj>span>img,.cyhx>span>img,.nz>span>img{margin:10px 10px 0 15px}/* 图片 */
.dxc>ul>li:first-child,.qsj>ul>li:first-child,.cyhx>ul>li:first-child,.nz>ul>li:first-child{margin:10px 0 0 0;}/* 字 */
.dxc>ul>li:nth-child(2),.qsj>ul>li:nth-child(2),.cyhx>ul>li:nth-child(2),.nz>ul>li:nth-child(2){margin:5px 0 0 -1px;}/* 140小时、0小时 */
.dxc .van-progress,.qsj .van-progress,.cyhx .van-progress,.nz .van-progress{margin:10px 0 0 0px;}/* 进度条 */
.dxc>div>div:first-child{width:10px;border:0.5px solid #afaeae;margin:35px 0 0 71px;}
.dxc>div>div:nth-child(2){width:10px;border:0.5px solid #afaeae;margin:-1px 0 0 91px;}/* 两个破折号 */
/* 枪神纪 */
.qsj>div>div:first-child{width:10px;border:0.5px solid #afaeae;margin:35px 0 0 119px;}
.qsj>div>div:nth-child(2){width:10px;border:0.5px solid #afaeae;margin:-1px 0 0 139px;}/* 两个破折号 */
/* 穿越火线 */
.cyhx>div>div:first-child{width:10px;border:0.5px solid #afaeae;margin:35px 0 0 103px;}
.cyhx>div>div:nth-child(2){width:10px;border:0.5px solid #afaeae;margin:-1px 0 0 123px;}/* 两个破折号 */
/* 逆战 */
.nz>div>div:first-child{width:10px;border:0.5px solid #afaeae;margin:35px 0 0 135px;}
.nz>div>div:nth-child(2){width:10px;border:0.5px solid #afaeae;margin:-1px 0 0 155px;}/* 两个破折号 */
</style>