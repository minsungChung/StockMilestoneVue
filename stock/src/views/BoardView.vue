<template>
  <div id="back">
    <div id="real">
      <span id="space">
        <div>
          <span id="title">게시판</span>
          <img src="../assets/image.png" />
        </div>
        <button id="butt">글쓰기</button>
      </span>
      <div id="posts">
        <PostComponent v-for="post in posts" :key="post.id" :post="post"></PostComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostComponent from "../components/PostComponent.vue";
import { fetchPosts } from "@/api/posts";
import { onMounted } from "vue";
import { ref } from "vue";

const posts = ref(null);

onMounted(async () => {
  console.log("posts request start");
  try {
    const { data } = await fetchPosts();
    console.log(data);
    posts.value = data.result;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
img {
  margin-left: 5px;
  width: 25px;
  height: 30px;
}

#space {
  display: flex;
  justify-content: space-between;
}

#posts {
  margin-top: 30px;
}
</style>
