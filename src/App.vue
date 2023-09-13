<template>
  <!-- Para props -->
  <!-- <InputTag :onTagsChange="handleOnTagsChange"></InputTag> -->
  <div class="bg-dark">
    <div class="container">
      <InputTag @onTagsChange="handleOnTagsChange" />
      <DragDrop />
      <SplitBillView />
      <RSSReader />
      <MenuView />
    </div>
  </div>
</template>

<script>
import InputTag from "@/components/InputTag.vue";
import DragDrop from "@/components/DragDrop.vue";
import SplitBillView from "./components/SplitBillView.vue";
import RSSReader from "./components/RSSReader.vue";
import MenuView from "./components/MenuView.vue";
export default {
  // name: "a pp",
  components: { InputTag, DragDrop, SplitBillView, RSSReader, MenuView },
  methods: {
    handleOnTagsChange(tags) {
      console.log(tags);
    },
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.bg-dark {
  min-height: 100vh;
}
.container {
  padding: 3rem 0;
}
</style>
