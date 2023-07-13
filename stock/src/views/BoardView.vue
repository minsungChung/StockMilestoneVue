<template>
  <div id="back">
    <HeaderNav />

    <div id="real">
      <span id="space">
        <div>
          <span id="title">게시판</span>
          <img src="../assets/image.png" />
        </div>
        <button id="butt">글쓰기</button>
      </span>
      <div id="posts">
        <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from "../components/PostItem.vue";
import { fetchPosts } from "@/api/posts";
import HeaderNav from "@/components/HeaderNav.vue";
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
