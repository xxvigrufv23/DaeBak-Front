<template>
<v-container>
  
 <v-row class="ma-10 pa-10">
  <v-col class= "mr-15 pr-15">
    <v-card class="mx-auto"
    max-width="900px" align="left">
   
    <v-container >
      <v-row dense>
        
       <v-col cols ="6"> 

          <v-card>  
            <v-img
              src= "../../assets/img/img_store_photo_2.png"
              
              height="300px"
              width="300px"
              
            >
              <v-card-title v-text="매장"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
               <v-col cols ="6"> 
    
        
          <v-card>  
            <v-img
              src= "../../assets/img/img_store_map_2.png"
              class="white--text align-end"
              height="300px"
              width="300px"
              
            >
              <v-card-title v-text="매장"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-col>
  <v-col>
    <h1  >대박정육점 도마점</h1><br>
    <div style="float: left; width: 5%;">
            <v-icon>mdi-clock</v-icon>
    </div>
    <div style="float: left; width: 33%;">
            <p class="text-h6"> 영업시간</p>
    </div>
    <div style="float: left; width: 62%;">
        <p class="text-h6">9시~21시</p>
    </div>
    <div style="float: left; width: 5%;">
        <v-icon>mdi-car</v-icon>
    </div>
    <div style="float: left; width: 33%;">
        <p class="text-h6"> 주차</p>
    </div>
    <div style="float: left; width: 62%;">
        <p class="text-h6">3만원 이상 구매시 2시간 무료주차</p>
    </div>
    <div style="float: left; width: 5%;">
        <v-icon>mdi-alert-circle-outline</v-icon>
    </div>
    <div style="float: left; width: 33%;">
        <p class="text-h6"> 기능서비스</p>
    </div>
    <div style="float: left; width: 62%;">
        <p class="text-h6">건물 내 주차, 남/여 화장실 구분</p>
    </div>
    <div style="float: left; width: 5%;">
        <v-icon>mdi-phone</v-icon>
    </div>
    <div style="float: left; width: 33%;">
        <p class="text-h6"> 전화번호</p>
    </div>
    <div style="float: left; width: 62%;">
        <p class="text-h6">042-123-4569</p>
    </div>
    <div style="float: left; width: 5%;">
        <v-icon>mdi-map-marker-radius</v-icon>
    </div>
    <div style="float: left; width: 33%;">
        <p class="text-h6">위치</p>
    </div>
    <div style="float: left; width: 62%;">
        <p class="text-h6">미정</p>
    </div>
    
    

   
    
  </v-col>
 </v-row>
  </v-container>
</template>

<script>

export default {
    name: 'Doma',
    data() {
        return {                                 
            title: '도마점',
            number: '042-123-4567',
            time: '07시~ 21시',
            }
        }
    }


</script>

<style scoped="scss">


.doma{
    display:block;
}
.doma-title{
    font-size: 40px;
    text-align: left;
    background-position: right;
    background-color: blue;
}


</style>