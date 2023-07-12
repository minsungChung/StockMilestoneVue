<template>
  <div id="back">
    <div id="real">
      <div id="left">
        <button id="butt">수정하기</button>
        <button id="butt">삭제하기</button>
      </div>
    <div id="title">
      진영님 왜 저한테는 stash를 안 알려주셨나요ㅠ
    </div>
    <div id="content">
        아니 진영님은 대체 어딜 가신거야
        부르지도 않았는데;;;;
    </div>

    <button id="butt">댓글 보기</button>
    <div id="comment">
      <textarea>댓글을 입력하세요</textarea>
      <button id="butt">댓글 달기</button>
    </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
#left{
  display: flex;
  justify-content: flex-end;
    margin-bottom: 15px;
}
#content{
  margin-top: 30px;
  height: 40%;
}
textarea{
  border: 1px solid orange;
  border-radius: 5px;
  width: 84%;
  height: 40px;
  padding: 10px;
}
#comment{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
