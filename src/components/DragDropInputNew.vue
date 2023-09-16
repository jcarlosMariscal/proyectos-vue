<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      class="form-control"
      v-model="text"
      placeholder="Create new item"
    />
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const text = ref("");
const emits = defineEmits(["onNewItem"]);

const handleSubmit = () => {
  if (text.value !== "") {
    emits("onNewItem", text);
    text.value = "";
  }
};
</script>

<style scoped>
form {
  margin-bottom: 10px;
}
input {
  width: 100%;
  box-sizing: border-box;
}
</style>
