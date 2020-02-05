<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import jwt_decode from "jwt-decode"
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapState(["decode"])
  },
  methods:{
    ...mapMutations(["setDecode"]),
    getDecode(){
    try{
      const decode=jwt_decode(sessionStorage.token)
    // console.log(decode)
    this.setDecode(decode.data)
   }catch(err){
     console.log("当前还未登录")
   } 
    }
  },
 created(){
  this.getDecode()
 },
 updated(){
  this.getDecode() 
 }
}
</script>
<style>
/* body{
  background-color: #f5f5f5c4;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family:Helvetica;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
