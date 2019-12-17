<template>
  <nav class="header-menu">
    <router-link to="/main">Main</router-link>
    <router-link to="/characters">Characters</router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderMenu"
};
</script>
<style scoped>
.header-menu {
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  height: 50px;
  width: 100vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.37);
}

a {
  color: white;
  text-decoration: none;
  padding-top: 1em;
  min-width: 20%;
  text-align: center;
}
.router-link-active {
  border-bottom: 2px solid white;
}
</style>
