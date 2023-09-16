<template>
  <h4 class="text-info-emphasis">DragDrop</h4>
  <nav class="badge bg-info">
    <ul>
      <li>
        <a href="" @click.prevent="handleNewBoard">Create board</a>
      </li>
    </ul>
  </nav>
  <div class="boards-container">
    <div class="boards">
      <div
        class="board"
        :style="{ background: getBackground(board).primary }"
        @drop="onDrop($event, board)"
        @dragover.prevent
        @dragenter.prevent
        v-for="board in boards"
        :key="board.id"
      >
        <div class="board-color" @click.prevent="activeSelect(board)">
          <font-awesome-icon icon="fa-solid fa-palette" />
        </div>
        <div
          v-if="board.select"
          class="form-color"
          :style="{ background: getBackground(board).third }"
        >
          <ul class="form-ul">
            <li class="form-li" v-for="(bg, index) in bgColors" :key="index">
              <div
                class="form-li-color"
                :style="{ background: bg.secondary }"
              ></div>
            </li>
          </ul>
        </div>
        <div class="text-white">{{ board.name }}</div>
        <DragDropInputNew
          @on-new-item="(text) => handleNewItem(text, board)"
        ></DragDropInputNew>
        <div class="items">
          <div
            class="item text-white"
            :style="{ background: getBackground(board).secondary }"
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
  <hr />
</template>

<script setup>
import { reactive } from "vue";
import DragDropInputNew from "./DragDropInputNew.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

let bgColors = [
  {
    name: "bg-default",
    primary: "#343a40",
    secondary: "#495057",
    third: "rgba(33, 37, 41, 0.3)",
  },
  {
    name: "bg-one",
    primary: "#055160",
    secondary: "#087990",
    third: "rgba(3, 40, 48, 0.3)",
  },
  {
    name: "bg-two",
    primary: "#0d503c",
    secondary: "#13795b",
  },
  {
    name: "bg-three",
    primary: "#0a3622",
    secondary: "#0f5132",
  },
  {
    name: "bg-four",
    primary: "#664d03",
    secondary: "#997404",
  },
  {
    name: "bg-five",
    primary: "#653208",
    secondary: "#984c0c",
  },
  {
    name: "bg-six",
    primary: "#58151c",
    secondary: "#842029",
  },
  {
    name: "bg-seven",
    primary: "#561435",
    secondary: "#801f4f",
  },
  {
    name: "bg-eight",
    primary: "#2c1a4d",
    secondary: "#432874",
  },
  {
    name: "bg-nine",
    primary: "#290661",
    secondary: "#3d0a91",
  },
  {
    name: "bg-ten",
    primary: "#052c65",
    secondary: "#084298",
  },
];
console.log(bgColors);
let boards = reactive([
  {
    id: crypto.randomUUID(),
    name: "Tablero 1",
    background: "bg-default",
    select: false,
    items: [
      {
        id: crypto.randomUUID(),
        title: "Featru de archivos",
      },
      {
        id: crypto.randomUUID(),
        title: "Resolver Bug",
      },
      {
        id: crypto.randomUUID(),
        title: "Resolver Bug",
      },
      {
        id: crypto.randomUUID(),
        title: "Resolver Bug",
      },
      {
        id: crypto.randomUUID(),
        title: "Resolver Bug",
      },
      {
        id: crypto.randomUUID(),
        title: "Resolver Bug",
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
    background: "bg-one",
    select: false,
    items: [
      {
        id: crypto.randomUUID(),
        title: "mandar reporte",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
      {
        id: crypto.randomUUID(),
        title: "code review",
      },
    ],
  },
]);
console.log(boards);

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
      background: "bg-default",
      select: false,
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

const getBackground = (board) => {
  const bg = bgColors.find((bg) => bg.name === board.background);

  if (bg) {
    return {
      primary: bg.primary,
      secondary: bg.secondary,
      third: bg.third,
      // Otros estilos que desees aplicar
    };
  }

  // Si no se encuentra el fondo, puedes proporcionar un estilo predeterminado.
  return bgColors[0];
};
const activeSelect = (board) => {
  board.select = !board.select;
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
  padding: 5px;
  padding-top: 15px;
  position: relative;
}
.board-color {
  position: absolute;
  right: 3px;
  top: 3px;
  background: #ffe69c;
  color: #ffc107;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
}
.form-color {
  /* width: 96%; */
  height: auto;
  position: absolute;
  border-radius: 3px;
  top: 35px;
  left: 5px;
  right: 5px;
}
.form-ul {
  padding: 0.5rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.form-ul .form-li .form-li-color {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  /* background-color: aqua; */
}
.items {
  display: flex;
  flex-direction: column;
  height: 300px;
  gap: 5px;
  overflow-y: auto;
  padding: 5px;
}

.items::-webkit-scrollbar {
  width: 6px;
}
.item {
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
}
.bg-default {
  background: #343a40;
}
.bg-default .items .item,
.bg-default .items::-webkit-scrollbar-track {
  background: #495057;
  color: #efefef;
}
.bg-default .items::-webkit-scrollbar-thumb {
  background-color: #212529;
}
.bg-one {
  background: #052c65;
}
.bg-one .items .item,
.bg-one .items::-webkit-scrollbar-track {
  background: #084298;
  color: #efefef;
}
.bg-one .items::-webkit-scrollbar-thumb {
  background-color: #031633;
}
</style>
