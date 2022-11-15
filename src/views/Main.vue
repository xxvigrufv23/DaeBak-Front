<template> 
  <div style="height: 100%;">
    <div class="background_img"></div>
  </div>
  

</template>

<script>
export default {
  name: "MainPage",
  components: { 
      // Navbar: () => import('@/components/frame/Navbar.vue'),
  }
}
</script>

<style>
.background_img { 
background-image: url('@/assets/img/img_main_background_1.png');
background-size: cover;
height:100%;
}
</style>