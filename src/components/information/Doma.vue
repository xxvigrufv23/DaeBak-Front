<template>
<v-container>
  
 <v-row>
  <v-col>
    <v-card class="mx-auto"
    max-width="900px" align="left">
   
    <v-container >
      <v-row dense>
        
       <v-col cols ="6"> 

          <v-card>  
            <v-img
              src= "../../assets/img/img_store_photo_2.png"
              class="white--text align-end"
              height="300px"
              width="300px"
              
            >
              <v-card-title v-text="매장"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
               <v-col cols ="6"> <!-- <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        > -->
        
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
    <h1  >대박정육점 도마점</h1>
    

    <p class="text-h6">영업시간: 9시~21시</p>
    

    <p class="text-h6">주차: 3만원 이상 구매시 2시간 무료주차 </p>
    

    <p class="text-h6">기능서비스: 건물 내 주차, 남/여 화장실 구분</p>
    

    <p class="text-h6  ">위치: 미정</p>
    
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