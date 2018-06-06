<template>
  <div id="home">
    <!-- header -->
    <div class="header">
      <mt-header fixed title="大怪兽的世界"></mt-header>
    </div>
    <!-- slider -->
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <div class="img"><img src="../assets/01.jpg" alt=""></div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="img"><img src="../assets/02.jpg" alt=""></div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="img"><img src="../assets/03.jpg" alt=""></div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="img"><img src="../assets/04.jpg" alt=""></div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- sign in -->
     <div class="sign">
        <router-link to="/login"><mt-button type="primary">登陆</mt-button></router-link>
     </div>
     <!-- reg -->
     <div class="reg">
        <mt-button type="danger">注册</mt-button>
     </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  .page-swipe .mint-swipe {
    height: 800px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 40px;
  }
  .mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .img img {
    width: 100%;
    height: 800px;
  }
  .login {
    float: right;
  }
  .sign {
    float: left;
  }
  .reg {
    float: right;
  }
</style>
