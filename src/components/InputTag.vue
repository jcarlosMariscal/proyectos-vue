<template>
  <div class="inputTag">
    <div class="tags">
      <div class="tag" v-for="(tag, index) in tags" :key="index">
        {{ tag }} <button @click="deleteTag(tag)">X</button>
      </div>
    </div>
    <form @submit.prevent="handleSubmit">
      <input class="text" v-model="currentValue" />
    </form>
  </div>
</template>

<script>
export default {
  name: "input-tag",
  data() {
    return {
      currentValue: "",
      tags: [],
    };
  },
  methods: {
    handleSubmit() {
      if (this.currentValue !== "") {
        const exits = this.tags.some((item) => item === this.currentValue);
        if (!exits) {
          this.tags.push(this.currentValue);
          this.currentValue = "";
        }
      }
    },
    deleteTag(tag) {
      this.tags = this.tags.filter((item) => item !== tag);
    },
  },
};
</script>

<style scoped></style>
