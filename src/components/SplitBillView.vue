<template>
  <div class="content">
    <SplitBillForm />
    <SplitBillPeople />
  </div>
</template>

<script setup>
import SplitBillForm from "./SplitBillForm.vue";
import SplitBillPeople from "./SplitBillPeople.vue";
</script>

<style scoped>
.content {
  display: flex;
}
</style>
