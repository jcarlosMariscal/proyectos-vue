<template>
  <h4 class="text-info-emphasis">Split Bill</h4>
  <!-- <nav class="badge bg-info"> -->
  <div class="content">
    <SplitBillForm />
    <SplitBillPeople />
  </div>
  <hr />
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
