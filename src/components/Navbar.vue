<template>
  <nav>
    <h1 class ="menu-title">大舶정육점</h1>
    <div class="menu-item"><a href="#">{{menuitems[0]}}</a></div>
    <div class="menu-item"><a href="#">{{menuitems[1]}}</a></div>
    <div class="menu-item"><a href="#">{{menuitems[2]}}</a></div>
    <div class="menu-item"><a href="#">{{menuitems[3]}}</a></div>
    <div class="menu-item"><a href="#">{{menuitems[4]}}</a></div>
  </nav>
</template>

<script>
export default {
    name: 'navbar',
    props:{
        menuitems:Array
    }
    
}
</script>

<style>
@import url("common/font/font.css");
.menu-title{
    font-size: 35px;
    font-family: 'ulsanjunggu';
    margin-right: 80px;
    margin-top: 20px;
}
nav{
    display: flex;
    align-items: center;
    justify-content: right;
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