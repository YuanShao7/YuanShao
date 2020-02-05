import Vue from 'vue'
import VueRouter from 'vue-router'
import Rec from '../views/Rec.vue'
import My from '../views/My.vue'
import Sm from '../views/Sm.vue'
import Login from '../views/Login_1.vue'
import Reg from '../views/Reg.vue'
import Com from '../views/Com.vue'
import Ping from '../views/Pinglun.vue'
import skin from '../views/skin.vue'
import ithesea from '../views/ithesea.vue'
import ogift from '../views/ogift.vue'
import Mychat from '../views/Mychat.vue'
import Mycollect from '../views/Mycollect.vue'
import Set from '../views/Set.vue'
import Tao from '../views/Taolun.vue'
import Mygame from '../views/Mygame.vue'
import Allgame from '../views/Allgame.vue'
import Personage from '../views/Personage.vue'
import { Dialog } from 'vant'
Vue.use(VueRouter)


const routes = [{
        path: '/Tao',
        name: 'Tao',
        component: Tao
    },
    {
        path: '/Ping',
        name: 'ping',
        component: Ping
    },
    {
        path: '/Com',
        name: 'com',
        component: Com
    },
    {
        // 首页
        path: '/',
        props: true,
        name: 'rec',
        component: Rec
    },
    {
        path: '/allgame',
        name: 'allgame',
        component: Allgame
    },
    {
        // 推荐内容组件
        path: '/news/:num',
        props: true,
        name: 'news',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "news" */ '../views/News.vue')
    },
    {
        path: '/Reg',
        name: 'reg',
        component: Reg
    },
    {
        path: '/Login',
        name: 'login',
        component: Login
    },
    //我的界面 
    {
        path: '/Sm',
        name: 'sm',
        component: Sm
    },
    //我的里面点击消息的跳转界面
    {
        path: '/Mychat',
        name: 'mychat',
        component: Mychat
    },
    //我的里面点击收藏跳转的界面
    {
        path: '/Mycollect',
        name: 'mycollect',
        component: Mycollect
    },
    //我的里面点击设置
    {
        path: '/Set',
        name: 'set',
        component: Set
    },
    //我的里面我的游戏
    {
        path: '/Mygame',
        name: 'mygame',
        component: Mygame
    },
    // 个人资料
    {
        path: '/Personage',
        name: 'personage',
        component: Personage
    },
    {
        path: '/My',
        name: 'my',
        component: My
    },
    /*跳转到皮肤详情界面 */
    {
        path: '/skin/:lid',
        name: 'skin',
        props: true,
        component: skin
    },
    /*跳转海克斯详情界面 */
    {
        path: '/ithesea/:lid',
        name: 'ithesea',
        props: true,
        component: ithesea
    },
    /*跳转礼包详情界面 */
    {
        path: '/ogift/:lid',
        name: 'ogift',
        props: true,
        component: ogift
    },
    {
        //商城首页
        path: '/shoppingcart',
        name: 'shoppingcart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "shoppingcart" */ '../views/shoppingcart.vue')
    },
    {
        //搜索界面路由
        path: '/search',
        name: 'search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "shoppingcart" */ '../views/Search.vue')
    },
    {
        //周边英雄皮肤
        path: '/details/:xuho',
        props: true,
        name: 'details',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "details" */ '../views/Details.vue')
    },
    {
        //英雄介绍详情
        // path: '/product/:hid',
        path: '/product/:lid',
        props: true,
        name: 'product',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "product" */ '../views/Product.vue')
    },
    {
        //购物车组件
        path: '/mycart',
        name: 'mycart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "mycart" */ '../views/MyCart.vue')
    },
    {
        //更换手机号组件
        path: '/changephone',
        name: 'changephone',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "changephone" */ '../views/ChangePhone.vue')
    },
    {
        //绑定手机号组件
        path: '/phonenumber',
        name: 'phonenumber',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "phonenumber" */ '../views/phoneNumber.vue')
    },

]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes
})
router.beforeEach((to, from, next) => {
    // window.scrollTo(0, 0);
    const isLogin = sessionStorage.token ? true : false
        // console.log(isLogin)
    if (to.path == '/login' || to.path == '/Login' || to.path == "/Reg" || to.path == "/" || to.name == 'news' || to.path == '/allgame') {
        next()
    } else {
        isLogin ? next() : Dialog.confirm({
                message: "该功能登录后才可以使用哦~",
                confirmButtonText: "马上登录",
                cancelButtonText: "看看其他",
            })
            .then(() => {
                next("login")
            })
            .catch(() => {

            })
    }
})

export default router