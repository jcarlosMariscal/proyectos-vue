<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">
        <font-awesome-icon icon="fa-solid fa-bars" v-if="collapsed" size="2x" />
        <font-awesome-icon icon="fa-solid fa-xmark" v-else size="2x" />
      </button>
    </div>
    <div class="profile">
      <img :src="menuItems.profile.image" alt="" />
      <div class="profile-name" v-if="!collapsed">
        <a href="" @click.prevent="menuItems.profile.onClick">
          {{ menuItems.profile.name }}
        </a>
      </div>
    </div>
    <div class="menu-items">
      <ul>
        <MenuItem
          v-for="menuItem in menuItems.items"
          :key="menuItem.id"
          :item="menuItem"
          :collapsed="collapsed"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import menuItems from "@/helpers/menuItems";
import MenuItem from "./MenuItem.vue";

const collapsed = ref(true);
</script>

<style scoped>
.menu {
  background-color: #222;
  color: white;
  height: 100vh;
  transition: width 0.3s;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 600;
}
.header {
  display: flex;
  justify-content: end;
}
.menu-button {
  border: none;
  background-color: transparent;
  color: white;
  padding: 10px;
}
.collapsed {
  width: 80px;
}
.expanded {
  width: 350px;
}
.profile {
  padding: 10px;
  text-align: center;
}
.profile img {
  border-radius: 50%;
  min-width: 50px;
  max-width: 300px;
  width: 100%;
}
.profile-name {
  padding: 10px 0;
  font-size: 18px;
}
.profile-name a {
  color: white;
  text-decoration: none;
}
.menu-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
@media screen and (max-width: 900px) {
  .collapsed {
    height: 50px;
    width: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }
  .expanded {
    width: 100%;
  }
}
</style>
