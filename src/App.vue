<template>
  <div id="app">
    <Main />
    <Footer class="footer" />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Main,
    Footer
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.footer {
  position: absolute;
}

body {
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
}
</style>
