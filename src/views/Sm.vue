<template>
  <div>
    <div class="dakuang"><!--大框-->
      <div>
        <img class="dkimg" src="/my_img/dk1.jpg" />
        <span class="qbch">
          <van-tag round>
            <img src="/my_img/qbch.png" />
            <span>全部称号</span>
          </van-tag></span>
        <router-link to="/Mychat"><span><img class="bbb1" src="/my_img/pl.png" /></span></router-link><!--消息-->
        <router-link to="/Mycollect"><span><img class="bbb2" src="/my_img/sc.png" /></span></router-link><!--收藏-->
        <span @click="sz"><img class="bbb3" src="/my_img/sz.png" /></span><!--设置-->
      </div>
      <div class="aaa"><!--我的下部分-->
        <img class="tx" :src="src" alt=""><!--头像-->
        <div class="my"><!--我的-->
          <span class="yh">{{uname}}</span><!--用户名-->
          <span><img class="sex" :src="usex=='男' ? '/my_img/nan.png' : '/my_img/nv.png'" alt=""></span><!--性别-->
          <span class="lv">{{ulv}}</span>
          <span><van-cell is-link @click="showPopup" ><img class="gd" src="/my_img/gd.png" /></van-cell></span>
          <van-popup v-model="show" :overlay-style="{backgroundColor:'rgba(0, 0, 0, 0.0)'}"  :style="{width:'60%'}">
            <a class="tcc" href="javascript:;">
              <p>{{uname}}<img src="/my_img/xie.png" /></p>
              <p>
                <span>关注</span><span>2</span>
                <span>粉丝</span><span>0</span>
              </p>
            </a>
            <p class="pp">{{uintro}}</p>
          </van-popup>
        </div><!--我的结束-->
        <div class="ddd"><!--我的游戏-->
          <router-link to="/Mygame"><div class="my1"><span class="yxdt">我的游戏&nbsp;&nbsp;&nbsp;6</span></div></router-link>
          <div class="my2"><span class="yxdt">我的动态&nbsp;&nbsp;&nbsp;0</span></div>
        </div><!--我的游戏结束-->
        <div><!--我的角色-->
            <a href="javascript:;"><span class="ccc"><strong>我的角色</strong></span></a>
            <span class="eee"><a class="gl_a" href="javascript:;">管理</a></span>
        </div><!--我的角色结束-->
        <div class="first"><!--第一个游戏-->
          <ul>
            <li class="ul1_li1">
              <span>
                <img class="yx1_tx" :src="src" />
              </span>
              <span><a class="color_qz yx1_mz" href="javascript:;">牵着一只狗`</a></span>
            </li>
            <li class="ul1_li2">
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">英雄联盟</a></span>
              <span class="yxlm_font sg_1">|</span>
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">艾欧尼亚</a></span>
              <span class="yxlm_font sg_1">|</span>
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">Lv30</a></span>
            </li>
            <li class="ul1_li3">
              <span><img class="wu1" src="/my_img/wu1.png" /></span>
              <span class="color_white cc1">298</span>
              <span class="color_white cc1">52%</span>
              <span class="color_white cc1">29</span>
            </li>
            <li class="ul1_li4">
              <span class="font-color wdw1">无段位</span>
              <span class="font-color wdw2">场次</span>
              <span class="font-color wdw3">胜率</span>
              <span class="font-color wdw4">mvp</span>
            </li>
          </ul>
        </div><!--第一个游戏结束-->
        <div class="second"><!--第二个游戏-->
          <ul>
            <li class="ul1_li1">
              <span>
                <img class="yx1_tx" :src="src" />
              </span>
              <span><a class="color_qz yx1_mz" href="javascript:;">沐</a></span>
            </li>
            <li class="ul1_li2">
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">地下城与勇士</a></span>
              <span class="yxlm_font sg_1">|</span>
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">河南二区</a></span>
              <span class="yxlm_font sg_1">|</span>
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">Lv95</a></span>
            </li>
            <li class="ul1_li3">
              <span><img src="/my_img/wu2.png" /></span>
              <span class="color_white cc1">867998</span>
              <span class="color_white cc1">13212</span>
              <span class="color_white cc1">65</span>
            </li>
            <li class="ul1_li4">
              <span class="font-color wdw5">战斗力等级</span>
              <span class="font-color wdw6">战斗力</span>
              <span class="font-color wdw7">基础属性分</span>
              <span class="font-color wdw8">成就</span>
            </li>
          </ul>
        </div><!--第二个游戏结束-->
        <div class="third"><!--第三个游戏-->
          <ul>
            <li class="ul1_li1">
              <span>
                <img class="yx3_tx" :src="src" />
              </span>
              <span><a class="color_qz yx1_mz" href="javascript:;">我想美眉了```</a></span>
            </li>
            <li class="ul1_li2">
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">穿越火线</a></span>
              <span class="yxlm_font sg_1">|</span>
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">河南一区</a></span>
              <span class="yxlm_font sg_1">|</span>
              <span class="yxlm_font"><a class="color_qz" href="javascript:;">Lv2</a></span>
            </li>
            <li class="ul1_li3">
              <span><img class="cc2" src="/my_img/wu3.png" /></span>
              <span class="color_white cc3">9</span>
              <span class="color_white cc4">5</span>
              <span class="color_white cc4">0</span>
            </li>
            <li class="ul1_li4">
              <span class="font-color wdw5">无段位</span>
              <span class="font-color wdw6">总场次</span>
              <span class="font-color wdw7">总击杀</span>
              <span class="font-color wdw8">排位分</span>
            </li>
          </ul>
        </div><!--第三个游戏结束-->
        <div class="bll">别拉了，到底啦~</div>
      </div><!--我的下部分结束-->
    </div><!--大框结束-->
    <tabbar></tabbar>
  </div>
