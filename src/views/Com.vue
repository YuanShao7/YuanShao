<template>
  <div class="container">
    <a href="javascript:;" @click="ping" class="insertstyle"></a>
    <van-sticky>
      <div class="head">
        <img @click="fanhui" src="图标/fanhui.png" alt="">
        <div>英雄联盟</div>
        <img @click="xiaoxi" src="图标/xiaoxi.png" alt="">
      </div>
    </van-sticky>
    <div class="play">
      <div class="img">
        <img src="img/lol.png" alt="">
      </div>
      <div class="d1">
        <div>英雄联盟</div>
        <div class="intr">游戏详情<img src="img/you.png" alt=""></div>
      </div>
      <div class="dis" @click="tao"><img src="img/yonghu.png" alt="">(5)进入讨论区...</div>
    </div>
    <div class="rem">
      <div class="f1">
        <div>
          <img src="img/com/zhanji.png" alt="">
          <div>云顶战绩</div>
        </div>
        <div>
          <img src="img/com/baike.png" alt="">
          <div>云顶百科</div>
        </div>
        <div>
          <img src="img/com/zixun.png" alt="">
          <div>资讯</div>
        </div>
        <div>
          <img src="img/com/zhanji1.png" alt="">
          <div>战绩</div>
        </div>
        <div>
          <img src="img/com/zhibo.png" alt="">
          <div>直播</div>
        </div>
        <div>
          <img src="img/com/shouji.png" alt="">
          <div>手机畅玩</div>
        </div>
        <div>
          <img src="img/com/moni.png" alt="">
          <div>阵容模拟</div>
        </div>
      </div>
      <div class="f2">
        <van-notice-bar text="九分钟带你弄懂新英雄厄斐琉斯--云顶之奕9.24更新日志: 焦土之上，寸草不生--新英雄厄斐琉斯登场，皎月迎来大改" left-icon="volume-o"/>
        <van-swipe :autoplay="3000" :show-indicators="false" indicator-color="#ffc900">
          <van-swipe-item>
            <img class="zx" src="/img/com/e.png" alt="">
            <div class="bo"><b>九分钟带你弄懂新英雄厄斐琉斯</b></div>
            <div  class="bo">2019-12-11 
              <span>
                <img src="img/com/xiaoxi.png" alt="">
                237
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <img class="zx" src="img/com/y.png" alt="">
            <div class="bo"><b>云顶之奕9.24更新日志: 焦土之上，寸草不生</b></div>
            <div class="bo">2019-12-11 
              <span>
                <img src="img/com/xiaoxi.png" alt="">
                284
              </span>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <img class="zx" src="img/com/j.png" alt="">
            <div class="bo"><b>新英雄厄斐琉斯登场，皎月迎来大改</b></div>
            <div class="bo">2019-12-11 
              <span>
                <img src="img/com/xiaoxi.png" alt="">
                12
              </span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="f3">
        <van-sticky  :offset-top="44">
            <van-tabs title-style="font:20px;"  title-active-color="#000">
              <van-tab  v-for="(p,i) of bq" :title="p" :key="i">
              </van-tab>
            </van-tabs>
        </van-sticky>
        <div class="p">
          <div class="pl" v-for="(p,i) of list" :key="i">
            <div class="shang">
              <div class="icon"><img :src="p.uimg!=null? p.uimg : '/page_img/default.png'" alt=""></div>
              <div class="use">
                <div>用户{{p.uname}}</div>
                <span>{{p.sj}}</span>
              </div>
            </div>
            <div class="xia">
              <div>{{p.intr}}</div>
              <div class="zuo">
                <div @click="zans(p.pid,p.zan,p.img)" >
                  <van-image v-if="0==p.img" width="20px" src="/图标/点赞.png" />
                  <van-image v-if="1==p.img" width="20px" src="/图标/点赞 (1).png" />  {{p.zan}}
                </div>
                <div>
                  <img src="/img/com/xiaoxix.png" alt="">
                </div>
              </div>
            </div>
          </div>
          <p>到底了...</p>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>


