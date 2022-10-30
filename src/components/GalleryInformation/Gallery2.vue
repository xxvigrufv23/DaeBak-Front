<template>
 <v-container fluid style="width:800px">
  <v-footer
    color="white"
    padless>
    <v-row
      justify="center"
      no-gutters>
        <v-col  style="float: left; width: 25%;" align="center">
            <v-btn @click="gotoGalleryPage()" color="black " outlined="true"  width="190px" height="50px"  class="my-2">
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

      <v-row class="my-10" align="center">
        <v-col align="center" >
      <h3 class="fontco">"노량케이푸드만의 미역국 레시피"</h3>
      </v-col  >
    </v-row>
     <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        미역국 of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        미역국 of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        미역국 of step 3
      </v-stepper-step>
            <v-stepper-step
        
        step="4"
      >
        미역국 of step 4
      </v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="620px"
        >
        <v-img src="../../assets/img/miyeokrecipe1.png" height=""></v-img></v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="620px"
        ><v-img src="../../assets/img/miyeokrecipe2.png" height=""></v-img></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

 
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="620px"
        ><v-img src="../../assets/img/miyeokrecipe3.png" height=""></v-img></v-card>

        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Continue
        </v-btn>

 
      </v-stepper-content>
            <v-stepper-content step="4">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="620px"
        ><v-img src="../../assets/img/miyeokrecipe4.png" height=""></v-img></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

    
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  <v-row class="my-10" align="center">
        <v-col align="center" >
      <h3 class="fontco">"노량케이푸드만의 떡국 레시피"</h3>
      </v-col>
    </v-row>
     <v-stepper v-model="a1">
    <v-stepper-header>
      <v-stepper-step
        :complete="a1 > 1"
        step="1"
      >
        떡국 of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="a1 > 2"
        step="2"
      >
        떡국 of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        떡국 of step 3
      </v-stepper-step>
            <v-stepper-step
        
        step="4"
      >
        떡국 of step 4
      </v-stepper-step>
      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="620px"
        >
        <v-img src="../../assets/img/ricecakerecipe1.png" height=""></v-img></v-card>

        <v-btn
          color="primary"
          @click="a1 = 2"
        >
          Continue
        </v-btn>


      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="620px"
        ><v-img src="../../assets/img/ricecakerecipe2.png" height=""></v-img></v-card>

        <v-btn
          color="primary"
          @click="a1 = 3"
        >
          Continue
        </v-btn>


      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="620px"
        ><v-img src="../../assets/img/ricecakerecipe3.png" height=""></v-img></v-card>

        <v-btn
          color="primary"
          @click="a1 = 4"
        >
          Continue
        </v-btn>

     
      </v-stepper-content>
            <v-stepper-content step="4">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="620px"
        ><v-img src="../../assets/img/ricecakerecipe4.png" height=""></v-img></v-card>

        <v-btn
          color="primary"
          @click="a1 = 1"
        >
          Continue
        </v-btn>


      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
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
        e1: 1,
        a1: 1,
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