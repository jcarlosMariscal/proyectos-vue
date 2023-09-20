<template>
  <form @submit.prevent="handleSubmit" class="bg-info form">
    <div class="form-container">
      <div>
        <label for="total">Total</label>
        <input type="number" class="form-control" v-model="total" required />
      </div>
      <div>
        <label for="tip">Tip %</label>
        <input type="number" class="form-control" v-model="tip" required />
      </div>
      <div>
        <label for="people">People</label>
        <input type="number" class="form-control" v-model="people" required />
      </div>
      <div>
        <input type="submit" class="btn btn-primary" value="Calculate" />
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { store, calculate } from "@/stores/store";

const total = ref(0);
const tip = ref(0);
const people = ref(0);

const handleSubmit = () => {
  store.params.total = total;
  store.params.tip = tip;
  store.params.people = people;
  calculate();
};
</script>

<style scoped>
form {
  width: 300px;
  /* background-color: rgb(23, 129, 78); */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  padding: 20px;
}
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
form label {
  display: block;
}
form input {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
}
@media screen and (max-width: 650px) {
  form {
    width: 100%;
  }
  .form-container {
    /* display: flex; */
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .form-container div {
    /* display: flex; */
    width: 45%;
  }
}
@media screen and (max-width: 460px) {
  form {
    width: 100%;
  }
  .form-container {
    /* display: flex; */
    flex-direction: column;
  }
  .form-container div {
    display: flex;
    gap: 5px;
    width: 100%;
  }
  .form-container div label {
    width: 25%;
  }
}
</style>
