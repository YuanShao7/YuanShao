<template>
  <div class="container">
    <div class="logo">
      <img src="/img/logo1.png" alt="">
    </div>
    <div class="content">
      <!-- <h2>欢迎登陆</h2> -->
      <div class="phone_reg" v-if="issLogin==1"><!--手机号登录-->
        <div class="input_outer">
          <img src="/img/login/shouji.png" alt="">
	        <input class="a1"  v-model="uphone" type="text" autocomplete="off" required placeholder=
	         "请输入手机号" maxlength="11">
			  </div>
        <div class="input_outer">
           <img src="/img/login/yanzhengma.png" alt="">
          <input class="a1" v-model="uyzm" type="text" required placeholder=
	         "" maxlength="6">
           <span id="yanzhengma" @click="getMobile" v-if="isClick==false">获取验证码</span>
           <span class="input_num" v-else>
           <input type="text" v-model="phone_num" class="phone_num_01" readonly>S后重发</span>
			  </div>
        <div class="mb2">
		      <input type="submit" @click="login2" value="登录" id="sub1">
		    </div>
      </div>
      <div class="uname_reg" v-else> <!-- 用户名登录 -->
        <div class="input_outer">
            <img src="/img/login/zhanghao.png" alt="">
	        <input class="a1"  v-model="uname" type="text" autocomplete="off" required placeholder=
	         "请输入用户名">
			  </div>
        <div class="input_outer">
           <img src="/img/login/mima.png" alt="">
          <input class="a1" v-model="upwd" type="password" required placeholder=
	         "请输入密码">
			  </div>
        <div class="mb2">
		      <input type="submit" @click="login1" value="登录" id="sub1">
		    </div>
      </div>
        <div class="reg">
          <span @click="phoneLogin" v-if="issLogin==2">手机快捷登录</span>
          <span @click="unameLogin" v-else>用户名登录</span>
          <a href="javascript:;" @click="reg">立即注册</a></div>
        
		</div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '5px 16px',fontSize:'14px' }">第三方登录</van-divider>
    <div class="login">
      <div class="d1">
        <img src="/img/login/qq.png" alt="">
      </div>
      <div class="d1">
        <img  src="/img/login/weibo.png" alt="">
      </div>
      <div class="d1">
        <img src="/img/login/weixin.png" alt="">
      </div>
    </div>
    <div class="show" @click="show">游客模式</div>
  </div>
</template>

