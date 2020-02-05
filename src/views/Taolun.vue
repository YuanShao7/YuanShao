<template> 
  <div class="container" id="container">
    <van-sticky>
      <van-nav-bar title="英雄联盟讨论区" left-text="返回"  left-arrow @click-left="fanhui"/>
    </van-sticky>
    <div id="rs" ref="elememt">
      <div v-for="(p,i) of data" :key="i">
        <div v-if="p.uname!==decode.uname">
          <div class="xx" >
            <div class="img">
              <img :src="p.img" alt="">
            </div>
            <div class="xinxi">
              <div class="uname">{{p.uname}}</div>
              <div class="con">{{p.value}}</div>
            </div>
          </div>
        </div>
        <div v-if="p.uname==decode.uname">
          <div class="xx xx1">
            <div class="xinxi">
              <div class="uname">{{p.uname}}</div>
              <div class="con">{{p.value}}</div>
            </div>
            <div class="img">
              <img :src="p.img" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shu">
      <input type="textarea" @keyup.enter="btn()"  v-model="value">
      <button :disabled="value==''" @click="btn">发送</button>
    </div> 
  </div> 
</template>


<script>
import "../socket.io";
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(["decode"])
  },
  data(){
    return{
      value:"",
      mes:[],
      data:[],
      show:false,
    }
  },
  methods:{
    fanhui(){
      this.$router.go(-1)
    },
    zz(){
      var client = io('ws://serverio.applinzi.com');
      //4:绑定第二个事件list  聊天      蓝
      client.on("list",(data)=>{
        // var div = document.createElement("div");
        // //4.2:将服务器发送聊天内容保存中间
        // div.innerHTML =data.uname+data.value;
        // //4.3:设置文字颜色 蓝色
        // div.style.color = "#00f";
        // //4.4:将div追加rs
        // rs.appendChild(div);
        this.data.push(data)
        // console.log(this.data)
      })
    },
    btn(){
      var rs = document.getElementById("rs");
      var client = io('ws://serverio.applinzi.com');
      var value=this.value
      var uname=this.decode.uname
      var img=this.decode.uimg
      client.emit("message",{value:value,uname:uname,img:img})
      this.value = "";
    }
  },
  created(){
    this.zz();
  },
  updated(){
    let height= this.$refs.elememt.offsetHeight; 
    // console.log(height)
    document.documentElement.scrollTop=height
  }
}
</script>

<style scoped>
.container{
  background: #dee1e6;
  min-height: 100vh;
}
  .xinxi div{
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .xinxi .uname{
    padding-top: 2px;
  }
  .xinxi .con{
    padding-left: 5px;
    background: #eee;
    border-radius:5px;  
    max-width: 300px; 
    min-height: 20px; 
    max-height: 300px;
    margin-left: auto; 
    margin-right: auto; 
    padding: 3px; 
    outline: 0; 
    font-size: 14px; 
    line-height: 28px;
    padding-left: 10px;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
  }
 
  .img>img{
     width: 30px;
    height: 30px;
    border-radius:50%;
  }
  .xx1{
    justify-content: flex-end;
  }
  .xx1 .uname{
    text-align: right;
  }
  .xx{
    padding-left: 10px;
    padding-top: 10px;
    display: flex;
  }
  #rs{
    padding-bottom: 55px;
  }
  .shu{
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    position: fixed;
    bottom:0px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    padding-left: 5px;
    box-sizing: border-box;
    background: #fff;
  }
  .shu>input{
    width: 250px; 
    height: 25px;
    border-radius:5px; 
    border: 1px solid #bbb;
    background: #eee;
    min-height: 20px; 
    max-height: 300px;
    padding: 2px;
  }
  .shu>button{
    border: none;
    background:#ddd;
    border-radius:5px; 
    padding-top:5px; 
    padding-bottom:5px; 
  }
  #msg{
    width: 70%;
    height: 30px;
    font-size: 16px;
    border: 1px solid red;
    border-radius: 20px;
    padding-left: 10px;
    
  }
</style>