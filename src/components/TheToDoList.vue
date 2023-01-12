<template>
  <h2>Todos:</h2>
  <ul class="listWrapper">
    <li
      v-for="(todo, index) in this.$store.state.toDoList"
      v-bind:key="todo.id"
      class="todoItem"
    >
      {{ index + 1 }}. {{ todo.name }}
      <button type="button" class="button buttonDel">del</button>
    </li>
  </ul>
</template>

<style>
.listWrapper {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.todoItem {
  display: flex;
  justify-content: space-between;
  list-style: none;
  min-width: 200px;
  margin-bottom: 15px;
}

.todoItem:last-child {
  margin-bottom: 0;
}

.buttonDel {
  background-color: red;
}

.buttonDel:hover {
  background-color: darkred;
}
</style>
