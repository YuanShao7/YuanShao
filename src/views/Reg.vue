<template>
  <div class="container">
    <div class="center-bottom">
      <div class="top"><img src="/img/logo1.png" alt=""></div>
      <ul>
          <li>
            <i><img src="/img/login/zhanghao.png" alt=""></i>
            <span>
              <input type="text" v-model="uname" placeholder="用户名：4-16个字母、数字、下划线">
            </span>
          </li>
          <li>
              <i><img src="/img/login/mima.png" alt=""></i>
              <span>
                <input type="password" v-model="upwd" placeholder="密码：6-16个字母/数字/符号组成">
              </span>
          </li>
          <div id="msg2"></div>
          
        </ul>
        <div id="msg"></div>
        <p class="check">
          <van-checkbox v-model="checked" checked-color="#2aa0e0"><span>我已阅读并同意 </span><a>游戏用户协议</a> <span>和</span> <a>隐私政策</a></van-checkbox>
        </p>
        <p>
          <button @click="reg" id="btn">注册</button>
        </p>
        <p>
          <b>已有账号？</b>
          <a href="javascript:;" @click="login">立即登录</a>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      uname:"",
      upwd:""
    };
  },
  methods:{
    login(){
      this.$router.push("/login")
    },
    reg(){
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
        // this.$messagebox("信息","用户名格式不正确");
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
        // this.$messagebox("信息","用户密码格式不正确");//10:35
        return;
      }
      if(!this.checked){
        // this.$messagebox("消息","密码不能为空");
        this.$dialog.alert({
          title: '消息',
          message: '请阅读用户协议和隐私政策'
        }).then(() => {
        // on close
        });
        return;
			}
      var url="/user/reg"
      var obj = {uname:u,upwd:p};
      // console.log(obj)
      this.axios.get(url,{params:obj})
      .then(res=>{
        // console.log(res)
        if(res.data.code==-1){
          this.$dialog.alert({
            title: '消息',
            message: res.data.msg
          }).then(() => {
          // on close
          });
        }else{
          this.$dialog.alert({
            title: '消息',
            message: res.data.msg
          }).then(() => {
          // on close
            this.uname=""
            this.upwd=""
          });
        }
      })
    }
  }
}
</script>

<style scoped>/* #cbd4cb #bec6b4 */
.container{
    background: #e7eaf0;
    min-height: 100vh;
    background-size:120%;
    text-align: center;
  }
  .center-bottom{
  padding-top:15%;
}
.center-bottom>.top{
  font-size: 28px;
  font-weight: bold;
  color:#fff;
}
ul{
  list-style: none;
  padding: 8% 0 0 0;
 
}
ul>li{
  background: transparent;
  border-bottom: #5b626e 1px solid;
  width: 78%;
  line-height: 42px;
  margin: 30px auto;
 
}
ul>li i{
  padding: 0 3% 0 0;
  display: inline-flex;
  vertical-align: middle;
}
ul>li span{
  vertical-align: middle;
}
ul>li input{
  border:none;
  background: transparent;
  outline-style: none;
  width: 80%;
  padding-left:5px; 
}
input::placeholder {
    /* 修改字体颜色 */
    color: #5b626e;
    /* 修改字号，默认继承input */
    font-size: 14px;
}
.check{
  padding-left: 10%;
  padding-top:10px;
  padding-bottom:10px;
  font-size: 14px;
}
.center-bottom>p>button{
  display: block;
    width: 80%!important;
    line-height: 42px;
    margin: 20px auto;
    color: #FFFFFF;
    font-size: 1.3rem;
    border-radius: 5px;
    border: none;
    background: #009dff;
}
.center-bottom>p:last-child{
  text-align: center;
  padding-bottom: 20px;
  margin-top: 30px;
}
.center-bottom>p:last-child b{
  font-weight: normal;
  color: #5b626e;
  font-family: 'Microsoft YaHei',SimSun;
  font-size: 14px;
}
.center-bottom>p:last-child a{
  color:#1989fa;
  
}
.center-bottom>p:last-child a:active{
  border:none;
}
.center-bottom span{
  color:#5b626e;
}
.center-bottom>p a{
  text-decoration: none;
  color: #1989fa;
}

</style>
