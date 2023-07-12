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
        <div id="log-but"><button type="submit" id="butt">로그인</button></div>
      </form>

      <div class="social-login">
        <button class="social-btn"><img src="../../img/googleLogin.png" /></button>
        <button class="social-btn"><img src="../../img/kakaoLogin.png" /></button>
      </div>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.social-login {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.social-btn {
  border: 0px;
  background-color: transparent;
}

#log-but {
  display: flex;
  justify-content: center;
}
</style>
