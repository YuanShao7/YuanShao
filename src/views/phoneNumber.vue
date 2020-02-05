<template>
  <div class="container">
    <div class="top_nav">
      <span @click="back">
        <img src="/my_img/fh.png" alt="">
      </span>
      <span>绑定手机</span>
    </div>
    <p class="tips">绑定手机号码、让账户更安全 </p>
    <div class="context">
      <p>
        <van-field
          readonly
          clickable
          :value="value"
          placeholder="请输入要绑定的手机号"
          @touchstart.native.stop="show = true"/>
        <span class="bgc"></span>
        <van-number-keyboard
          v-model="value"
          :show="show"
          theme="custom"
          close-button-text="完成"
          :maxlength="11"
          @blur="show = false"/>  
      </p>
    </div>
    <!-- 弹出验证码输入框 -->
    <div class="input_00">
      <van-field
        readonly
        clickable
        :value="value_01"
        placeholder="输入验证码"
        @touchstart.native.stop="show_01 = true"
      />
      <van-number-keyboard
        v-model="value_01"
        :show="show_01"
        :maxlength="6"
         close-button-text="完成"
         theme="custom"
        @blur="show_01 = false"
      />
      <span v-if="isSend==false" @click="getNum">发送验证码</span>
        <span v-else><input type="text" v-model="djs" class="phone_num_01" readonly>S后重发</span>
    </div>
    <!-- 验证码提交按钮 -->
    <div class="button_size">
      <van-button type="primary" size="large" color="#009dff" :disabled="value_01.length<6" @click="putPhone">提交</van-button>
    </div>
  </div>
</template>
<script>
import jwt_decode from "jwt-decode"
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{
      value:'',
      value_01:'',//验证码
      show:false,
      show_01:false,//验证码弹出输入框
      isSend:false,
      djs:60,
      phone:''
    }
  },
   computed:{
    ...mapState(["decode"])
  },
  methods:{
    ...mapMutations(["setDecode"]),
    back(){
      this.$router.go(-1)
    },
    getNum(){
       if(!this.value){
        this.$toast("手机号不能为空")
        return;
      };
      var reg=/^1(3[0-9]|47|5((?!4)[0-9])|7(0|1|[6-8])|8[0-9])\d{8,8}$/
      if(!reg.test(this.value)){
        this.$toast("手机号格式不正确")
        return;
      }
      this.isSend=true;
      var num=59;
       var timer=setInterval(()=>{
        this.djs=num--;
        if(num==0){
          clearInterval(timer)
          this.isSend=false;
          this.djs=60;
        }
      },1000)
       this.axios.get('/verty/msg_send',{
        params:{
          phone:this.value
        }
      }).then(result=>{
        // console.log(result)
        this.verty=result.data.data;
      })
    },
     putPhone(){
       if(this.verty!=this.value_01){
          this.$dialog.alert({
            title:'消息',
            message:"验证码输入不正确"
          }).then(()=>{
            //on close
          })
          return;
        }
        console.log(this.value)
        this.axios.get('/users/updatePhone',{
          params:{
            phone:this.value
          }
        }).then(result=>{
          if(result.data.code==1){
            this.$dialog.alert({message:"该手机号码已被占用,请更换其它的手机号码"})
          }else if(result.data.code==2){
            var url='/users/phoneLogin'
            this.axios.post(url,{
            uphone:this.value
            }).then(res=>{
          //成功后执行的回调函数
            // console.log(res.data.token)
            sessionStorage.setItem("token", res.data.token);
            const decode=jwt_decode(sessionStorage.token)
            this.setDecode(decode.data)

          })
            this.$dialog.alert({message:`手机号已成功更换为${this.value}`}).then(()=>{
                this.$router.push('/Personage')
            })            
          }
        }).then()
    }
  },

}
</script>
<style scoped>
  .container{
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }
   .top_nav{
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
  }
   .top_nav>span:first-child{
      padding: 3px 0 0 17px;
      align-items: center;
  }
  .top_nav>span:last-child{
    padding: 0 40% 0 0;
    
  }
  .tips{
    font-size: 0.9rem;
    color: #707070;
    margin: 0;
    padding: 0.4rem 0 0.4rem 1.5rem;
    background-color: #eeeeee69;
  }
.van-cell{
    padding: 0 2rem;
    line-height: 38px;
  }
.bgc{
  display: block;
  width: 100%;
  height: 20px;
  background-color: #eeeeee69;
}

.context p{
  margin: 0;
  padding: 0;
}
 .phone_num_01{
  width:18px;
  height: 16px;
  border: none; 
  background:transparent;
}
.input_00{
  width: 100%;
  height: 80vh;
  background-color: #eeeeee69;
}
.input_00 span{
  color: #2193ea;
  position: absolute;
  top:22.2%;
  right: 7%;
}
.input_00>>>.van-cell{
  width: 62%;
}
/*修改按钮大小 */
.button_size{
  position: absolute;
  top: 25%;
  width: 100%;
}
.button_size>>>.van-button--large{
  width: 82%;
  height: 40px;
  line-height: 40px;
   }
  .button_size>>>.van-button{
    margin: 2rem 0 8rem 2rem;
    border-radius:5px;
  }
</style>