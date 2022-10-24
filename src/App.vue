<template>
  <v-app>
    <v-main>
      <TopMenuBar />
      <Navbar  style="background-color: brown;" />
      <router-view/>
      <Footer class="footer"/>
    </v-main>
  </v-app>
</template>

<script>
import TopMenuBar from './components/frame/TopMenuBar.vue';
import Footer from './components/frame/Footer.vue';
import Navbar from './components/frame/Navbar.vue';
export default {
    name: "App",
    data() { 
      return { 
      }
    },
    components: { 
      TopMenuBar, 
      Footer,
      Navbar
    }
};
</script>
<style scoped="scss">
</style>
