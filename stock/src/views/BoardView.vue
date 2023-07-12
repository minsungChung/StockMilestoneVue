<template>
  <div id="back">
    <div id="real">
      <span>
        <span id="title">게시판</span>
        <img src="../assets/image.png" />
      </span>
      <button id="butt">글쓰기</button>
    </div>
    <div id="post-box"></div>
    <div id="post-box"></div>
    <div id="post-box"></div>
  </div>
</template>

<script setup></script>

<style scoped>
#title {
  font-size: xx-large;
  font-weight: bold;
}
img {
  margin-left: 5px;
  width: 25px;
  height: 30px;
}
#post-box {
  border: 1px solid;
  border-radius: 10px;
  padding: 50px 30px;
  margin: 30px 80px;
  background-color: LightBlue;
}

#real {
  display: flex;
  width: 20%;
  height: 20%;
  margin: 50px auto;
  justify-content: flex-end;
  justify-content: space-around;
}
</style>
