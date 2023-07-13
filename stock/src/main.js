import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import { router } from "./router/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
const app = createApp(App);
app.use(router); // 라우터 사용
app.provide("$axios", axios);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