<script>
import tabbar from "../components/tabbar.vue"
import {mapState} from 'vuex'
export default {
  components:{'tabbar':tabbar},
  data(){
    return{
      bq:["动态","云顶之奕","阵容","撸圈八卦","开黑交友","赛事讨论"],
      date:"",
      list:[],
      isClick:1, //是否选中
      data:""
    }
  },
  computed:{
    ...mapState(["decode"])
  },
  methods:{
    xiaoxi(){
      this.$router.push("/Mychat")
    },
    zans(e,f,i){
      var pid=e
      var zan=f
      var img=i
      if(img==0){
          img=1;
          zan+=1
          var obj={pid:pid,zan:zan,img:img}
          var url="/kom/zan"
          this.axios.get(url,{params:obj})
          .then(res=>{this.load()}) 
      }else{
          img=0;
          zan-=1
          var obj={pid:pid,zan:zan,img:img}
          var url="/kom/zan"
          this.axios.get(url,{params:obj})
          .then(res=>{this.load()})
          // console.log(zan)
          this.load()
      }
    },
    tao(){
      this.$router.push("/Tao")
    },
    fanhui(){
      this.$router.go(-1)
    },
    ping(){
      this.$router.push("/Ping")
    },
    getTime(){
      setInterval(()=>{
        this.date = new Date(); 
      },60000)
    },
    Time(){
      setTimeout(()=>{
        this.data = new Date(); 
      },0) 
    },
    load(){
      var url="/kom/load"
      this.axios.get(url)
      .then(res=>{
        // console.log(res)
        this.list=res.data
        this.Time();
        // console.log(this.list)
      })
    }
  },
  created(){
    this.load()
    this.getTime();
  },
  mounted(){
    this.load()
    // this.Time();
  },
  watch:{
    isClick(){
      this.load()
    },
    data(){
      var list=this.list
      var data=this.data
      // console.log(data)
      // console.log(list)
      for(var p in list){
        var sj=list[p].sj
        if((data-sj)/1000/60/60/24>=1){
          sj=Math.floor((data-sj)/1000/60/60/24)+"天前"
        }else if((data-sj)/1000/60/60>=1){
          sj=Math.floor((data-sj)/1000/60/60)+"小时前"
        }else if((data-sj)/1000>1){
          sj=Math.ceil((data-sj)/1000/60)+"分钟前"
        }
        // console.log(sj)
        // console.log(this.date)
        list[p].sj=sj
      }
    } ,
    date(){
      var list=this.list
      var date=this.date
      for(var p in list){
        var sj=list[p].sj
        if((date-sj)/1000/60/60/24>=1){
          sj=Math.floor((date-sj)/1000/60/60/24)+"天前"
        }else if((date-sj)/1000/60/60>=1){
          sj=Math.floor((date-sj)/1000/60/60)+"小时前"
        }else if((date-sj)/1000>1){
          sj=Math.ceil((date-sj)/1000/60)+"分钟前"
        }
        // console.log(sj)
        // console.log(this.date)
        list[p].sj=sj
      }
      this.load()
    } 
  }
}
</script>


<style scoped>
.use{
  padding-left: 10px;
}
.use>span{
  color:gray;
  font-size: 14px
}
.p >p{
  padding-top: 5px;
  text-align: center;
  color: grey
}
.p{
  padding-bottom: 60px;
}
.pl{
  padding-left:5%; 
}
.zuo{
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
}
.xia{
  padding-top: 5%;
}
.shang{
  display: flex;
  padding-top: 5%;
}
.icon{
  height: 40px;
  width: 40px;
}
.icon>img{
  width: 100%;
  border-radius: 50%;
}
.insertstyle{
    display:block;
    position:fixed;
    width:50px;
    height:50px;
    left: 80%;
    top: 80%;
    border-radius:50%;
    background-color:#FFBF3D;
    background-image: url("/img/com/pen.png");
    background-repeat: no-repeat;
    background-position:9px 9px;
    z-index:60;
  }
.f2 .zx{
  width: 100%;
  height: 100px;
}
.f2 .bo{
  padding-left: 3%;
  margin-bottom: 1%
}
.f2{
  margin-top: 5%;
}
.f1>div{
  width: 18%;
  margin: 1%
}
.f1{
  padding-top: 5%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 14px;
}
.rem{
  background: #fff;
  margin-top:15%; 
  border-radius: 5px;
}
.dis{
  margin-top: 9%;
  margin-left: 10%;
}
.container{
  background: #13924a;
}
.head{
  padding: 3%;
  color:#ddd;
  display: flex;
  justify-content: space-between;
  background: #13924a;
}
.play{
  display: flex;
  color:#fff;
  margin-top: 8%;
}
.img{
  background: #13504a;
  padding: 15px;
  margin-left:5%;
  border-radius: 10px;
}
.d1{
  margin-left: 5%;
  margin-top: 4%;
}
.intr{
  font-size: 14px;
  margin-top: 3px;
  padding: 2px;
  background: #13674a;
  border-radius: 3px;
}
</style>
