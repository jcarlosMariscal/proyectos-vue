<template>
  <h4 class="text-info-emphasis">Tag Input</h4>
  <div class="inputTag border">
    <div class="tags">
      <div class="tag bg-info" v-for="(tag, index) in tags" :key="index">
        {{ tag }} <button @click="deleteTag(tag)" class="text-dark">X</button>
      </div>
    </div>
    <form @submit.prevent="handleSubmit">
      <input
        class="input bg-success-subtle"
        autofocus
        v-model="currentValue"
        @keydown="hadleKeyDown"
      />
    </form>
  </div>
  <hr />
</template>

<script>
export default {
  name: "input-tag",
  // props: ["onTagsChange"],
  emits: ["onTagsChange"],
  data() {
    return {
      currentValue: "",
      tags: [],
    };
  },
  methods: {
    hadleKeyDown(e) {
      if (e.key === "Backspace" && this.currentValue === "") {
        this.tags.pop();
        // this.onTagsChange(this.tags);
        this.$emit("onTagsChange", this.tags);
      }
    },
    handleSubmit() {
      if (this.currentValue !== "") {
        const exits = this.tags.some((item) => item === this.currentValue);
        if (!exits) {
          this.tags.push(this.currentValue);
          this.currentValue = "";
          // this.onTagsChange(this.tags);
          this.$emit("onTagsChange", this.tags);
        }
      }
    },
    deleteTag(tag) {
      this.tags = this.tags.filter((item) => item !== tag);
      // this.onTagsChange(this.tags);
      this.$emit("onTagsChange", this.tags);
    },
  },
};
</script>

<style scoped>
.inputTag {
  display: inline-flex;
  /* border: solid 1px #000; */
  border-radius: 3px;
  height: 43px;
}
.tags {
  display: flex;
  gap: 3px;
  padding: 5px;
}
.tags .tag {
  display: flex;
  padding: 5px;
  /* border: solid 1px #ccc; */
  gap: 5px;
  align-items: center;
  border-radius: 3px;
}
.inputTag form {
  display: inline-flex;
}
.inputTag .input {
  border: none;
  outline: none;
  padding: 0 5px;
}
.inputTag button {
  background-color: transparent;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.1s ease-in;
}
.inputTag button:hover {
  /* background-color: #eee; */
  color: rgb(53, 52, 52) !important;
  transition: all 0.1s ease-in;
}
</style>
