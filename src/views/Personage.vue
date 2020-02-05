<template>
  <div>
    <div><!--大框-->
      <div class="dyh"><!--第一行-->
        <span @click="toSet"><img src="/my_img/fh.png" /></span><!--返回按钮-->
        <span><strong>个人资料</strong></span>
        <span><span @click="keep">保存</span></span>
      </div><!--第一行end-->
      <div class="deh">
      </div><!--第二行-->
      <div class="dsh"><!--第三行-->
          <span>
             <van-uploader :after-read="afterRead" :max-count="1">
               <van-image
                  round
                  width="4rem"
                  height="4rem"
                  fit="cover"
                  :src="src"
                />
              </van-uploader>
          
          </span>
          <i data-v-66c993c0="" class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
      </div><!--第三行end-->
      <div><!--第四行-->
        <div class="dsih">
          <div></div>
          <div>
            <div>用户名</div>
            <input type="text" v-model="uname" placeholder="" maxlength="18">
          </div>
        </div>
        <div class="dsih">
          <div></div>
          <div>
            <div>性别</div>
            <input type="text" v-model="usex" placeholder="" readonly   @click="show_sex1">
            <div id="sheet_01">
                 <van-action-sheet v-model="show_sex" :actions="actions" @select="onSelect"  />    
            </div>  
          </div>
        </div>
        <div class="dsih">
          <div></div>
          <div>
            <div>简介</div>
            <input type="text" v-model="uintro" placeholder="" maxlength="55">
          </div>
        </div>
         <!-- 点击更换手机号的弹出层 -->
          <div class="ghPhone" @click="to_changePhone"> 
            <van-cell is-link @click="showPopup_01">
              <div class="dsih phone_line">             
                  <span>更换手机号</span>
                  <span class="show_phone">{{phone}}</span>
              </div>
            </van-cell>
          </div>
      </div><!--第四行end-->
        <van-popup v-model="show_1">内容</van-popup>
    </div><!--大框end-->
    <van-action-sheet />
  </div>
