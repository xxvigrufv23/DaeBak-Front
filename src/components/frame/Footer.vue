<template>
  <v-footer
  style="width:100%"
  dark
  padless>
    <v-layout>
      <div class="logo_img"></div>
      
      <v-card
      style="width:100%; float:right;"
      class="pt-3 px-5 lighten-1 white--text">
        <div style="font-size:large">{{ companyName }} | {{ owner }}</div>
        <div class="white--text pt-0" v-html="companyAddress"></div>
        <div v-html="license"></div>
      </v-card>
      
      <v-card>
        <div class="whi"></div>
      </v-card>

    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() { 
    return { 
      companyName: '(주) 케이푸드노량',
      owner: '대표 고병권',
      companyAddress: '35285, 대전 서구 동서대로973번길 131 1층 (내동 163-3)',
      license: 'Copyright © K-Food ENG Corp. All rights reserved.'
    }
  }
}
</script>

<style scoped="scss"> 
.logo_img { 
  background-image: url('@/assets/img/img_main_logo.png');
  background-size: cover;
  width: 100px;
  height: 100px;
}
.whi{
 background-image: url('@/assets/img/img_noryang_logo.png'); 
 background-size: contain;
 width: 80px;
 height: 90px;
}
</style>