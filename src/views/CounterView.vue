<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div class="counter">
    <h1>This is an counter page</h1>
    <h2>counter...</h2>

    <div class="btnsWrapper">
      <button class="btn" @click="count--">Minus</button>
      <h2>{{ count }}</h2>
      <button class="btn" @click="count++">Plus</button>
    </div>
  </div>
</template>

<style>
.counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btnsWrapper {
  display: flex;
  margin-top: 10px;
}

.btn {
  border: 0;
  outline: none;
  border-radius: 5px;
  margin: 0 20px;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .counter {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
