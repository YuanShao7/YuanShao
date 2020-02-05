<template>
  <div>
    <div class="dyh"><!--第一行-->
      <span @click="sz"><img src="/my_img/fh.png" /></span>
      <span><strong>设置</strong></span>
    </div><!--第一行end-->
    <div class="deh">
    </div><!--第二行-->
    <div @click="personage"><!--个人资料-->
      <a class="grzl" href="javascript:;">
        <span>个人资料</span>
        <span><img :src="src" /><img src="/my_img/yf.png" /></span>
      </a>
      <div class="grsz_xt">
    </div><!--个人设置线条-->
    </div><!--个人资料end-->
    <div class="dsh"><!--第三行-->
      <div>
        <a href="javascript:;">
          <span>消息通知设置</span>
          <span><img src="/my_img/yf.png" /></span>
        </a>
      </div><!--消息通知设置-->
      <div class="dshxt">
      </div><!--线条-->
    </div><!--第三行end-->
    <div class="dsih"><!--第四行-->
      <div class="dsih_div">
        <a href="javascript:;"><span>WIFI下自动播放视频</span></a>
          <a href="javascript:;">
            <span>已开启，首页和社区视频在wifi下自动播放</span>
          </a>     
      </div>
      <div>
        <van-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />
      </div>
    </div><!--第四行end-->
    <div class="dsihxt">
    </div><!--线条-->
    <div><!--第五行-->
      <div class="dwh_div">
        <a href="javascript:;">
          <span>清空缓存</span>
          <span>19.75MB</span>
        </a>
        <div class="dwh_xt">
        </div><!--第五行线条-->
      </div><!--清空缓存-->
    </div><!--第五行end-->
    <div class="dlh"><!--第六行-->
      <a href="javascript:;">
        <span>隐私设置</span>
        <span><img src="/my_img/yf.png" /></span>
      </a>
      <div class="dsihxt">
      </div><!--线条-->
    </div><!--第六行end-->
    <div><!--第七行-->
      <a class="dqh" href="javascript:;">
        <span>注销账号</span>
        <span><img src="/my_img/yf.png" /></span>
      </a>
      <div class="dsihxt">
      </div><!--线条-->
    </div><!--第七行end-->
    <div><!--第八行-->
      <a class="dbh" href="javascript:;">
        <span>关于我们</span>
        <span><img src="/my_img/yf.png" /></span>
      </a>
      <div class="dsihxt">
      </div><!--线条-->
    </div><!--第八行end-->
    <div><!--第九行-->
      <a class="djh" href="javascript:;">
        <span>意见反馈</span>
        <span>官方反馈群: 412167349</span>
        <span><img src="/my_img/yf.png" /></span>
      </a>
      <div class="dwh_xt">
      </div><!--意见反馈线条-->
    </div><!--第九行end-->
    <div class="dshih"><!--第十行-->
      <a href="javascript:;">
        <span @click="loginout">退出登录</span>
      </a>
      <div class="dshih_xt">
      </div><!--线条-->
    </div><!--第十行end-->
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{
      checked:true,
      src:'',
    } 
  },
  methods:{
    ...mapMutations(["setDecode"]),
    sz(){
      this.$router.push("/Sm")
    },
    personage(){
      this.$router.push("/Personage")
    },
    loginout(){
      this.$dialog.confirm({
        message:"确定要退出登录吗"
      }).then(()=>{
        sessionStorage.removeItem("token")
        this.$router.push('/')
        this.$toast("已退出登录")
      }).catch(()=>{

      })
      
    }
  },
  computed:{
    ...mapState(["decode"]),
  },
  mounted(){
    // console.log(this.decode);
    this.src=this.decode.uimg!=null ? this.decode.uimg : '/page_img/default.png';
  }
}
</script>
<style scoped>
.dyh>span>img{margin-left:17px;margin-top:15px;}/* 返回 */
.dyh>span:nth-child(2){margin:5px 0 0 140px;font-size:17px;line-height:45px;}/* 设置 */
.dyh{height:45px;}
.deh{height:10px;background-color:#f4f2f2;margin-bottom:25px;}/* 第二行 */
.grzl{width:100%;display:flex; justify-content: space-between;}
.grzl>span:first-child{color:#000;margin-left:15px;}/* 个人资料 */
.grzl>span:nth-child(2){display: flex;align-items: center;margin-right:1rem;}
.grzl>span:nth-child(2)>img{width:40px;height:40px;border-radius:50%}/* 个人资料头像 */
.grzl>span:nth-child(2)>img:nth-child(1){margin:  0 1rem 0 0}/* 个人资料头像 */
.grzl>span:nth-child(2)>img:nth-child(2){width:12px;height:12px;}/* 个人资料头像 */
.grzl>span:nth-child(3)>img{margin-left:10px;}/* 返回 */
.grsz_xt{height:10px;background-color:#f4f2f2;margin:10px 0 15px 0;}/* 个人设置线条 */
.dsh>div:first-child a{display: flex;justify-content: space-between;}
.dsh>div:first-child>a>span:first-child{color:#000;}/* 第三行 */
.dsh>div>a>span:first-child{margin-left:15px;}/* 消息设置 */
.dsh>div>a>span>img{margin-right:1rem;}/* 进入符号> */
.dshxt{height:2px;background-color:#f4f2f2;margin:10px 0 15px 0;}/* 第三行线条 */
.dsih{display:flex; justify-content: space-between;}/* 第四行 */
.dsih_div{display:flex;flex-direction:column;}
.dsih div:nth-child(2){margin: 0 1rem 0 0}
.dsih_div>a:first-child>span{color:#000;margin-left:15px;}/* WIFI */
.dsih_div>a:last-child>span{color:#635d5d;font-size:13px;margin-left:15px;}/* 已开启 */
.van-switch{margin-left:50px;font-size: 26px;}/* 开关 */
.dsihxt{height:2px;background-color:#f4f2f2;margin:12px 0 15px 0;}/* 第四行线条 */
.dwh_div>a{display: flex;justify-content: space-between;}
.dwh_div>a>span:first-child{color:#000;margin-left:15px;}/* 第五行清空缓存 */
.dwh_div>a>span:nth-child(2){color:#908e8e;font-size:14px; margin: 0 1rem 0 0;}/* 22.06MB */
.dwh_xt{height:10px;background-color:#f4f2f2;margin:12px 0 15px 0;}/* 第五行线条 */
.dlh>a{display: flex;justify-content: space-between;}
.dlh>a>span:first-child,.dqh>span:first-child,.dbh>span:first-child,.djh>span:first-child{color:#000;margin-left:15px;}/* 隐私设置、注销账号、关于我们、意见反馈 */
.dlh>a>span:nth-child(2),.dqh>span:nth-child(2)>img,.dbh>span:nth-child(2)>img{margin:0 1rem 0 0 ;}/* 进入符号> */
.djh>span:nth-child(2){color:#908e8e;font-size:14px;}/* 官方反馈 */
.djh>span:nth-child(3)>img{margin-right:1rem;}/* 进入符号> */
.dshih>a{color:#f00;}/* 退出登录 */
.dshih_xt{height:2px;background-color:#f4f2f2;margin:15px 0 15px 0;}
.dqh,.dbh,.djh{width: 100%; display: flex;justify-content: space-between;}
.dshih>a{display: flex;justify-content: center;width: 100%}
</style>