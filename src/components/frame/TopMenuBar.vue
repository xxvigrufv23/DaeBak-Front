<template>
  <v-main>
    <div  class="topmenubar_title px-3 py-1">this is top menu bar 
      <v-btn 
        class="mx-3"
        >
           {{ loginTitle }}
      </v-btn>  
      <span>/</span>
      <v-btn 
        class="mx-3"
        @click="signUp"
        >
           {{ signUpTitle }}
      </v-btn>
    </div>
  </v-main>
</template>

<script>
export default {
    name: 'TopMenuBar',
    data() { 
      return { 
        loginTitle: '로그인',
        signUpTitle: '회원가입',
      }
    }, 
    methods:{
      signUp() { 
        this.$router.push('about');
      }
    }
}
</script>

<style scoped="scss">
.topmenubar_title {
    text-align: right;
    background-color: black;
}
</style>