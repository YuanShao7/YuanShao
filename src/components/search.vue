<!--搜索框全局组件-->
<template>
  <div class="app">
    <div class="top-search-01"><!--搜索框-->
        <img src="/img/fanhui.png" alt="" @click="back">
        <van-search placeholder="找你喜欢的商品" v-model="value" />
        <van-icon name="shopping-cart-o" size="1.4em" color="#ffc900" @click="to_mycart"/>
        <span class="tag_01" v-show="number!==0">{{number}}</span>
    </div>
      
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      value:''
    }
  },
   computed:{
    ...mapState(["number"])
  },
  methods:{
    back(){
      this.$router.push('/shoppingcart')
    },
    to_mycart(){
      this.$router.push('/mycart')
    }
  },
}
</script>
<style scoped>
  .van-search{
  padding: 0;
  margin: 0.2rem 0.2rem 0 0.2rem;
  width: 83%;
}
 .van-search .van-cell{
   padding: 0;
   font-size: 0.8rem;
   height: 29px;
   line-height: 29px;
 }
 
 .search_context{
   display: flex;
   justify-content: flex-start;
   margin:0.9rem 0 0 1rem;
   font-size: 0.7rem;
   color:#0f2e4e7d;
   font-weight: 520;
 }
 .van-search__action{
   padding: 0 8px;
    color: #d4a57e;
    font-size: 0.9rem;
    line-height: 29px;
 }
 .van-search__content{
   background-color: #f3f3f394;
 }
 .top-search-01{
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  background: #fff;
 }
 .top-search-01 img{
   width: 21px;
   height: 21px;
   margin: 0.4rem 0 0 0.2rem;
 }
 .van-icon{
   margin: 0.4rem 0.3rem 0 0;
 }
  .tag_01{
   position: absolute;
   top: 8px;
   right: 2px;
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