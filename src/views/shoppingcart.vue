<template>
  <div class="container">
   <div class="top-search"><!--顶部搜索-->
     <div class="top-search-portrait"><!--左上角头像-->
        <van-image
            round
            width="1.6rem"
            height="1.6rem"
            :src="src"
            />
        <div class="top-search-01" @click="to_search"><!--搜索框-->
        <van-search placeholder="找你喜欢的商品" v-model="value" />
      </div>
      <van-icon @click="to_mycart" name="shopping-cart-o" size="1.4em" color="#ffc900"/>
      <span class="tag_01" v-show="number!==0">{{number}}</span>
    </div>      
   </div>
   <div class="swip-p"><!--轮播图组件-->
     <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item><img style="width:100%" src="/shopping_img/swip_01.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img style="width:100%" src="/shopping_img/swip_02.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img style="width:100%" src="/shopping_img/swip_03.jpg" alt=""></van-swipe-item>
     </van-swipe>
   </div>
   <ul class="around"><!--5个按钮-->
      <li v-for="(item,i) of items" :key="i">
         <div class="cicle">
          <img :src="item.imgs" alt=""  :data-id="i" @click="to_hero"/>
         </div>
        <div class="text"> {{item.text}} </div>      
      </li>
   </ul>
   <van-divider /><!--分割线-->
   <div class="new-releases"><!--最新上架-->
      <span>最新上架</span>
      <span>全部</span>
   </div>
   <div class="new-releases-detail">
     <router-link to="/skin/1">
      <van-image
        width="98%"
        height="9rem"
        fit="cover"
        radius="5"
        :src="p1[0].puimg"
        />
          <span class="dq"><img src="/img/yydq.png"/>{{p1[0].coupon}}</span>
          <span class="gname">{{p1[0].putitle}}</span>
          </router-link>
        <div class="new-releases-detail-small">
          <router-link to="/ogift/1">
          <van-image
            width="7rem"
            height="4.4rem"
            fit="cover"
            radius="5"
            :src="p1[1].puimg"
          />
            <span class="dq dq_01"><img src="/img/yydq.png"/>{{p1[1].coupon}}</span>                       
            <span class="gname gname_01">{{p1[1].putitle}}</span> </router-link>
          <router-link to="/product/1">
          <van-image
            width="7rem"
            height="4.4rem"
            fit="cover"
            radius="5"
            :src="p1[2].puimg"
          />
            <span class="dq dq_02"><img src="/img/yydq.png"/>{{p1[2].coupon}}</span>
            <span class="gname gname_02">{{p1[2].putitle}}</span>
            </router-link>
        </div>       
      </div>
      <van-divider /><!--分割线-->
      <div class="new-hero"><!--推荐英雄-->
        <span class="new-hero-text">推荐英雄</span>
      </div>
        <div class="new-hero-detail">
          <ul>
            <li v-for="(item,i) of details" :key="i"  :data-lid="i" @click="to_products"> 
                <van-image
                  width="100%"
                  height="7.4rem"
                  fit="cover"
                  radius="4"
                  :src="item.himg"
                 />
                 <div class="imgBox"></div>
                <span class="name">{{item.htitle}}</span>
                <span class="dq"><img src="/img/yydq.png" alt="">{{item.hcoupon}}</span>
                <span class="jinb"><img src="/img/jinb.png" alt="">{{item.gold}}</span>
                <span class="context">{{item.hstitle}}</span>
            </li>
          </ul>
        </div>
        <van-divider /> <!--分割线-->
        <div class="new-skin"><!--推荐皮肤-->
         <span class="new-hero-text">推荐皮肤</span>
            <div class="new-hero-detail">
              <ul>
                <li v-for="(item,i) of p2" :key="i" :data-lid="i" @click="toskin">             
                  <van-image
                  width="100%"
                  height="7.4rem"
                  fit="cover"
                  radius="4"
                  :src="item.simg"
                  />
                 <div class="imgBox"></div>
                  <span class="name">{{item.stitle}}</span>
                  <span class="dq"><img src="/img/yydq.png" alt="">{{item.scoupon}}</span>
              </li>
            </ul>
          </div>         
        </div>
        <van-divider /> <!--分割线-->
        <div class="new-zhbi">
          <span class="new-hero-text">周边推荐</span>
           <div class="new-hero-detail">                  
                  <van-image
                  width="100%"
                  height="7.4rem"
                  fit="cover"
                  radius="4"
                  src="./shopping_img/zhoubian01.jpg"
                  /> 
                  <van-image
                  width="100%"
                  height="7.4rem"
                  fit="cover"
                  radius="4"
                  src="./shopping_img/zhoubian02.jpg"
                  />                                       
           </div>   
        </div>
        <tabbar></tabbar>
  </div>
