<template>
    <nav>
      <div 
        class ="menu-title"
        @click="gotoMainPage()"
        style="cursor: pointer;"
      >{{ title }}
      </div>
      <v-layout class="px-3">
        <v-btn 
          class="px-3 cols=3 "
            >{{ brandInfo }}
        </v-btn>

        <v-btn
            @click="gotoStoreInfo()" 
            >{{ storeInfo }}
        </v-btn>
        
        <v-btn 
            >{{ gallery }}
        </v-btn>

        <v-btn 
        >{{ customer }}
        </v-btn>

        <v-btn 
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
            console.log("asdf");
            this.$router.push('storeInfo');
        }
      }
  }
  </script>

<style>
@import url("@/assets/fonts/font.css");
.menu-title{
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
    background-color: orange;
    border-bottom-color:rgb(255, 225, 0);
}
nav .menu-item a{
    color: inherit;
    text-decoration: none;
}
</style>