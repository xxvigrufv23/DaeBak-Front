<template>
  <nav style="margin-left: 50px;">
    <div class ="menu-title">大舶정육점</div>
    <div class="menu-item">메뉴</div>
    <div class="menu-item">브랜드 소개</div>
    <div class="menu-item">매장 위치</div>
    <div class="menu-item">갤러리</div>
    <div class="menu-item">고객의 소리</div>
    <div class="menu-item">공지사항</div>
  </nav>
</template>

<script>
export default {
    name: 'navbar',
}
</script>

<style>
@import url("@/assets/fonts/font.css");
.menu-title{
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