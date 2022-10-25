<template>
<v-container  fluid>
  
    <v-row align ="center">
      <v-col align ="center" >
        <v-card  @click="gotoMoglyeonPage()" width="400" height="400px" class = "mt-10 pa-10 " align="center">
          <h1 align = "center" class ="storeinfofont" >{{moglyeon}}</h1>
          <v-img height="80%" width="100%" src="../assets/img/img_store_photo_1.png"></v-img>
        </v-card>
      </v-col>
      <v-col >
        <v-card @click="gotoDomaPage()" width="400" height="400px" class = "mt-10 pa-10">
          <h1 align = "center" class ="storeinfofont">{{doma}}</h1>
          <v-img height="80%" weight="100%" src="../assets/img/img_store_photo_2.png" ></v-img>
        </v-card>
      </v-col>
      <v-col class="ml-5">
        <v-card @click="gotoHyangchonPage()" width="400" height="400px" class = "mt-10 pa-10">
          <h1 align = "center" class ="storeinfofont">{{hyangchon}}</h1>
          <v-img  height="80%" weight="100%" src="../assets/img/img_store_photo_3.png"></v-img>
        </v-card>
      </v-col>
      </v-row>
  

  
</v-container>
</template>

 <script>
 export default {
    name: 'Storeinfo',
    data(){
      return{
        moglyeon: '목련점',
        doma: '도마점',
        hyangchon:'향촌점',
      }
    },
    methods: {
      gotoDomaPage() {
        this.$router.push('doma');
      },
      gotoHyangchonPage() {
        this.$router.push('hyungchon');
      },
      gotoMoglyeonPage() {
        this.$router.push('mokryun');
      }
    }
}


</script>

<style >
@import url("@/assets/fonts/font.css");
.storeinfofont{
  font-family: 'ulsanjunggu';
}
</style>