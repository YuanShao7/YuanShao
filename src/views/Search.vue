<template>
  <div class="app">
    <div class="top_search">
      <van-search
        v-model="value"
        placeholder="找你喜欢的商品"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        />
    </div>
    <div class="search_context">
      <span>搜索历史记录</span>
    </div>
      <div class="no_search" v-show="this.search_cook.length==0">暂无历史搜索记录</div>
     <div class="cook_p"><!--已搜索内容-->
        <ul>
          <li v-for="(cook,i) of search_cook" :key="i">
           <van-icon name="clock-o" color="#0f2e4e7d" size="13px"/>
           <span>{{cook}}</span> 
           <van-icon name="cross" color="#0f2e4e7d" :data-cook="cook" :data-i="i" @click="clear"/>        
          </li>
        </ul>
      </div>
      <span class="clear_search" v-show="this.search_cook.length>0" @click="clear_search">清除全部记录</span>

  </div>
</template>
<script>
export default {
  data(){
    return{
      value:'',
      search_cook:[],
      cook_l:''
    }
  },
  methods:{
    /*清除所有记录 */
    clear_search(){
      localStorage.removeItem("search_cook");
      this.search_cook=[];
    },
    clear(e){
      if(this.cook_l.indexOf(",")!=-1){
        var i=e.target.dataset.i
        var arr=this.cook_l.split(',')
        arr.splice(i,1)
        this.cook_l=arr.join(",")
        localStorage.setItem("search_cook",this.cook_l)
         if(this.cook_l.charAt(this.cook_l.length-1)!=","){
           var result=this.cook_l.replace(","+event.target.dataset.cook,"")
          localStorage.setItem("search_cook",result)
          this.search_cook.splice(event.target.dataset.i,1)
          }else{
          var result=this.cook_l.replace(event.target.dataset.cook+",","")
          this.search_cook.splice(event.target.dataset.i,1)
          localStorage.setItem("search_cook",result)
               }            
             }else{
              localStorage.removeItem("search_cook");
              this.search_cook.splice(event.target.dataset.i,1)          
      }      
     },
    onSearch(){
      if(this.value==""){
        this.$toast("搜索内容不能为空");
        return;
      }else{
      if(this.search_cook.length<6){
        this.search_cook.push(this.value);
        localStorage.setItem("search_cook",this.search_cook)
        this.cook_l=localStorage.getItem("search_cook");
        this.value="";
      }else{
        this.search_cook.push(this.value);
        this.search_cook.shift();
        localStorage.setItem("search_cook",this.search_cook)
        this.cook_l=localStorage.getItem("search_cook");
        this.value="";
      }  
     }  
    },
    onCancel(){this.$router.go(-1)},
    /*获取保存在localStorage的数据*/
    getLocal(){     
    try{ 
       /*获取保存在localstorage的数据 */
       var cook_l=localStorage.getItem("search_cook");
        /*保存两份数据*/
       this.cook_l=cook_l;
      //  this.search_cook=cook_l;
       /*判断localstorage是否包含,如果包含，按照，切割成数组，如果是undefined 则显示空数组，如果不包含逗号，则直接显示*/
      if(cook_l.indexOf(",")!=-1){
      this.search_cook=cook_l.split(",")
      // console.log(this.search_cook)
     }else{
      this.search_cook[0]=cook_l.slice(0)
      // console.log(this.search_cook)
     }
     }catch(e){}  
    },
  },
 watch:{
   cook_l(){
     this.getLocal()
   },
 },
 created(){this.getLocal()},
}
</script>
<style scoped>
.van-search{
  padding: 0.4rem;
  margin: 0.2rem 0.2rem 0 0.8rem
}
 .van-search .van-cell{
   padding: 0;
   font-size: 0.9rem;
 }
 .search_context{
   display: flex;
   justify-content: flex-start;
   margin:0.9rem 0 0 1rem;
   font-size: 0.8rem;
   color:#0f2e4e7d;
   font-weight: 530;
 }
 .van-search__action{
   padding: 0 2px 0 4px;
    color: #d4a57e;
    font-size: 0.9rem;
    line-height: 30px;
 }
 .van-search__content{
   background-color: #f3f3f394;
 }
 .cook_p{
   display: flex;
   flex-direction: row;
   margin: 1.5rem 0 0 0;
   justify-content: flex-start;
 
 }
 .no_search{
   display: flex;
   justify-content: center;
   font-size: 0.9rem;
   color:#0f2e4e7d;
   margin: 1rem 0 1rem 0 ;
 }
 /*搜索小图标*/
 .cook_p ul li span{
    padding: 0 0 0 1rem;
 }
 .cook_p ul{
   width: 98%;
   display: flex;
   justify-content: space-around;
   flex-wrap:wrap;
 }
 .cook_p ul li{
   width: 95%;
   font-size: 14px;
   margin:1rem 0.5rem 0 1rem;
   padding: 0 0 0.4rem 0;
   display: flex;
   justify-items: center;
   border-bottom: 1px solid #ccc;
   position: relative;
 }
 /*关闭图标 */
.van-icon-cross{
  position: absolute;
  top: 0;
  right:0;
}
/*清除记录颜色 */
.clear_search{
  display: flex;
  justify-content: center;
  font-size:0.9rem;
  color: #d4a57e;
  margin: 1rem 0 0 0;
}
</style>