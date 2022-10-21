<template>
  <div id="app">
   <header>
    <Navbar :menuitems = "menuitems"/>


   </header>
   <router-view></router-view>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  data(){
    return {
      menuitems:["브랜드소개","매장 위치","갤러리","고객의 소리","공지사항"],

    }
  },
  components: {
    Navbar
    
  }
}
</script>

<style>

* {
  margin-top: 15px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;

}
header{
  width: 100%;
  background-color:#fff1bf;
  padding:0px;
}
</style>