</template>
<script>

import tabbar from "../components/tabbar.vue"
import{mapState,mapMutations} from 'vuex'
export default {
    components:{
        'tabbar':tabbar
    },
  data(){
    return{
      value:'',
      items:[
        {imgs:"/img/helm.png",text:'英雄'},
        {imgs:`/img/mask.png`,text:'皮肤'},
        {imgs:`/img/hykes.png`,text:'海克斯'},
        {imgs:`/img/bag.png`,text:'礼包'},
        {imgs:`/img/shop.png`,text:'周边'},
        ],
      details:[],
      p1:[{ puimg:''},{ puimg:''},{ puimg:''}],
      p2:[],
      p3:[],
      xuho:-1,
      src:''
       }
  },
  computed:{
    ...mapState(["decode","number"])
  },
  methods:{
    ...mapMutations(["setNum"]),
    to_search(){
      this.$router.push('/search')
    },
    to_mycart(){
        this.$router.push('/mycart')
    },
    to_hero(event,i){
      // event.stopPropagation()
      // var i=
      // console.log(i)
      this.xuho=event.target.dataset.id;
      this.$router.push(`/details/${this.xuho}`)
    },
    to_products(event,i){
      var i=parseInt(event.currentTarget.dataset.lid);
      i+=17;
      // console.log(i)
      this.$router.push(`/product/${i}`)
    },
    toskin(event,i){
      var i=parseInt(event.currentTarget.dataset.lid);
      i+=11;
      // console.log(i)
      this.$router.push(`/skin/${i}`)
    }
  },
  created(){
     this.src=this.decode.uimg!=null ? this.decode.uimg : '/page_img/default.png';
    //获取推荐英雄数据
    this.axios.get('/shop/').then(result=>{
      // console.log(result)
      this.details=result.data;
    }),
    this.axios.get('/shop/our_new').then(result=>{
      // console.log(result)
      this.p1=result.data
    }),
    this.axios.get('/shop/our_skin').then(result=>{
      // console.log(result);
      this.p2=result.data
    }),
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
/*半透明图片遮罩 */
.imgBox{
    width: 70%; 
    height: 117px;   
    position: absolute;
    border-radius: 2%;
    top:0;
    left: 0;
    background-image:linear-gradient( to right ,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}
  .top-search{
    width: 100%;
    position: fixed;
    top:0;
    z-index: 100;
    padding: 0.4rem 0 0.6rem 0;
    background-color: #fff;
  }
  /*重写搜索框间距 */
  .van-search .van-cell{
    padding: 0;
    margin-bottom:1px; 
    font-size: 0.9rem;
  }
  .top-search-portrait{
    display: flex;
    justify-content: flex-start;
    padding: 0 0 0 0.5rem;
  }
  .top-search-01{
    width: 85%;
    display: flex; 
    justify-content: center;
    margin-top:0.4rem;
  }
  .van-search{
    width: 100%;
    height: 14px;
    padding: 0;
    margin:0 0.5rem 0 0.5rem;
  }
  .van-icon{
   display: flex;
   justify-items: center;
  }
  .van-swipe{
    margin: 2.5rem 0.5rem 0 0.5rem;
  }
  /*5个按钮图标*/
  ul.around{
    display: flex;
    justify-items: center;
    justify-content: space-around;
    margin:0.5rem 0 0 0;
  }
  
  ul.around li div.cicle{
    width: 32px;
    height: 32px;
    background-color: rgba(187, 135, 90, 0.788);
    border-radius: 50%; 
    margin: 0 auto
  }
  ul.around li  img{
    width: 17px;
    height: 17px;
    padding: 0.45rem;
    
  }
  ul.around li .text{
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    padding:0.4rem 0 0.2rem 0;
  }
  /*分割线样式 */
  .van-divider{
    margin: 8px 0;
  }
  /*最新上架 */
  .new-releases{
    display: flex;
    justify-content: space-between;
  }
 
  .new-releases :first-child{
    font-size: 0.95rem;
    font-weight: 540;
    margin:0.5rem 0.5rem; 
  }
  .new-releases :last-child{
    font-size: 0.9rem;
    font-weight: 500;
    padding:8px 1.4rem; 
    color: #a8a8a8;
    background: url('/img/more.png') 87% no-repeat;
  }
  /*最新上架的大图 */
  .new-releases-detail{
    display: flex;
    justify-content: space-between;
    margin: 0.4rem 0 0 0.6rem;
    position: relative;
  }
  /*图片上的文字 */
  .new-releases-detail .dq{
    position: absolute;
    bottom: 22%;
    left: 0;
    display: flex;
    justify-items: center;
    color: #fbbe8b;
    margin: 0 0 0 0.5rem;
    font-size: 0.9rem;
  }
  .new-releases-detail .dq_01{
    bottom:69%;
    font-size: 0.75rem;
  }
  .new-releases-detail .gname_01{
    bottom:59% !important;
    font-size: 0.75rem !important;
  }
  .new-releases-detail .dq_02{
    bottom:19%;
    font-size: 0.75rem;
  }
  .new-releases-detail .gname_02{
    bottom:9% !important;
    font-size: 0.75rem !important;
  }
  .new-releases-detail .gname{
    position: absolute;
    bottom: 10%;
    left: 0;
    display: flex;
    justify-items: center;
    color: #fff;
    margin: 0 0 0 0.5rem;
    font-size: 0.9rem;
  }
  /*修改内容超出区域溢出显示三个点 */
  .gname.gname_01,.gname.gname_02{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  /*最新上架的两张小图 */
  .new-releases-detail-small{
    display: flex;
    justify-items: center;
    flex-direction: column;
    margin: 0 0.6rem 0 0;
    position: relative;
  }
.new-releases-detail-small .van-image{
  margin: 0 0 0 0;
  }
.new-hero-text{
  display: flex;
  justify-content: flex-start;
  margin:0.2rem 0 0.6rem 0.6rem;
  font-size: 0.95rem;
}
.new-hero-detail ul li{
  position: relative;
  margin:0 0.5rem 0.5rem 0.5rem;
  overflow: hidden;
}
.new-hero-detail ul li .name{
  position: absolute;
  left: 7%;
  top:23%;
  font-size: 0.9rem;
  font-weight: 520;
  color: #fbbe8b;
}
.new-hero-detail ul li .dq{
  position: absolute;
  left: 7%;
  top:43%;
  font-size: 0.9rem;
  font-weight: 520;
  color: #fbbe8b;
  display: flex;
  justify-items: center;
}
.dq img,.dq_01 img, .dq_02 img{
  width: 14px;
  height: 14px;
}
.new-hero-detail ul li .jinb{
  position: absolute;
  left: 22%;
  top:43%;
  font-size: 0.9rem;
  font-weight: 520;
  color: #fbbe8b;
  display: flex;
  justify-items: center;
}
.jinb img{
  width: 14px;
  height: 14px;
}
.new-hero-detail ul li .context{
  position: absolute;
  left: 7%;
  top:60%;
  font-size: 0.8rem;
  font-weight: 500;
  color: #73c3b9;
}
/*修改推荐皮肤英雄名字的位置 */
.new-skin .new-hero-detail ul li .name{
  top:33%;
}
.new-skin .new-hero-detail ul li .dq{
  top:52%;
}
/*周边商城图片间距 */
.new-zhbi .new-hero-detail .van-image{
  margin:0.5rem 0 0 0.5rem;
}
.new-zhbi{
  padding: 0 0.9rem 3.5rem 0;
}
  .tag_01{
   position: absolute;
   top: 3px;
   right: 3px;
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