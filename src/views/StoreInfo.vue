<template>
  <nav>
      <div class="storeinfoclass" @click="gotoHyangchonPage" style="cursor: pointer;" >{{ hyangchon }}</div>
      <div class="storeinfoclass" @click="gotoMoglyeonPage" style="cursor: pointer;" >{{ moglyeon }}</div>
      <div class="storeinfoclass" @click="gotoDomaPage" style="cursor: pointer;" >{{ doma }}</div>
  </nav>
</template>

 <script>
 export default {
    name: 'StoreInfo',
    data(){
      return{
        moglyeon: '목련점',
        doma: '도마점',
        hyangchon:'향촌점',
      }
    },
    methods: {
      gotoDomapage() {
        this.$router.push('Doma');
      },
      gotoHyungchonpage() {
        this.$router.push('Hyungchon');
      },
      gotoMokryunpage() {
        this.$router.push('Mokryun');
      }
    }
}


</script>

<style>
.storeinfoclass{
    font-family: 'ulsanjunggu';
    color:black;
    padding:0px 180px;
    position:relative;
    text-align:center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    margin-top: 100px;
    font-size : 50px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.close{
  margin-right:50px;
}
.location-size{
  width: 100%;
  margin-top:40px;

}
</style>