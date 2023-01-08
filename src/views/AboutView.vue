<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>About...</h2>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
