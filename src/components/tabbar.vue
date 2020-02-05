<template>
    <!-- 底部导航栏组件 -->
    <van-tabbar route active-color="#000" class="van-hairline--top">
        <van-tabbar-item  v-for="(item,index) in tabbars" :key="index" :to="item.name">
            <span>{{item.title}}</span>
            <img class="imgstyle" slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal"/>    
        </van-tabbar-item>    
    </van-tabbar>
</template>
<script>
export default {
    data(){
        return{
            tabbars:[
                {
                    name:"/",
                    title:"推荐",
                    normal:'/图标/推荐/icon_推荐-面.png',
                    active:'/图标/推荐/icon_推荐-面（1）.png'
                },
                {
                    name:"/com",
                    title:"社区",
                    normal:'/图标/社区/圈子.png',
                    active:'/图标/社区/圈子 (1).png'
                },
                {
                    name:"/shoppingcart",
                    title:"商城",
                    normal:'/图标/商城/购物车空.png',
                    active:'/图标/商城/购物车空 (1).png'
                },
                {
                    name:"/Sm",
                    title:"我",
                    normal:'/图标/我的/我的选中 (1).png',
                    active:'/图标/我的/我的选中.png'
                },
            ]
        }
    },
}
</script>
<style scoped>
     /*图片大小 */
     .van-tabbar{
         height:41px;
         margin-top:2px;
     }
    .imgstyle{
        width:21px;
        height: 19px;;
    }
</style>