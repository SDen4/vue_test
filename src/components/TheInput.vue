<script lang="ts">
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>

<template>
  <div class="inputWrapper">
    <input
      type="text"
      placeholder="Enter the to do title"
      class="input"
      v-model="message"
    />
    <button type="button" class="button">Add</button>
    <p>{{ message }}</p>
  </div>
</template>

<style>
.inputWrapper {
  display: flex;
  width: 100%;
  margin-top: 10px;
}

.input {
  margin-right: 10px;
}

.button {
  border: 0;
  border-radius: 5px;
  outline: none;
  background-color: green;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background-color: darkgreen;
}
</style>
