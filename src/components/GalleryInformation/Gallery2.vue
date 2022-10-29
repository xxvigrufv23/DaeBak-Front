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
      <v-col align="center">
        <h3 class="fontco">100% 한우사골, 합리적인 가격!!</h3>
        <p class="text-h5">100% 한우사골로 8시간씩 3번 정성을 담아 끓인 한우곰탕입니다.</p>
      </v-col>
    </v-row>
      <v-carousel height="500px" :show-arrows="false">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-footer>
 </v-container>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: require('../../assets/img/sagolgallery1.png')
          },
          {
            src: require('../../assets/img/sagolgallery2.png')
          },
          {
            src:require('../../assets/img/sagolgallery3.png')
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


</style>