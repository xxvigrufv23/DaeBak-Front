<template>
  <v-container fluid  style="width: 100%; height: 100%; padding-top: 200px;">
    <v-row dense>
      <v-col>
        <v-img
          src= "../../assets/img/img_store_photo_2.png"
          height="500px"
          width="500px"/>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              src="../../assets/img/img_store_map_2.png"
              height="500px"
            >
              <v-icon>mdi-map-marker-radius</v-icon>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h5 black--text "
                  style="height: 100%;"
                >
                  <p class="mt-10 pt-10">대박정육점 도마점 상세위치<br><br>대전광역시 서구 동서대로973번길 31 <br><br> 지번:대전광역시 서구 내동 163-3 <br><br> 안골 어린이공원에서 3분 거리</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>대박정육점-도마점  <v-btn elevation="2" height="50px" class="mb-2"> 
              <p class="text-h5 mt-3">위치 찾기</p>      
            </v-btn></h1><br>
          <div style="float: left; width: 5%;">
                <v-icon>mdi-clock</v-icon>
        </div>
        <div style="float: left; width: 25%;">
                <p class="text-h6"> 영업시간</p>
        </div>
        <div style="float: left; width: 70%;">
            <p class="text-h6">9시~21시</p>
        </div>
        <div style="float: left; width: 5%;">
            <v-icon>mdi-car</v-icon>
        </div>
        <div style="float: left; width: 25%;">
            <p class="text-h6"> 주차</p>
        </div>
        <div style="float: left; width: 70%;">
            <p class="text-h6">3만원 이상 구매시 2시간 무료주차</p>
        </div>
        <div style="float: left; width: 5%;">
            <v-icon>mdi-alert-circle-outline</v-icon>
        </div>
        <div style="float: left; width: 25%;">
            <p class="text-h6"> 기능서비스</p>
        </div>
        <div style="float: left; width: 70%;">
            <p class="text-h6">건물 내 주차, 남/여 화장실 구분</p>
        </div>
        <div style="float: left; width: 5%;">
            <v-icon>mdi-phone</v-icon>
        </div>
        <div style="float: left; width: 25%;">
            <p class="text-h6"> 전화번호</p>
        </div>
        <div style="float: left; width: 70%;">
            <p class="text-h6">042-123-4569</p>

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
.mapfont{
  font-size: 40px;
  

}


</style>
