<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  background: rgb(51, 176, 201);
  background: radial-gradient(
    circle,
    rgba(51, 176, 201, 1) 40%,
    rgb(35, 122, 139) 95% /* rgba(9, 52, 73, 1) 84% */
  );
  height: 100%;
  width: 100vw;
}

body {
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.header-menu {
  position: fixed;
  top: 0;
  left: 0;
}

.text {
  color: #faff64;
  padding: 15px 15px;
  position: absolute;
  align-self: flex-start;
  text-align: center;
  font-family: "KuchenHollow";

}

.text > p {
  font-size: 20px;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 100;
}

.text > h1 {
  margin: 0 4rem 0 0;
  font-size: 5.5rem;
  font-weight: 400;
}

@media only screen and (max-width: 510px) {
  .text {
  padding: 15px 15px;
  position: absolute;
  align-self: flex-start;
  text-align: center;
  font-family: "KuchenHollow";

}

.text > p {
  display: none;
}

.text > h1 {
  margin: 0px 5rem 0px 0px;
  font-size: 3rem;
  font-weight: 400;
  min-width: none;
}

.menu__position {
  top: -1rem;
  right: 0;
}
}
</style>
