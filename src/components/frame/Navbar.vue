<template>
    <nav>
      <div 
        class ="menu-title"
        @click="gotoMainPage()"
        style="cursor: pointer; background-color: black; margin: -39px 0px 0 90px; color: white;"
      >{{ title }}
      </div>
      <v-layout class="px-3 py-5">
        <v-btn 
            color="white"
            elevation="2"
            text
            x-large
            class="px-5"
            style="margin: 0 70px;"
            >{{ brandInfo }}
        </v-btn>

        <v-btn
            color="white"
            elevation="2"
            text
            x-large
            @click="gotoStoreInfo()"
            style="margin: 0 70px;" 
            >{{ storeInfo }}
        </v-btn>
        
        <v-btn 
            color="white"
            elevation="2"
            text
            x-large
            class="px-5"
            @click="gotoGallery()"
            style="margin: 0 70px;"
            >{{ gallery }}
        </v-btn>

        <v-btn 
            color="white"
            elevation="2"
            text
            x-large
            class="px-5"
            @click="gotoCustomer()"
            style="margin: 0 50px;"
        >{{ customer }}
        </v-btn>

        <v-btn 
            color="white"
            elevation="2"
            text
            x-large
            class="px-5"
            style="margin: 0 50px;"
            >{{ information }}
        </v-btn>
        </v-layout>

    </nav>
  </template>
  
  <script>
  export default {
      name: 'navbar',
      data() { 
          return { 
              title: '케이푸드(노량)',
              brandInfo: '브랜드 소개',
              storeInfo: '매장',
              gallery: '갤러리',
              customer: '고객의 소리',
              information: '공지사항',
          }
      },
      methods: { 
        gotoMainPage() {
            this.$router.push('mainpage')
        },  
        gotoStoreInfo() {
            this.$router.push('storeInfo');
        },
        gotoGallery() {
            this.$router.push('gallery');
        },
        gotoCustomer() {
            this.$router.push('customer');
        }
      }
  }
  </script>

<style>
@import url("@/assets/fonts/font.css");
.menu-title{
    background-image: url('@/assets/img/img_small_logo.png');
    background-size: auto;
    width:300px;
    text-align: center;
    font-size: 35px;
    font-family: 'ulsanjunggu';
    background-color: bisque;
}
nav{
    display: flex;
    align-items: center;
    /* justify-content: center; */
}
nav .menu-item{
    font-family: 'ulsanjunggu';
    color:black;
    padding:0px 90px;
    position:relative;
    text-align:center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    margin-bottom: 20px;
}
nav .menu-item.active,
nav .menu-item:hover{
    background-color: rgb(87, 70, 40);
    border-bottom-color:rgb(255, 225, 0);
}
nav .menu-item a{
    color: inherit;
    text-decoration: none;
}
</style>