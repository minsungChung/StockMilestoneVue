<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script></script>

<style>
  #app{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: bisque;
  }

  #back{
    width: 80vw;
    height: 80vh;
    background-color: white;
  }

  #real{
    width: 70%;
    height: 100%;
    margin: 50px auto;
  }
</style>
