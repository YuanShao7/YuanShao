<template>
  <div class="container" :style="{'background-image':`url(/${items.yimg})`}">   
   <div class="top_bar"><!--顶部三个按钮-->
    <div class="imgBox"></div>
      <span class="left_icon"><img src="/img/fanhui.png" alt="" @click="back"></span>
        <div class="right_icon">
          <span @click="to_mycart"><img src="/img/shoppingcart.png" alt=""></span>
          <span class="tag_01" v-show="number!==0">{{number}}</span>  
          <span><img src="/img/share.png" alt=""></span>
        </div>        
     </div>      
     <div class="intr">      
       <div class="intr_detail"><!--英雄详细介绍-->
         <div class="intr_text">
           <p>{{items.ytitle}}</p>
            <div class="flap">            
              <p>
                <img src="/img/ydq.png" alt="" class="size">
                <span class="text">{{items.ycoupon}}</span>
              </p>            
              <p>        
                <span class="text">¥ {{product.yrmb.toFixed(2)}}</span>
              </p>            
            </div>
            <div class="todate_1">
              <span class="topdate">上架时间 ：{{items.ydate}}</span>
              <span class="date_01"><img src="/img/clock.png" alt="">打折提醒</span>
            </div>
            <div class="fgx">
                <img src="/img/fengexian1.png" alt="">相关推荐<img src="/img/fengexian.png" alt="">
            </div>                     
         </div>   
      </div>
      <!--相关推荐-->
      <div class="recommend">
          <div class="recommend_01" v-for="(pj,i) of pics" :key="i">
            <div class="imgBox"></div>
            <p class="jies">
              <van-image
                  width="100%"
                  height="8rem"
                  fit="cover"
                  :src="'/'+pj.rimg"
                />
              <span>{{pj.rtitle}}</span>
              <span><img src="/img/yydq.png" alt="">{{pj.rcoupon}}</span>
            </p>         
          </div>
      </div>   
    </div>
    <!--底部导航栏-->
    <div class="bottom_bar">
      <van-button type="default" size="large">
        <div class="d1">
          <img src="/img/zengsong.png"/>
          <span>赠送</span>
        </div>
        </van-button>
      <van-button color="linear-gradient(to right, #f90, #f70)" size="large" :data-lid="items.yid" :data-dianquan="items.ycoupon" :data-jinbi="0" :data-price="items.yrmb" :data-img="items.yimg"  :data-cname="items.ytitle" @click="addshoppingcart">加入购物车</van-button>
      <van-button color="linear-gradient(to right, #b93a4c, #f04a34)"  size="large">立即购买</van-button>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  props:["lid"],
  data(){
    return{
      items:{},
      product:{yrmb:0},
      pics:[]
    }
  },
   computed:{
    ...mapState(["decode","number"])
  },
  methods:{
     ...mapMutations(["setNum"]),
    getNum(){
      this.axios.get('/orders/cartnum').then(result=>{
      // console.log(result.data.data[0])
      // console.log(result)
      if(result.data.status==403){
        this.$toast("未登录")
        return;
      }
      var count=result.data.data[0];
      for(var key in count){
      }
      var num=count[key]
      // console.log(num)
      this.setNum(num)
      sessionStorage.setItem("number",num)
    })
    },
     back(){this.$router.go(-1)},
      to_mycart(){this.$router.push('/mycart')},
     /*加入购物车 */
         addshoppingcart(event){
       /*获取商品编号 */  
      var lid=event.currentTarget.dataset.lid;  
      /*获取当前商品价格 */
      var price=event.currentTarget.dataset.price;
     /*获取当前商品点券 */
      var dianquan=event.currentTarget.dataset.dianquan;
       /*获取商品金币 */
      var jinbi=event.currentTarget.dataset.jinbi;
      /*获取当前登录用户的id*/
      var id=this.decode.id;
      /*获取当前商品的图片 */
      var img=event.currentTarget.dataset.img
      /*获取当前商品的名字*/
      var cname=event.currentTarget.dataset.cname;
      //当点击加入购物车时，尝试从localsotarege或者sessionsotarge中获取用户名
      // console.log(lid,price,dianquan,jinbi,img)
      /*判断用户点击加入购物车是，是否是登录状态如果登录，可以添加购物车，如果未登录，提示去登陆*/
      this.axios.get('/orders/addcart',
      {params:{lid,price,dianquan,jinbi,id,img,cname}}
      ).then(result=>{
        // console.log(result)
        if(result.data.status==403){
          this.$dialog.confirm({message:"您还未登录,是否去登录"})
          .then(()=>{
            this.$router.push("/login")
          })
          .catch(()=>{
            return;
          })
        }
        if(result.data.code==-3){
          this.$toast({message:"该商品已存在于购物车内"})
        }else{
          this.$toast({message:"加入成功"})
          this.getNum()
        }     
      })
    } 
  },
   mounted(){
   this.axios.get('/shop/all_ithesea', {
            params: {
                lid:this.lid
            }
        }).then(result=>{
      // console.log(result[0])
      this.items=result.data[0];
      this.product.yrmb=this.items.yrmb;
      // console.log(this.items)
    }),
      this.axios.get('/shop/xian_pic').then(result=>{
      // console.log(result)
      this.pics=result.data;
    })
          /*获取商品数量 */
    this.axios.get('/orders/cartnum').then(result=>{
      // console.log(result.data.data[0])
      // console.log(result)
      if(result.data.status==403){
        this.$toast("未登录")
        return;
      }
      var count=result.data.data[0];
      for(var key in count){
      }
      var num=count[key]
      // console.log(num)
      this.setNum(num)
      sessionStorage.setItem("number",num)
    })
   },
}
</script>
<style scoped>
  .container{
    min-height: 100vh;
    background-size: 100%;
    background-attachment:fixed;/*设置背景图不会随着页面的滚动而滚动 */
  }
  /*这是相关推荐半透明图片遮罩 */
 .recommend_01 .imgBox{
    width: 70%; 
    position: absolute;
    height: 8rem;
    top:0;
    left: 0;
    z-index: 6;
    background-image:linear-gradient( to right ,rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}
  /*这是顶部的半透明遮罩层 */
  .imgBox{
    width: 100%; 
    height: 10rem;   
    position: absolute;
    z-index: -2; 
    background-image:linear-gradient( to bottom ,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}
  .top_bar{
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 999;
  }
  /*给三个图标改变位置 */
  .left_icon{
    margin:0 0 0 1rem;
    /* position: absolute; */
    z-index: 10;
  
  }
  /*左边第一个返回图标样式 */
  .top_bar span img{
    margin: 1.2rem 0 0 0;
  }  
/*右边图标样式*/
  .right_icon{
    margin:0 1.2rem 0 0;
    z-index: 3;
  }
  .right_icon span{
    margin: 0.9rem 0 0 0.9rem;
  }
  /*右侧图标调整位置 */
  /*调整图片至于详情之上 */
  .intr{
    position: absolute;
    top:70%;
    width: 100%;
    z-index: 1;
  }
  .intr .intr_detail{
    position: relative;
    background-color: rgb(54, 42, 42);
    opacity: 0.9;
    width: 100%;
    z-index: 1;
    padding: 0 0 1rem 0;
  }
  /*修改字体样式 */
  .intr_text{
    font-size: 1rem;
    color: #fff;
  }
  /*修改点券图标大小*/
  .size{
    width: 14px;
    height: 14px;
  }
  /*修改标题样式 */
  .intr_text>p:first-child{
    padding: 2rem 0 0 1.5rem;
    margin: 0 0 0.5rem 0;
  }
  /*修改金币点券布局 */
  .flap{
    display: flex;
    justify-items: center; 
  }
  .flap p{
    padding: 0 0.5rem 0 1rem;
  }
  /*上架时间样式 */
  .topdate{
    font-size: 0.8rem;
    color: #ccc;
    margin:2rem 0 0 1rem;
  }
  /*上架提醒*/
  .todate_1{
    display: flex;
    justify-content: space-between;
    margin: -1.5rem 0 0 0;
  }
  .date_01{
    display: flex;
    padding: 0 1.5rem 0 1rem;
    border-left: 1px solid #ccc;
    flex-direction: column;
  }
  .date_01 img{
    width: 30px;
    height: 30px;
    margin: 0 0 0.1rem 0.6rem;
  }
  span.date_01{
    font-size: 0.8rem;
    color: #ccc;
  }
  /*修改分割线样式 */
  .fgx{
    display: flex;
    justify-items: center;
    justify-content: center;
    margin: 1rem 0 0 0;
    text-align: center;
    color: #fff;
    font-size: 1rem;
  }
  .recommend{
    width: 100%;
    background-color:#362a2a;
    padding: 0 0 2rem 0;
  }
  .recommend_01{  
    position: relative;
    margin: 0 0 0.8rem 0;
  }
  /*修改相关推荐每个英雄的名字 */
  .recommend_01 .jies{
    color: #fbbe8b;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .recommend_01 .jies span{
    margin: 2rem 0 0.5rem 2rem;
    position: absolute;
    z-index: 6;
  }
  .recommend_01 .jies span:nth-child(3) img{
    width:15px;
  }
  .recommend_01 .jies span:nth-child(3){
    position: absolute;
    top:20%
  }
  .bottom_bar{
   display: flex; 
    position: fixed;
    width: 100%;
    bottom:0;
    z-index: 1;
    background-color: #fff;
  }
  /*修改底部自带样式 */
  .van-button{
    border-radius: 0;
    margin: 0 0 -0.1rem 0;
  }
  .van-button--large{
    width: 33.33333%;
  }
  .van-button--default{
    color: #cd915e;
  }
  .d1 img{
    width: 25px;
    height: 25px;
    margin: 0.6rem 0 0 2rem;
  }
  .d1{
    display: flex;
    justify-items: center;
  }
   .tag_01{
   position: absolute;
   top: -2px;
   right: 45px;
   color: #fff;
   width: 15px;
   height: 15px;
   background-color: rgb(255, 51, 0);
   font-size: 0.7rem;
   text-align: center;
   line-height: 15px;
   border-radius: 25%;
 }
</style>