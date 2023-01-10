<script setup lang="ts">
import Input from "../components/TheInput.vue";
</script>

<template>
  <div class="todoWrapper">
    <h1>This is an TODO page</h1>

    <Input />
  </div>
</template>

<style>
.todoWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1024px) {
  .todoWrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
