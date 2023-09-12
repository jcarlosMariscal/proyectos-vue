<template>
  <nav>
    <ul>
      <li><a href="" @click.prevent="handleNewBoard">Create board</a></li>
    </ul>
  </nav>
  <div class="boards-container">
    <div class="boards">
      <div
        class="board"
        @drop="onDrop($event, board)"
        @dragover.prevent
        @dragenter.prevent
        v-for="board in boards"
        :key="board.id"
      >
        <div>{{ board.name }}</div>
        <DragDropInputNew
          @on-new-item="(text) => handleNewItem(text, board)"
        ></DragDropInputNew>
        <div class="items">
          <div
            class="item"
            draggable="true"
            @dragstart="startDrag($event, board, item)"
            v-for="item in board.items"
            :key="item.id"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import DragDropInputNew from "./DragDropInputNew.vue";

let boards = reactive([
  {
    id: crypto.randomUUID(),
    name: "Tablero 1",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Featru de archivos",
      },
      {
        id: crypto.randomUUID(),
        title: "Resolver Bug",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Tablero 2",
    items: [
      {
        id: crypto.randomUUID(),
        title: "mandar reporte",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
    ],
  },
]);

const handleNewItem = (text, board) => {
  // console.log(text.value);
  board.items.push({
    id: crypto.randomUUID,
    title: text.value,
  });
};

const handleNewBoard = () => {
  const name = prompt("Name of the board");
  if (name) {
    boards.push({
      id: crypto.randomUUID,
      name: name,
      items: [],
    });
  }
};

const startDrag = (event, board, item) => {
  console.log(event, board, item);
  event.dataTransfer.setData(
    "text/plain",
    JSON.stringify({ boardId: board.id, itemId: item.id })
  );
};
const onDrop = (event, dest) => {
  const { boardId, itemId } = JSON.parse(
    event.dataTransfer.getData("text/plain")
  );
  console.log(boardId, itemId);
  const originBoard = boards.find((board) => board.id === boardId);
  const originItem = originBoard.items.find((item) => item.id === itemId);

  dest.items.push({ ...originItem });
  originBoard.items = originBoard.items.filter((item) => item != originItem);
};
</script>

<style scoped>
nav {
  background-color: black;
  margin-bottom: 10px;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
nav ul li a {
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
}
.boards {
  display: flex;
  gap: 10px;
}
.board {
  background: #efefef;
  padding: 10px;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.item {
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
}
</style>
