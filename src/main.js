import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faFire,
  faScrewdriverWrench,
  faHomeUser,
  faPalette,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);
library.add(faBars);
library.add(faFire);
library.add(faScrewdriverWrench);
library.add(faHomeUser);
library.add(faPalette);
library.add(faXmark);

const pinia = createPinia();
// createApp(App).mount("#app");
const app = createApp(App);

app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
