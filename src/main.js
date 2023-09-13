import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { createPinia } from "pinia";

const pinia = createPinia();
// createApp(App).mount("#app");
const app = createApp(App);

app.use(pinia);
app.mount("#app");
