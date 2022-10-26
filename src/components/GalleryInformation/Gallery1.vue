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
    <v-row>
    <v-col align ="center">
        <h3  class="fontco">안전관리인증기준 (HACCP) 인증기관! </h3>
        <p class= "text-h5">가족이 먹는다 생각하고 깨끗하게 관리하고 있습니다.</p>
    </v-col>
    </v-row> 
    </v-footer>
      <v-carousel height="500px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src" class="imgsize"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
 </v-container>

</template>

<script>
export default {
   data () {
      return {
        items: [
          {
            src: require('../../assets/img/factorygallery1.png')
          },
          {
            src: require('../../assets/img/factorygallery2.png')
          },
          {
            src:require('../../assets/img/factorygallery3.png')
          },
          {
            src:require('../../assets/img/factorygallery4.png')
          },
        {
            src:require('../../assets/img/factorygallery5.png')
          },
        ],
      }
    },    
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
.imgsize{
    width:800px;
    height:500px
}
</style>