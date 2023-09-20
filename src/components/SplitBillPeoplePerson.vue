<template>
  <div
    :class="[
      'person',
      props.paid
        ? 'border border-success border-3'
        : 'border border-danger border-3',
    ]"
  >
    <div class="person-number text-bg-primary">
      Person {{ props.numberOfPerson }}
    </div>
    <div
      class="person-to-pay"
      :class="[props.paid ? 'text-success' : 'text-danger']"
    >
      {{
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(props.totalPerPerson)
      }}
    </div>
    <div class="paid text-bg-primary">
      <input type="checkbox" name="" id="" @change="handleChange" /> Paid
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { pay } from "@/stores/store";

const props = defineProps(["id", "numberOfPerson", "totalPerPerson", "paid"]);
let paid = ref(false);

const handleChange = (e) => {
  paid = e.target.checked;
  pay(props.id, paid);
};
</script>

<style scoped>
.person {
  height: 200px;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.person-paid {
  border: solid 3px yellowgreen;
}
.person-no-paid {
  border: solid 3px transparent;
}
.person-number {
  /* background-color: black; */
  padding: 10px;
  color: white;
  text-align: center;
}
.person-to-pay {
  text-align: center;
  font-weight: bolder;
  font-size: 30px;
  color: yellowgreen;
}
.paid {
  background-color: #343f68;
  padding: 10px;
}
</style>
