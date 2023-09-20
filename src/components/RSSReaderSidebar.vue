<template>
  <div class="sidebar text-bg-primary">
    <div v-for="(source, index) in store.sources" :key="index">
      <a href="" @click.prevent="handleClick(source)">{{ source.name }}</a>
    </div>
  </div>
</template>

<script setup>
import { useFeedStore } from "@/stores/RSSReader";

const store = useFeedStore();

const handleClick = (source) => {
  store.loadSources(source);
};
</script>

<style scoped>
.sidebar {
  grid-column-start: 1;
  grid-column-end: 2;
  /* background-color: #1e4b68; */
}
.sidebar a {
  color: white;
  display: block;
  padding: 5px;
  text-decoration: none;
}
.sidebar a:hover {
  background-color: blue;
}
</style>
