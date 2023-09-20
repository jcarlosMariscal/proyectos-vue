<template>
  <div>
    <span class="title">{{ props.title }}</span>
    <!-- API QUE PERMITE ESTANDARIZA LA FORMA EL COMO SE VA A MOSTRAR UN VALOR. -->
    <span class="value text-success">{{
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(props.value)
    }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["title", "value"]);
</script>

<style scoped>
.title {
  font-weight: bolder;
}
</style>
