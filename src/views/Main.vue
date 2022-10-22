<template> 
  <v-main>
    <v-container>
      <div class="background_img"></div>
    </v-container>
  </v-main>
</template>

<script>
export default {
    name: "MainPage",
    components: { 
        Navbar: () => import('@/components/frame/Navbar.vue'),
    }
}
</script>

<style>
.background_img { 
  background-image: url('@/assets/img/img_main_background_1.png');
  width : 1334x;
  height: 1200px;
}

</style>