</template>
<script>
// 引入底部导航栏组件
import tabbar from "../components/tabbar.vue"
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{
      show:false,
      uname:'',
      ulv:'',
      uimg:'',
      src:'',
      uintro:'',
      usex:'',
      // 添加的从数据库获取
      item:{}
    }
  },
  methods:{
    ...mapMutations(["setUname"]),
    sz(){
      this.$router.push("/Set")//路由跳转
    },
    showPopup(){
      this.show=true;
    },

  },
  created(){
  },
  computed:{
    ...mapState(["decode"]),
  },
  created(){
    // console.log(this.decode)
    this.uname=(this.decode.uname!=null ? this.decode.uname : this.decode.uphone);
    this.ulv=this.decode.ulv;
    this.src=this.decode.uimg!=null ? this.decode.uimg : '/page_img/default.png';
    this.uintro=this.decode.uintro;
    this.usex=this.decode.usex;
  },
  // 注册组件
    components:{
        'tabbar':tabbar,
    },
}
</script>
<style scoped>
.dakuang{width:100%;position: relative;padding-bottom:50px;}
.qbch{z-index:1;position: absolute;}/* 全部称号 */
.qbch{top:195px;left:15px;}
.qbch>.van-tag>img{margin:3px 5px 3px 4px;}
.qbch>.van-tag>span{margin:-1px  4px 0 0 ;}
.van-tag--primary {background-color: #4c4d4e;}
.dkimg{width:100%;z-index: 0;}/* 背景 */
.bbb1,.bbb2,.bbb3{z-index:1;position: absolute;}/* 收藏设置 */
.bbb1{top:12px;right:90px;}
.bbb2{top:12px;right:55px;}
.bbb3{top:12px;right:20px;}
.aaa{text-align:center;margin:-40px 0 0 0;}
.ddd{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
/* 头像 */
.my{display:flex;justify-content:center;}
.tx{width:70px;height:70px;border-radius:50%;z-index: 1;}
.yh{font-size:14px;}
.lv{font-size:10px;color:#ec9d0d;margin-top:5px;}
.sex{margin-top:4px;}
.yh,.sex,.lv{margin-right:5px;}
.van-icon-arrow:before {content: "";}
.van-cell{padding:0;}
.gd{margin-top:-15px;}/* 弹出层 */
/* 弹出页面 */
.van-popup{box-shadow:1px 0 2px 0 #d4d2d2;}
.tcc{display:flex;flex-direction: column;}
p{padding: 0;margin:0;}
.tcc>p:first-child{color:#000;margin:10px 0 0 0;text-align:center;}/* 用户 */
.tcc>p:nth-child(1)>img{margin:0px 0 -3px 10px;}/* 写入 */
.tcc>p:nth-child(2){margin-top:5px;}
.tcc>p:nth-child(2)>span{font-size:12px;}/* 关注粉丝字体 */
.tcc>p:nth-child(2)>span:first-child,.tcc>p:nth-child(2)>span:nth-child(3){color:#8e8787;margin:5px 0 0 0.5rem;}/* 关注 *//* 粉丝 */
.tcc>p:nth-child(2)>span:nth-child(2),.tcc>p:nth-child(2)>span:nth-child(4){color:#000;margin:0 0 0 5px;}/* 关注量、粉丝量 */
.tcc>p:nth-child(2){text-align:center;}/* 关注粉丝 */
.pp{color:#8e8787;font-size:12px;margin:5px 0 10px 0;}
.ddd{margin-top:8px;}/* 我的游戏 */
.ddd a{
  width: 100%;
}
.my1,.my2{width:80%;height:50px;border-top: 1px solid #f6f2f2;background-color: #fff;margin:0 0;float:left;line-height:50px;text-align: left;box-shadow: 0 3px 4px 0 #ccc;}
.yxdt{padding-left:10px;color:#000;}
.my1{margin:0 0 0 1rem}
.my2{margin:0 1rem 0 0}
/* 我的角色 */
.ccc{color:#000;float: left;font-size:19px;margin-left:1rem;margin-top:2rem;}.eee{float:right;font-size:14px;margin-right:1rem;margin-top:2rem;}
.gl_a{color:#4c4a4a;}
/* 角色游戏一 */
.first{margin:4rem 14px 0 10px;border:1px solid #ccc;background-image: linear-gradient(to top right, #3b9fa0, #68b4b7);box-shadow: 0 3px 4px 0 #ccc;}
.yx1_tx{width:42px;height:42px;border-radius:50%;margin:12px 0 0 10px;}
.color_qz{color:#fff;}
/* 名字 */.yx1_mz{display:block;margin:15px 0 0 10px;}
.ul1_li1{display:flex;}.ul1_li2{display:flex;margin:-20px 0 0 60px;}
.ul1_li3,.ul1_li4{display:flex;justify-content: space-around;}
.ul1_li3{margin-top:15px;}
.ul1_li4{text-align: center;margin-bottom:10px;}
/* 英雄联盟等级字体大小 */.yxlm_font{font-size:12px;}
.wu1{margin-top:-5px;}
.sg_1{margin:0 6px 0 6px;color:#9c9898;}
.color_white{color:#fff;font-size:17px;}
.font-color{font-size:12px;}
.cc1{margin-top:8px;}
.wdw1{margin-left:-6px;}.wdw2{margin-left:-6px;}.wdw4{margin-right:-2px;}
/* 角色游戏二 */
.second{border:1px solid #e3a990;background-image: linear-gradient(to bottom right, #e3a990, #d97142);box-shadow: 0 3px 4px 0 #ccc;margin:10px 14px 0 10px;}
.wdw5{margin-left:-13px;}.wdw6{margin-left:-4px;}.wdw7{margin-right:-8px;}.wdw8{margin-right:-2px;}
/* 角色游戏三 */
.third{border:1px solid #b5b1ab;background-image: linear-gradient(to top right, #b5b1ab, #69665f);box-shadow: 0 3px 4px 0 #ccc;margin:10px 14px 0 10px;}
.yx3_tx{width:42px;height:42px;margin:12px 0 0 10px;border-radius: 50%}
.cc2{margin-left:-19px;}.cc3,.cc4{margin-top:8px;}.cc3{margin-right:12px;}.cc4{margin-right:2px;}
.bll{margin:30px auto;color:#949292;}
</style>