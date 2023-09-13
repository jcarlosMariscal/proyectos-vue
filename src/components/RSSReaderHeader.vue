<template>
  <div class="header">
    <form @submit.prevent="handleSubmit">
      <input type="url" required v-model="url" />
      <button type="submit">Add source</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFeedStore } from "@/stores/RSSReader";

const url = ref("");
const store = useFeedStore();

const handleSubmit = () => {
  if (url.value) {
    store.registerNewSource(url.value);
  }
};
</script>

<style scoped>
.header {
  background: black;
  grid-area: header;
  justify-self: stretch;
  display: flex;
  justify-content: center;
  padding: 10px;
}
form {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
}
.input {
  border: none;
  width: 400px;
  padding: 10px;
}
button {
  border: none;
  background-color: #1283a9;
  color: white;
  padding: 5px 10px;
}
</style>
