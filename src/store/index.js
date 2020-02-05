import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /*保存全局变量uname */
        uname: "",
        isLogin: false,
        decode: '',
        number: 0
    },
    mutations: {
        /*专门修改state中的变量 */
        /*不能放异步 */
        setUname(state, uname) {
            state.uname = uname;
        },
        setIslogin(state, isLogin) {
            state.isLogin = isLogin
        },
        setDecode(state, decode) {
            state.decode = decode;
        },
        setNum(state, number) {
            state.number = number
        }
    },
    actions: {
        //专门负责发送异步请求
        login(context, user) {
            axios.get("/user/login", {
                params: user
            }).then(
                result => {
                    console.log(result)
                        // context.commit("setUname", result.data.code)
                }
            )
        }
    },
    modules: {}
})