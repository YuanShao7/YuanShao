<template>
  <div>
    <!--购物车表头-->
    <div class="top_bar">
      <span class="left_icon" @click="back">
        <img src="/img/backs.png" alt="">
      </span>
          <div class="center_text">
          <span>购物车</span>
          <span @click="clear">清空</span>
          </div>
       <span class="right_icon"><img src="/img/youhuiquan.png" alt=""></span>
     </div>
     <div class="tanchuceng">
     <van-divider />
     <!--弹出层-->        
     <van-cell is-link @click="showPopup">
       <span class="dangq">当前账号</span>
       <span class="nick">账号昵称</span>
       <span class="bigqu">福乐尔大区</span>
     </van-cell>
     </div>
        <van-popup v-model="show" :style="{width:'70%'}">
          <van-index-bar :index-list="indexList">
            <van-cell title="请选择大区" />
            <van-cell title="艾欧尼亚" />
            <van-cell title="黑色玫瑰" />
            <van-cell title="暗影岛" />
            <van-cell title="峡谷之巅" />
            <van-cell title="弗雷尔卓德" />
            <van-cell title="德玛西亚" />
            <van-cell title="扭曲丛林" />
            <van-cell title="取消" @click="oncancel"/>
          </van-index-bar>
        </van-popup>
            <!-- 购物车中的商品  -->
            <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-card
         v-for="(item,i) of list" :key="i"
            :title="item.cname"
            :thumb="item.img"
          >  
          <div slot="tags" class="tags_01">
            <van-tag>
              <span>
                <img src="/img/yydq.png" alt="">{{item.dianquan}}
              </span>
              <span v-show="item.jinbi!=0">
                <img src="/img/jinb.png" alt="">{{item.jinbi}}
              </span>            
              <span>¥{{item.price.toFixed(2)}}</span>
              <span class="close"  :data-id="item.id" @click="delItem(item.id)"><van-icon name="close" /></span>
            </van-tag>
                <van-checkbox :name="i" checked-color="#cd915e" ></van-checkbox>
          </div>                  
      </van-card>
        </van-checkbox-group>
         <!-- 提交订单组件 -->
         <van-submit-bar
            :decimal-length="2"
            :price="price*100"
            button-text="提交订单"          
            @submit="onSubmit">
            <van-button type="default" @click="checkAll">全选</van-button>
            <van-button type="default" @click="toggleAll">取消全选</van-button>
         </van-submit-bar>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
   data() {
    return {
      show: false,
      indexList: [],
      list:[{price:0}],
      result:[],
      price:0,
    }
  },

  methods: {
     ...mapMutations(["setNum"]),
    clear(){
      var url="/orders/clear"
      this.$dialog.confirm({
        message: '确定清空所有商品?'
      }).then((res) => {
        this.axios.get(url)
        .then(result=>{
          // console.log(result)
          this.getCart()
          this.getNum()
        })
      }).catch(() => {
        // on cancel
      });
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll(false);
    },
    /*删除当前所选 */
    delItem(eid){
      //一个确定提示框
      this.$dialog.confirm({
          message: '是否删除当前商品'
        }).then((res) => {
          // on confirm
          //点击确认进行删除当前商品
          this.axios.get('/orders/delItem',{
            params:{
               id:eid            
            }
          }).then(result=>{
            // console.log(result)
            this.getCart()
            this.getNum()
            this.getNumber()
          })
          this.getMycart();
        }).catch(() => {
          // on cancel
        });
    },
    getMycart(){
      // console.log(eid)
      this.axios.get('/orders/delItem',{
        params:{
          id:eid            
        }
      }).then(result=>{
        // console.log(result)
        this.getCart()
      })
    },
    back(){
      this.$router.go(-1)
    },
    showPopup() {
      this.show = true;
    },
    oncancel(){
      this.show=false;
    },
    onSubmit(){},
    getCart(){
      this.axios.get('/orders/findcart').then(result=>{
      this.list=result.data.data;         
      })
    // console.log(this.list) 
    },
    getNum(){
      this.axios.get('/orders/sum').then(res=>{
          // console.log(res)
          var sum=res.data.data;
          for(var key in sum){
            this.price=sum[key]
            // console.log(sum[key])
          }
        }
      )
    },
    /*获取商品数量 */
    getNumber(){
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
    }
  },
  created(){
   
  //  console.log(this.list)
 
  },
  mounted(){
    // console.log(this.list)
      this.getCart()
       this.getNum()
  },
  watch:{
    price(){
     
    }
  }
}
</script>
<style scoped>
.top_bar{
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 0 0 ;
  color: #cd915e;
  position: fixed;
  top:0;
  left: 0;
  z-index: 10;
  margin: 0 0 3rem 0;
  width: 100%;
  background-color: #fff;
}
.left_icon{
  padding: 0 0 0 0.3rem;
}
.left_icon img{
  width: 20px;
  height: 20px;
}
.center_text{
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0.1rem 0 2rem 0;
  /* justify-content: center; */
}
.center_text span:nth-child(1){
  font-size: 1.1rem;
  margin: 0 auto;
  position: absolute;
  left: 45%;
}
.center_text span:nth-child(2){
  font-size: 0.9rem;
  margin: 0 0 0 85%;
  float: right;

}
.right_icon{
  padding: 0 0.7rem 0 0;
}
.van-divider{
  margin: 5px 0;
  border-color:#b4a071;
  padding: 0 0 0 0;
  background-color: #fff;
}
/*重写弹出层内部样式 */
.van-index-bar.van-index-anchor{
    font-size: 1rem;
  text-align: center;
}
.tanchuceng>>>.van-cell{
  display: flex;
  justify-content: space-around;
  padding: 0;
}
.van-cell{
  font-size: 1rem;
  text-align: center;
}
/*调整弹出层样式 */
.dangq{
 font-size: 0.9rem;
 color: #9e9b9b;
 padding: 0 0 0  1rem; 
}
.nick{
  font-size: 1rem;
  padding:0 0 0 5rem; 
}
.bigqu{
  font-size: 0.9rem;
  color: #9e9b9b;
  float: right;
}
/*重写卡片字体样式 */
.van-card{
  font-size: 0.9rem;

}
.van-card__title{
  padding: 1.2rem 0 0 0.8rem;
    font-weight: 540;
}
.van-tag--default{
  background: transparent;
}
.van-tag{
  color: #cd915e;
   padding: 1rem 0 0 0.8rem;
   font-size: 0.9rem;
 
}
.van-tag span{
  display: flex;
  justify-items: center;
  line-height: 20px;
  padding: 0 1rem 0 0;
}
.van-tag img{
  width: 20px;
  height: 20px;
  padding: 0 0.2rem 0 0;
}
/*修改全选按钮样式 */
.van-checkbox{
 padding: 0 0 0 1rem;
}
.van-submit-bar__price{
  color: #cd915e;
}
.van-button--danger{
  background:linear-gradient(to right, #b93a4c, #f04a34);
  border: none;
}
.van-tag span.close{
  position: absolute;
  right: 0;
  top:0;
  padding: 0;
}
.van-button--default{
  border:none;
}
/*修改单选框样式 */
.van-checkbox{
  padding: 0 0 0 0.5rem;
}
.van-checkbox-group{
  padding: 6rem 0 4rem 0;
}
.tanchuceng{
  position: fixed;
  top: 2.5rem;
  padding: 0.3rem 0.3rem 0 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;
}
.tags_01{
  display: flex;
  justify-content: space-between;
}
</style>
