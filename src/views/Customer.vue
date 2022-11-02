<template>
    <v-container>
        <v-row >
            
              
            <v-img src="../assets/img/listening.png" width="100%" height="100%" :gradient="gradient">
                <div class="kfoodfont">THE KFOOD NORYUNG</div>
                <h1 class="kfoodfont2">고객의 소리</h1>
                <p class="kfoodfont3">케이푸드노량에 전하고 싶은 불만, 칭찬을 보내주세요.</p>
                <p class="kfoodfont4">항상 고객의 소리에 귀 기울이며 고객만족 향상을 위해 노력하겠습니다.</p>
                                
            </v-img>
           
        </v-row>
        <v-row class="mt-13">
            <h3 class="Kfoodfont5">고객의 소리</h3><br>
            <p class="Kfoodfont6">케이푸드노량에 전하고 싶은 불만, 칭찬을 보내주세요. 항상 고객님들의 목소리에 귀 기울이겠습니다.</p>
        </v-row>
        <v-row>
            <hr class="one">
            <v-col cols="2">
                <h4>매장명</h4>
            </v-col >
            <v-col cols="3" >
                <v-overflow-btn
                    
                    :items="store"
                    label="매장명"
                    dense
                    single-line=none
                     ></v-overflow-btn>
            </v-col>
        </v-row>
        <v-row>
            <hr class="one">    
            <v-col cols="2">
                <h4>문의유형</h4>
            </v-col >
            <v-col cols="3" >
                <v-overflow-btn
                    
                    :items="big"
                    label="문의유형"
                    dense
                    single-line=none
                     ></v-overflow-btn>
            </v-col>

        </v-row>
                <v-row>
            <hr class="one">    
            <v-col cols="2">
                <h4>답변 알림 서비스</h4>
            </v-col >
            <v-col cols="2" class="mb-2" >
                <v-checkbox
                    v-model="받지않음"
                    label="받지않음"
                    
                 ></v-checkbox>
            </v-col>
            <v-col cols="2">
                <v-checkbox
                    v-model="전화답변"
                    label="전화답변"
                    
                 ></v-checkbox>

            </v-col>
            <v-col cols="2">
                <v-checkbox
                    v-model="문자답변"
                    label="문자답변"
                 ></v-checkbox>

            </v-col>
            <v-col cols="2">
                <v-checkbox
                    v-model="이메일답변"
                    label="이메일답변"
                 ></v-checkbox>

            </v-col>

        </v-row>
        <v-row>
            <hr class="one">    
            <v-col cols="2">
                <h4>성함</h4>
            </v-col >
            <v-col cols="3" >
                <div>
                    <v-text-field
                    label="성함을 입력하세요."
                    :rules="rules"
                    hide-details="auto"
                    ></v-text-field>
                  
                </div>
            </v-col>
        </v-row>
        <v-row>
            <hr class="one">    
            <v-col cols="2">
                <h4>휴대폰번호</h4>
            </v-col >
            <v-col cols="3" >
                <div>
                    <v-text-field
                    label="휴대폰 번호를 입력하세요."
                    :rules="rules"
                    hide-details="auto"
                    ></v-text-field>
                  
                </div>
            </v-col>
        </v-row>
        <v-row>
            <hr class="one">    
            <v-col cols="2">
                <h4>이메일</h4>
            </v-col >
            <v-col cols="3" >
                
                    <v-text-field
                    label="이메일을 입력하세요."
                    :rules="rules"
                    hide-details="auto"
                    ></v-text-field>

            </v-col>
            <v-col cols ="1">
                <p class="mt-5 ml-7">@</p>
            </v-col>
            <v-col cols ="3">
                <v-overflow-btn
                    
                    :items="email"
                    label="이메일 주소"
                    dense
                    single-line=none
                     ></v-overflow-btn>
            </v-col>
        </v-row>
        <v-row>
            <hr class="one">    
            <v-col cols="2">
                <h4>제목</h4>
            </v-col >
            <v-col cols="10" >
                <div>
                    <v-text-field
                    label="제목을 입력하세요."
                    :rules="rules"
                    hide-details="auto"
                    ></v-text-field>
                  
                </div>
            </v-col>
        </v-row>
        <v-row >
            <hr class="one">    
            <v-col cols="2">
                <h4>내용</h4>
            </v-col >
            <v-col cols="10" >
                <div>
                    <textarea rows="20" cols="150" outline id="txtArea"  @onkeypress="onTestChange();"></textarea>
                  
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2" class="customerbutton">
            <v-btn @click="gotoMainPage()" >보내기</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            gradient: 'rgba(0,0,0, .7), rgba(0,0,0, .7)',
            store: ['도미점', '향촌점', '목련점'],
            big: ['칭찬', '불만','문의','제안'],
            email: ['naver.com','hanmail.net','google.com'],
        }
    },
    methods: {
        onTestChange() {
            var key = window.event.keyCode;

    // If the user has pressed enter
                if (key === 13) {
                    document.getElementById("txtArea").value = document.getElementById("txtArea").value + "\n*";
                    return false;
                }
                else {
                     return true;
                }
            },
        gotoMainPage() {
            alert("고객님의 소리가 접수되었습니다.")
            this.$router.push('mainpage')
        },  


        }
    }


</script>

<style>
.kfoodfont{
    margin-left: 550px;
    margin-top: 50px;
    width: 218px;
    height: 30px;
    color: white;
    background-color: rgb(172, 37, 37);
    font-size:20px;
}
.kfoodfont2{
    margin-left: 550px;
    margin-top: 10px;
    color: white;
}
.kfoodfont3{
    margin-left: 465px;
    margin-top: 10px;
    color: white;
}
.kfoodfont4{
    margin-left: 400px;
    margin-top: 10px;
    color: white;
}
.Kfoodfont5{
    margin-left: 580px;
    margin-top:100px;
    color: black;
}
.Kfoodfont6{
    margin-left: 310px;
    margin-top: 40px;
    color: black;
}
.customerbutton
{
   margin-left: 600px;

}


</style>