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