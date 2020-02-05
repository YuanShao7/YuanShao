<template>
  <div class="container">
    <div class="top_nav">
      <span @click="back">
        <img src="/my_img/fh.png" alt="">
      </span>
        <span>修改手机号</span>
    </div>
    <div class="context">
      <p>验证码将发送到手机 <span>{{phone}}</span></p>
      <p><van-field
        readonly
        clickable
        placeholder="输入验证码"
        :value="value"
        @touchstart.native.stop="show = true"
      />
        <span v-if="isSend==false" @click="getNum">发送验证码</span>
        <span v-else><input type="text" v-model="djs" class="phone_num_01" readonly>S后重发</span>
      </p>
      
    </div>
    <!-- 下一步按钮 -->
    <div class="button_size">
      <van-button type="primary" size="large" color="#009dff" :disabled="value.length<6" @click="newPhone">下一步</van-button>
    </div>
    <!-- 弹出数字键盘 -->
    <van-number-keyboard
        v-model="value"
        :show="show"
        :maxlength="6"
        @blur="show = false"
      />
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      value:'',
      isSend:false,
      show: false,
      djs:60,
      verty:''
    }
  },
  computed:{
    ...mapState(["decode"])
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    getPhone(){
      this.phone=this.decode.uphone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
    },
    getNum(){
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
          phone:this.decode.uphone
        }
      }).then(result=>{
        console.log(result)
        this.verty=result.data.data;
      })
    },
    newPhone(){
       if(this.verty!=this.value){
          this.$dialog.alert({
            title:'消息',
            message:"验证码输入不正确"
          }).then(()=>{
            //on close
          })
          return;
        }
        this.$router.push('/phonenumber')
    }
  },
  watch:{
    value:function(val){
      this.value=val.replace(/\D/g,'')
    }
  },
  created(){
    this.getPhone()
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
}
  .top_nav{
    padding: 12px 0 12px 0;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    background-color: #fff;
  }
  .top_nav>span:first-child{
      padding: 3px 0 0 17px;
      align-items: center;
  }
  .top_nav>span:last-child{
    padding: 0 40% 0 0;
  }
  .context{
    margin:3rem 0 0 0;
    font-size: 0.9rem;
  }
  .context>>>.van-cell{
     width: 60%;
     line-height: 36px;
     padding: 0 0 0 1rem;
  }
  .context>p:nth-child(1){
    margin: 0 0 0 2rem;
  }
  .context>p:nth-child(2){
    width: 92%;
    height: 27px;
    padding: 30px 0 0 0;
    margin: 1rem 0 0 1.9rem;
  }
  /*修改input框样式 */
   .context>p:nth-child(2) span{
      color: #2193ea;
      position: absolute;
      top:25%;
      right: 10%;
   }
   /*修改按钮大小 */
   .button_size>>>.van-button--large{
     width: 82%;
     height: 40px;
     line-height: 40px;
   }
  .button_size>>>.van-button{
    margin: 2rem 0 8rem 2rem;
    border-radius:5px;
  }
  .phone_num_01{
  width:18px;
  height: 16px;
  border: none; 
  background:transparent;
}
</style>