<template>
  <v-footer
  style="width:100%"
  dark
  padless>
    
    <v-layout>
      <div class="logo_img"></div>
      <v-card
      style="width:100%; float:right;"
      class=" lighten-1 white--text">
        <h5>{{ companyName }}</h5>
        <v-card-text class="white--text pt-0" v-html="companyAddress"></v-card-text>
        <v-divider></v-divider>
      </v-card>
      <v-card
      style="width:100%; float:right;"
      class=" lighten-1 white--text text-center">
      <div class="logo_img"></div>
        <h5>{{ companyName }}</h5>
        <v-card-text class="white--text pt-0" v-html="companyAddress"></v-card-text>
        <v-divider></v-divider>
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
      companyAddress: '대전 서구 동서대로973번길 131 1층 (내동 163-3)'
    }
  }
}
</script>

<style scoped="scss"> 
.logo_img { 
  background-image: url('@/assets/img/img_main_logo.png');
}

</style>