<template>
  <div>
    <div class="dd"><!--大框-->
      <!-- 第一行 -->
      <div class="d1">
        <span class="s1"><a class="tj" href=""><strong>推荐</strong></a></span>
        <span class="s2"><a class="gz" href=""><strong>关注</strong></a></span>
        <span>
          <img class="s3" src="/my_img/sys.png" alt="">
          <img class="s4" src="/my_img/ss.png" alt="">
          <img class="s5" src="/my_img/lw.png" alt="">
        </span>
      </div><!-- 第一行结束 -->
      <!-- 推荐游戏 -->
      <div>
        <a href=""><img class="tb" src="/my_img/p1.jpg" alt=""></a><!--英雄联盟-->
        <a href=""><img class="tb" src="/my_img/p1.jpg" alt=""></a><!--穿越火线-->
        <a href=""><img class="tb" src="/my_img/p1.jpg" alt=""></a><!--地下城与勇士-->
        <a href=""><img class="tb" src="/my_img/p1.jpg" alt=""></a><!--QQ飞车-->      
        <a href=""><img class="tb" src="/my_img/p1.jpg" alt=""></a><!--逆战-->
      </div><!-- 推荐游戏结束 -->
      <a href="">
        <div class="ddss">
          <div class="xyq1"></div>
          <div class="xyq2"></div>
          <div><img class="xyq3" src="/my_img/ss2.png" alt=""></div>
        </div>
      </a>
      <div><!--最顶部文章推荐-->
        <img class="pfrw" src="/my_img/pfrw.jpg" />
        <div class="dingbu">
          <p class="dbwz"><strong>希然分享全明星花絮Uzi透露新英雄没那么猛</strong></p>
          <span class="xylm">英雄联盟</span>
          <span><img src="/my_img/pl.png" /></span>
          <span>2</span>
        </div>
      </div><!--最顶部文章推荐结尾-->
    </div><!--大框结束-->
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.dd{width:90%;height:100%;margin-left: 20px;border: 1px solid #add;}
.tj,.gz{color:#000;}
.tj{font-family:Helvetica;font-size:20px;}
.gz{font-size: 20px;}
.s1,.s2{float: left;margin-top:10px;}
.s2{margin-left: 15px;}
.s3,.s4,.s5{margin-top:14px;float: right;}
.s4,.s5{margin-right:15px;}
.d1{width:100%;height:44px;border-bottom:1px solid #bdbcbc;}
.tb{width:40px;height:40px;border-radius:50%; float: left;margin-top:8px;margin-right:14px;}
.ddss{width:40px;height:40px;border-radius:50%;float: right;margin-top:8px;border:0px solid #add;background-color: #d3dedd;}
.xyq1,.xyq2{width:8px;height:8px;border-radius:50%;float:left;background-color: #3d3d3d;}
.xyq1,.xyq2{margin-top:16px;margin-left:4px;}
.xyq3{margin-top:14px;margin-left:2px;}
.dingbu{background-color: #fff;}
.dbwz{font-size:14px;margin:0 0;}
.pfrw{margin-top:8px;width:100%;height:200px;}
.yxlm{color:#bdbcbc;width: 100%;height:50px;}
</style>