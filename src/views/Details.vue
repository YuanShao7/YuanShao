<template>
  <div class="container">
    <van-sticky>
      <my-search></my-search>
    </van-sticky>
    <!---->
    <van-tabs v-model="activeName" title-active-color="rgb(49,173,166)" animated swipeable color="rgb(49,173,166)" line-width="15px">
      <van-tab title="英雄" name="0">
        <div class="hero-details">
          <ul>
           <li v-for="(item,i) of details" :key="i" :data-lid="i" @click.stop="to_product">
                <van-image
                  width="100%"
                  height="11rem"
                  fit="cover"
                  radius="1"
                  :src="'/'+item.wimg"/>
                 <div class="imgBox"></div>
                <span class="name">{{item.wtitle}}</span>
                <span class="dq"><img src="/img/yydq.png" alt="">{{item.wcoupon}}</span>
                 <span class="jinb"><img src="/img/jinb.png" alt="">{{item.wgold}}</span>
            </li>
          </ul>          
        </div>
        </van-tab>
      <van-tab title="皮肤" name="1">
        <div class="skin-details">
          <ul>
           <li v-for="(item,i) of p2" :key="i"  :data-lid="i" @click="to_pifu">
                <van-image
                  width="11rem"
                  height="11rem"
                  fit="cover"
                  radius="1"
                  :src="'/'+item.fimg"/>
                 <div class="imgBox"></div>
                <span class="name">{{item.ftitle}}</span>
                <span class="dq"><img src="/img/yydq.png" alt="">{{item.fcoupon}}</span>
            </li>
          </ul>          
        </div>
      </van-tab>
      <van-tab title="海克斯" name="2">
         <div class="skin-details">
          <ul>
           <li v-for="(item,i) of p3" :key="i" :data-lid="i" @click="to_ithesea">
                <van-image
                  width="11rem"
                  height="11rem"
                  fit="cover"
                  radius="1"
                  :src="'/'+item.timg"/>
                 <div class="imgBox"></div>
                <span class="name">{{item.ttitle}}</span>
                <span class="dq"><img src="/img/yydq.png" alt="">{{item.tcoupon}}</span>
            </li>
          </ul>          
        </div>
      </van-tab>
      <van-tab title="礼包" name="3">
        <div class="skin-details">
          <ul>
           <li v-for="(item,i) of p4" :key="i" :data-lid="i" @click="to_ogift">
                <van-image
                  width="11rem"
                  height="11rem"
                  fit="cover"
                  radius="1"
                  :src="'/'+item.gimg"/>
                 <div class="imgBox"></div>
                <span class="name">{{item.gtitle}}</span>
                <span class="dq"><img src="/img/yydq.png" alt="">{{item.gcoupon}}</span>
            </li>
          </ul>          
        </div>
      </van-tab>
    </van-tabs>
 </div>
</template>
<script>

export default {
  props:["xuho"],
  data() {    
    return {
      activeName: "0",
      details:[],
      p1:[],
      p2:[],
      p3:[],
      p4:[]
    }   
  },

  methods:{
    toDetail(){
      this.activeName=this.xuho;
      // console.log(this.activeName)
    },
    to_product(event){     
      var i=parseInt(event.currentTarget.dataset.lid)
      this.$router.push(`/product/${i+1}`)
    },
    to_pifu(event){
      var i=parseInt(event.currentTarget.dataset.lid);
      this.$router.push(`/skin/${i+1}`)
    },
    to_ithesea(event){
       var i=parseInt(event.currentTarget.dataset.lid);
      this.$router.push(`/ithesea/${i+1}`)
    },
    to_ogift(event){
       var i=parseInt(event.currentTarget.dataset.lid);
      this.$router.push(`/ogift/${i+1}`)
    }
  },
   created(){
      this.axios.get('/shop/our_warrior').then(result=>{
      // console.log(result)
      this.details=result.data;
    }),
    this.axios.get('/shop/our_fupi').then(result=>{
      // console.log(result)
      this.p2=result.data;
    })
    this.axios.get('/shop/our_thesea').then(result=>{
      // console.log(result)
      this.p3=result.data
    })
    this.axios.get('/shop/our_gift').then(result=>{
      // console.log(result)
      this.p4=result.data
    })
    this.toDetail()//这是点击图片跳转指定位置
    },    
}
</script>
<style scoped>
.imgBox{
    width: 100%; 
    height: 11rem;   
    position: absolute;
    border-radius: 3%;   
    background-image:linear-gradient( to top ,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}
.hero-details ul,.skin-details ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgb(238,239,240);
  padding: 1rem 0 0 0;
  margin: 1rem 0 0 0;
}
.hero-details ul li,.skin-details ul li{
  position: relative;
  margin:0 0.3rem 0.5rem 0.3rem;
  overflow: hidden;
  width: 47%;
  display: flex;
  justify-content: space-around;
}
.hero-details ul li .name,.skin-details ul li .name{
  position: absolute;
  top:73%;
  margin: 0 auto;
  font-size: 0.9rem;
  font-weight: 520;
  color: #fff;
}
.hero-details ul li .dq,.skin-details ul li .dq{
  position: absolute;
  top:87%;
  font-size: 0.9rem;
  font-weight: 520;
  color: #fbbe8b;
  display: flex;
  justify-items: center;
  left: 21%;
}
.skin-details ul li .dq{
  top:87%;
  left: 35%;
}
.dq img,.dq_01 img, .dq_02 img{
  width: 14px;
  height: 14px;
}
.hero-details ul li .jinb{
  position: absolute;
  left: 55%;
  top:87%;
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

</style>