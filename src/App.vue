<template>
  <div></div>
  <!-- Para props -->
  <!-- <InputTag :onTagsChange="handleOnTagsChange"></InputTag> -->
  <InputTag @onTagsChange="handleOnTagsChange"></InputTag>
</template>

<script>
import InputTag from "@/components/InputTag.vue";
export default {
  // name: "a pp",
  components: { InputTag },
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
  margin-top: 60px;
}
</style>
