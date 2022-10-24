<template>
    <div>
        <ul class="doma">
            <li class="doma-title">도마점</li>
            <li class="doma-title">영업시간  07시~ 21시</li>
            <li class="doma-title">Tel 042-123-4567</li>
            <li class="doma-title">가능 서비스  건물 내 주차, 남/여 화장실 구분</li>
        </ul>
        <v-list></v-list>
    </div>
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
.doma-img{
    width:10%;
    height:10%;
}

</style>