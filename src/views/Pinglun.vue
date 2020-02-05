<template>
  <div class="container">
    <div class="head">
      <div @click="qx">取消</div>
      <div><b>发表动态</b></div>
      <button @click="fabiao"><b>发表</b></button>
    </div>
    <textarea class="con" placeholder="我觉得..."  cols="39%" rows="30" v-model="neirong"></textarea>
  </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
  data(){
    return{
      neirong:"",
      uname:"",
      zan:0,
      img:0,
      uimg:""
    }
  },
  computed:{
    ...mapState(["decode"])
  },
  created(){
    this.uname=this.decode.uname
    this.uimg=this.decode.uimg
  },
  methods:{
    fabiao(){
      var con=this.neirong
      var date=new  Date().getTime()
      var uname=this.uname
      var zan=this.zan
      var img=this.img
      var uimg=this.uimg
      var url="/kom/ping"
      var obj={uname:uname,intr:con,data:date,zan:zan,img:img,uimg:uimg}
      
      // console.log(obj)
      if(con){
        this.axios.get(url,{params:obj})
        .then(res=>{
          this.$dialog.alert({
            title: '消息',
            message: res.data.msg
          }).then(() => {
          // on close
            this.$router.push("/Com")
          });
          
        })
      }
    },
    qx(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.container{
  min-height: 90vh;
}
.con{
  padding: 10px;
  border: none;
}
.head button{
  background-color: transparent;
  border: 2px solid rgba(255, 191, 61,0.5);
  color: #FFBF3D;
  font-size: 14px;
  border-radius: 3px;
}
.head{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgb(190, 190, 190);
}
</style>
