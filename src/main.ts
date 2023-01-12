import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// store
const store = createStore({
  state() {
    return {
      toDoList: [
        { id: "1", name: "todo #1", done: false },
        { id: "2", name: "todo #2543", done: false },
        { id: "3", name: "todo #100 from store", done: false },
      ],
    };
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
