<template>
  <div class="header bg-info">
    <form @submit.prevent="handleSubmit" class="form">
      <input type="url" class="input form-control" required v-model="url" />
      <button type="submit" class="btn btn-primary">Add source</button>
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
  width: 350px;
  padding: 10px;
}
</style>
