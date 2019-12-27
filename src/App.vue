<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
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
  height: 100%;
  width: 100vw;
}

body {
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
}

.header-menu {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
