<template>
  <h4 class="text-info-emphasis">RSS Reader</h4>
  <div class="main-container">
    <RSSReaderHeader />
    <RSSReaderSidebar />
    <RSSReaderPosts />
  </div>
</template>

<script setup>
import RSSReaderHeader from "./RSSReaderHeader.vue";
import RSSReaderPosts from "./RSSReaderPosts.vue";
import RSSReaderSidebar from "./RSSReaderSidebar.vue";
</script>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
  /* height: 100vh; */
}
@media screen and (max-width: 650px) {
  .main-container {
    /* display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr; */
    grid-template-areas:
      "header header"
      "sidebar sidebar"
      "main main" !important;
    /* height: 100vh; */
  }
}
</style>