</template>
<script>
import jwt_decode from "jwt-decode"
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{
      show: false,
      show_1:false,
      show_sex:false,
      uname:'',
      uname_01:'',
      detail:"",
      usex:'',
      usex_01:'',
      uintro:'',
      uintro_01:'',
      src:'',
      src_01:'',
      phone:'',
      actions:[
        {name:'男'},
        {name:'女'},
      ],
    }
  },
  methods: {
    ...mapMutations(["setDecode"]),
    /*照片上传 */

    afterRead(file){
      var sendData=new FormData();
      console.log(0)
      sendData.append('file',file.file)
      sendData.append('userId', this.decode.id)
      this.getTx(sendData).then(res=>{
        console.log(res)
      this.axios.post('/users/getAll').then(result=>{
      console.log(result)
      sessionStorage.setItem("token",result.data.token)
      const decode=jwt_decode(sessionStorage.token)
      this.setDecode(decode.data)  
      })
      .then(res=>{
        this.getUsersAll()
      })  
    })      
  },
   getTx(sendData){
     return new Promise(function(resolve,reject){
      var ajax = new XMLHttpRequest();
      // 设置请求行
      ajax.open('post','http://xingmeng01.applinzi.com/add/addImg');
      // 回调函数
      ajax.onload = function(){  
        var result= JSON.parse(ajax.responseText); 
          resolve(result)
          console.log(result)
      }
      ajax.send(sendData)
     })
    },
    showPopup() {
      this.show = true;
    },
     showPopup_01() {
      this.show_1 = false;
    },
    formatPhone(phone) {
      return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
       },
    to_changePhone(){
      if(this.decode.uphone!=null){
         this.$router.push('/changephone')
      }else{
        this.$router.push('/phoneNumber')
      }   
    },
    onSelect(item) {
      this.show_sex = false;
      this.usex=item.name;
      },
    show_sex1(){
      this.show_sex=true;
     },
    keep(){
      if(this.uname==this.uname_01&&this.usex==this.usex_01&&this.uintro==this.uintro_01){
        this.$dialog.alert({message:"两次要修改的内容相同"})
        return;
      }
      this.$dialog.confirm({
        message:"确定要提交修改的资料吗"
      }).then(()=>{

      this.axios.post('/users/keepzl',{
          uname:this.uname,
          usex:this.usex,
          uintro:this.uintro     
      }).then(res=>{
        this.axios.post('/users/getAll').then(result=>{
        sessionStorage.setItem("token",result.data.token)
      }) 
        this.getNewAll()    
      })
      }).catch(()=>{

      })   
    },
    /*这个是获取数据库的用户信息 */
    getUsersAll(){
      this.uname=(this.decode.uname!=null ? this.decode.uname : this.decode.uphone);    
      this.uintro=this.decode.uintro;    
      this.usex=this.decode.usex;  
      /*设置默认头像 */
      this.src=this.decode.uimg!=null ? this.decode.uimg : '/page_img/default.png';
      
     /*替换手机号中间四位为星号 */
      this.phone=this.decode.uphone!=null ? this.formatPhone(this.decode.uphone) :'未绑定手机号'
    },
    getNewAll(){
       this.uname_01=this.uname;
       this.uintro_01=this.uintro;
       this.usex_01=this.usex;
      //  this.src_01=this.src;
    },
    //要返回上一页先判断当前的内容是否保存
    toSet(){
      if(this.uname==this.uname_01&&this.usex==this.usex_01&&this.uintro==this.uintro_01){
        this.$router.push('/set')
      }else{
        this.$dialog.confirm({message:"您还有要修改的内容未保存,确定要返回吗"})
        .then(()=>{
          this.$router.push('/set')
        })
        .catch(()=>{

        })
      }     
    },  
  },
  computed:{
    ...mapState(["decode"]),
  },
  created(){
    this.getUsersAll()
    this.getNewAll()
  },
}
</script>
<style scoped>
.dyh{width:100%;height:45px;display:flex;justify-content: space-between;}/* 第一行 */
.dyh img{margin-top:15px;}/* 返回 */
.dyh span:nth-child(1){padding: 0 0 0 0.5rem}
.dyh span:nth-child(3){padding: 0 0.5rem 0 0}
.dyh>span>strong{font-size:18px;line-height:45px;}/* 个人资料 */
.dyh>span:last-child{font-size:14px;color:#717070;line-height:45px;}/* 保存 */
.deh{height:7px;background-color:#e4e4e4;margin-bottom:25px;}/* 第二行 */
.dsh{display:flex;justify-content: center;}
.dsh img{width:55px;height:55px;border-radius:50%;margin:20px 0 0 19px;}/* 头像 */
.dsh .van-icon-arrow:before {display: none;}
.dsh>.van-icon, .van-icon::before {display: none;}
.tcc{width:250px;height:130px;}
.tcc>div:first-child{text-align:center;color:#8e8d8d;font-size:14px;margin-top:20px;}/* 请选择 */
.tcc>div:nth-child(2){margin:20px 0 0 20px;font-size:15px;}/* 照片选取 */
.tcc>div:nth-child(3){margin:15px 0 0 20px;font-size:15px;}/* 拍照 */
.van-icon, .van-icon::before {display:block;}
.van-uploader__upload {position: relative;display: flex;flex-direction: column;align-items: center;justify-content: center;box-sizing: border-box;width: 30px;height: 30px;margin: 0 8px 8px 0;background-color: #fff;border: 1px dashed #e5e5e5;border-radius: 4px;}
.van-uploader__upload-icon {color: #969799;font-size:15px;}
.dsih>div:first-child{width:100%;height:1px;background-color: #ddd;margin:16px 0;}/* 横线 */
.dsih>div:nth-child(2)>div{display:inline-block;margin:0 10px;}/* 昵称、性别、简介 */
.dsih input{border:0px; text-align: center;width: 70%;}
.dsih.phone_line{
  border-bottom:1px solid #e5e5e5;
  border-top:1px solid #e5e5e5;
  padding:14px 0 14px 0; 
  display: flex;
  justify-content: space-between;
}
.dsih.phone_line span{
  padding: 0 20px 0 10px;
}
.ghPhone{
  padding: 10px 0 0 0;
  line-height: 30px;

}
.ghPhone>>>.van-cell{
  padding: 0;
  color: #fff;
}
.ghPhone>>>.van-cell__right-icon{
  margin-left:-15px;
}
.ghPhone>>>.van-cell__left-icon, .van-cell__right-icon{
  line-height: 54px;
}
.show_phone{
 font-size: 0.9rem;
  color: #717070;
}
#sheet_01{
  margin: 0;
}
.van-uploader__input{

}
</style>