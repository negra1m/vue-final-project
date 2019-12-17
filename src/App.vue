<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "app",
  components: {
    Main
  }
};
</script>

<style>
#app {
  background: rgb(51, 176, 201);
  background: radial-gradient(
    circle,
    rgba(51, 176, 201, 1) 1%,
    rgba(9, 52, 73, 1) 84%
  );
  height: 100vh;
  width: 100vw;
}

body {
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
}
</style>
