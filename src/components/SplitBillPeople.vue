<template>
  <div class="no-items" v-if="store.people.length === 0">No items</div>
  <div class="people-view" v-else>
    <div class="header">
      <div>
        <SplitBillPeopleLabel title="Total + Tip: " :value="getGrandTotal()" />
      </div>
      <div>
        <SplitBillPeopleLabel
          title="Remaining: "
          :value="store.params.remaining"
        />
      </div>
    </div>
    <div class="people-container">
      <SplitBillPeoplePerson
        v-for="person in store.people"
        :key="person.id"
        :id="person.id"
        :numberOfPerson="person.numberOfPerson"
        :total-per-person="person.totalPerPerson"
        :paid="person.paid"
      />
    </div>
  </div>
</template>

<script setup>
import { getGrandTotal, store } from "@/stores/store";
import SplitBillPeopleLabel from "./SplitBillPeopleLabel.vue";
import SplitBillPeoplePerson from "./SplitBillPeoplePerson.vue";
</script>

<style scoped>
.no-items {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}
.people-view {
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.people-container {
  width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;
}
.header {
  color: white;
  font-weight: bolder;
  padding: 20px 0;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
}
</style>
