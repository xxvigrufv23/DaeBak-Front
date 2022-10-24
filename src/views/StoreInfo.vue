<template>
  
  <nav>
      <div class="storeinfoclass" @click="gotoHyungchonPage" style="cursor: pointer;" >향촌점</div>
      <div class="storeinfoclass" @click="gotoMokryunPage" style="cursor: pointer;" >목련점</div>
      <div class="storeinfoclass" @click="gotoDomaPage" style="cursor: pointer;" >도마점</div>
  </nav>
</template>

 <script>
 export default {
    data(){
        return{
            
            Storeinfomenu : [{
                                    id : 0,
                                    title: "향촌점",
                                    image: url('@/assets/img/향촌점.png'),
                                    number: "042-123-4567",
                                    time: "07시~ 21시",
                                    location: url('@/assets/img/향촌점 위치.png')
                                },
                                {
                                    id : 1,
                                    title: "목련점",
                                    image: url('@/assets/img/목련점.png'),
                                    number: "042-123-4567",
                                    time: "07시~ 21시",
                                    location: url('@/assets/img/목련점 위치.png')
                                },
                                {
                                    id : 2,
                                    title: "도마점",
                                    image: url('@/assets/img/도미점.png'),
                                    number: "042-123-4567",
                                    time: "07시~ 21시",
                                    location: url('@/assets/img/도미점 위치.png')
                                }]
           
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