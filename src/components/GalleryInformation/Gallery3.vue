<template>
    <v-container fluid style="width:800px">
    <v-footer
        color="white"
        padless>
            <v-row 
            
            justify="center"
            no-gutters>
                <v-col  style="float: left; width: 25%;" align="center">
                    <v-btn @click="gotoGalleryPage()" color="black " outlined="true"  width="190px" height="50px" text class="my-2">
                    <p class="text-h6">메뉴 이미지</p>
                    </v-btn>
                </v-col>
                <v-col  style="float: left; width: 25%;" align="center">
                    <v-btn  @click="gotoGallery1Page()" color="black " outlined="true"  width="190px" height="50px" text class="my-2">
                    <p class="text-h6">공장 이미지</p>
                </v-btn>
                </v-col>
                <v-col  style="float: left; width: 25%;" align="center">
                    <v-btn @click="gotoGallery2Page()" color="black " outlined="true"  width="190px" height="50px" text class="my-2">
                    <p class="text-h6">제품</p>
                    </v-btn>
                </v-col>
                <v-col  style="float: left; width: 25%;" align="center">
                    <v-btn @click="gotoGallery3Page()" color="black " outlined="true"  width="190px" height="50px" text class="my-2">
                    <p class="text-h6">노량푸드 사이트</p>
                    </v-btn>
                </v-col>
            
            </v-row>
            <v-row dense>
                <v-col aling="end" >
                    <img src="../../assets/img/img_main_logo.png" width="200px" height="200px"  class="ml-10 mt-10">
                </v-col>
                <v-col aling="left">
                    <p class="text-h5">KFOOD NORYANG</p>
                    
                    <v-btn icon class="ml-15" >
                        <v-icon class= "mb-3" color="green">mdi-post</v-icon>
                        <p>blog.naver.com/kbk7720</p>
                    </v-btn><br>
                    
                        <v-btn icon class="ml-15 pl-13">
                        <v-icon class="mb-3" color="green">mdi-storefront</v-icon>
                        <p>smartstore.naver.com/noryang</p>
                    </v-btn><br>
                    <v-btn icon class="mr-">
                        <img src="../../assets/img/instagramicon.png" width="25px" height="25px" class="mb-3">
                        <p>Kfood9234</p>
                    </v-btn><br>
                    <v-btn icon  class="ml-16 pl-16">
                        <img src="../../assets/img/facebookicon.png" width="25px" height="25px" class="mb-3 ml-14">
                        <p>facebook.com/people/노량/100082754516692/</p>
                    </v-btn><br>
                    <v-btn icon class="ml-13 ">
                        <img src="../../assets/img/bandicon.png" width="25px" height="25px" class="mb-3">
                        <p>band.us/band/88196348</p>
                    </v-btn><br>
                    <v-btn icon class="ml-12 ">
                        <img src="../../assets/img/kakao-talk.png" width="25px" height="25px" class="mb-3">
                        <p>카카오톡채널 바로가기 QR</p>
                    </v-btn><br>
                    <img src="../../assets/img/kakaotalkQRcode.png" width="150px" height="150px">


                    
                </v-col>
                    

            </v-row>
        </v-footer>
    </v-container>
  
</template>

<script>
export default {
    methods: {
      gotoGalleryPage() {
        this.$router.push('Gallery');
      },
      gotoGallery1Page() {
        this.$router.push('Gallery1');
      },
      gotoGallery2Page() {
        this.$router.push('Gallery2');
      },
      gotoGallery3Page() {
        this.$router.push('Gallery3');
      }
    }

}
</script>

<style>

</style>