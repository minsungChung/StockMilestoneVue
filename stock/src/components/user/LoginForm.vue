<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="nickname">id:</label>
          <input id="nickname" type="text" v-model="nickname" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && nickname">
              Please enter an nickname
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>

        <button type="submit" class="btn">로그인</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.btn {
  color: white;
}
</style>
