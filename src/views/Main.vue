<template> 
  <v-container>
    <div class="background_img">sdg</div>
  </v-container>
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
  height: 880px;
}

</style>