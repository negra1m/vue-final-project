<template>
  <div class="main">
    <HeaderMenu class="header" />
    <div class="content">
      <div class="logo">
        <img src="assets/portal.gif" />
        <button class="start" @click="playSound()">START</button>
      </div>
      <div class="text">
        <h2>The Rick Morty`s API consumer</h2>
        <h4>Developed in Vue</h4>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";

export default {
  name: "Main",
  components: {
    HeaderMenu,
    Footer
  },
  methods: {
    playSound() {
      var audio = new Audio("assets/i-m-pickle-riick.mp3");
      audio.play();
      setTimeout(() => {
        this.$router.push({ name: "Characters" });
      }, 3000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  color: #faff64;
  padding: 15px 15px;
  position: absolute;
  margin-top: 160px;
  text-align: center;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  position: absolute;
  bottom: 0;
}

.logo {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start {
  position: absolute;
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 3em;
  font-weight: 600;
  cursor: pointer;
  outline: inherit;
  filter: blur(2px);
  -webkit-animation: rotate-center 6s ease-in-out infinite forwards;
  animation: rotate-center 6s ease-in-out infinite forwards;
}

.start:hover {
  filter: none;
  animation: rotate-center 1s ease-in-out;
  transition: all;
}

.content {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