<script>
//取出vuex中的map...
import {mapState,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState(["decode"])
  },
  data() { 
    return {
      checked: true,
      uname:"",
      upwd:"",
      issLogin:2,
      uphone:"",
      uyzm:'',
      phone_num:60,
      isClick:false,
      verty:''
    };
  },
  methods:{
    phoneLogin(){
      this.issLogin=1;
    },
    unameLogin(){
      this.issLogin=2;
    },
    show(){
      this.$router.push("/")
    },
    reg(){
      this.$router.push("/Reg")
    },
    login2(){
      if(!this.verty){this.$dialog.alert({title:'消息',message:"验证码不能为空"})
      .then(()=>{})
      return;
      }
       if(this.verty!=this.uyzm){
          this.$dialog.alert({
            title:'消息',
            message:"验证码输入不正确"
          }).then(()=>{
            //on close
          })
          return;
        }
        var url='/users/phoneLogin'
        this.axios.post(url,{
          uphone:this.uphone
        }).then(res=>{
          //成功后执行的回调函数
          // console.log(res)
          if(res.data.code==1){
            this.$router.push('/')
            this.$toast("登录成功")
            // this.$router.go(0)
          }
        })
    },
    // login1(){
    //   this.login({
    //     uname:this.uname,
    //     upwd:this.upwd
    //   })
    // }
    /*获取手机验证码 */
    getMobile(){
      if(!this.uphone){
        this.$toast("手机号不能为空")
        return;
      };
      var reg=/^1(3[0-9]|47|5((?!4)[0-9])|7(0|1|[6-8])|8[0-9])\d{8,8}$/
      if(!reg.test(this.uphone)){
        this.$toast("手机号格式不正确")
        return;
      }
      var num=59;
      this.isClick=true;
      var timer=setInterval(()=>{
        this.phone_num=num--;
        if(num==0){
          clearInterval(timer)
          this.isClick=false;
          this.phone_num=60;
        }
      },1000)
      this.axios.get('/verty/msg_send',{
        params:{
          phone:this.uphone
        }
      }).then(result=>{
        // console.log(result)
        this.verty=result.data.data;
      })
    },
    login1(){
      var u=this.uname;
      var p=this.upwd;
      var reg = /^[a-zA-Z0-9]{6,18}$/;
			if(!u){
				// this.$messagebox("消息","用户名不能为空");
       
        this.$dialog.alert({
          title: '消息',
          message: '用户名不能为空'
        }).then(() => {
        // on close
        });
         return;
			}
			if(!p){
        // this.$messagebox("消息","密码不能为空");
        this.$dialog.alert({
          title: '消息',
          message: '密码不能为空'
        }).then(() => {
        // on close
        });
        return;
      }
      if(!reg.test(u)){
        this.$dialog.alert({
          title: '消息',
          message: '用户名格式不正确'
        }).then(() => {
        // on close
        });
        return;
      }
      //5:验证用户密码不正确显示出错信息
      //6:返回
      if(!reg.test(p)){
        this.$dialog.alert({
          title: '消息',
          message: '用户密码格式不正确'
        }).then(() => {
        // on close
        });
        return;
      }
      //发送ajax请求
      var url = "/users/login";
      this.axios.post(url,{uname:this.uname,upwd:this.upwd}).then(res=>{//成功回调函数
        // console.log(res)
        // 8:获取服务器返回结果
        if(res.data.code==-1){
          //9:出错显示出错信息
          this.$dialog.alert({
            title: '消息',
            message: res.data.msg
          }).then(() => {
          // on close
          });
        }else{
          this.$router.push("/");
          this.$toast("登录成功")
          // this.$router.go(0)          
        }
      })
    }
  },
  watch:{
    uyzm(val){
      this.uyzm=val.replace(/\D/g,'')
    }
  }
}
</script>

<style scoped>
.container{
  text-align: center;
}
.content .input_outer{
  margin: 35px auto;
}
.input_outer img{
  margin-bottom: -4px;
  margin-left:-40px;
}
input{
  padding: 0;
}

input::placeholder {
    /* 修改字体颜色 */
    color: #5b626e;
    /* 修改字号，默认继承input */
    font-size: 16px;
}
.reg>a{padding-left:130px;}
.login{
  display: flex;
  justify-content: space-around;
  margin-bottom:7%;
}

.reg{
  margin-top:35px; 
  margin-bottom: 35px;
  color:#1989fa;
}
.reg>a{
  color:#1989fa;
}
.logo{
  padding-top:15%;
}
.a1{
     background:transparent;
     height:42px;
    color:#5b626e;
    padding-left: 10%;
    vertical-align: middle;
}
#sub1{
    width:300px;
     height:42px;
     border-radius: 5px;
     background: #009dff;
     font-size:19px;
     color:white;
     margin-top:10px;
}
  .container{
    background: #e7eaf0;
    min-height: 100vh;
    background-size:120% ;
  }

.logo_box{
    width:400px;
    height:500px;
    position: absolute;
	  left: 60%;
	  top:60%;
	  margin-top: -250px;   
     
}
.input_outer{
      width: 78%;
      /* position: relative; */
      border:none;
      border-bottom: #5b626e 1px solid;
      background:transparent; 
}
input:focus { outline: none; } 

input{  
	background:none;  
	outline:none;
	border:0px;
}
#yanzhengma{
  position: absolute;
  font-size: 0.9rem;
  top: 41%;
  left: 69%;
  color: #5b626e;
}
/*修改input验证码样式 */
.input_num{
  position: absolute;
  top: 41%;
  left: 69%;
  color: #5b626e;
  font-size: 15px;
}
.phone_num_01{
  width:18px;
  height: 16px; 
}
</style>
