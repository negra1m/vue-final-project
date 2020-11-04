<template>
  <div class="main">
    <HeaderMenu />
    <div class="content">
      <div class="text">
        <h1>Rick n' Morty's list</h1>
        <p>The master guide of Ricky & Morty Episodes and Characters</p>
      </div>
      <div class="logo">
        <img src="assets/portal.gif" />
        <button class="start" @click="playSound()">START</button>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";

export default {
  name: "Main",
  components: {
    Footer,
    HeaderMenu,
  },
  methods: {
    playSound() {
      var audio = new Audio("assets/i-m-pickle-riick.mp3");
      audio.play();
      setTimeout(() => {
        this.$router.push({ name: "Characters" });
      }, 3000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "KuchenHollow";
  src: local("KuchenHollow"),
    url(../fonts/kuchen/KuchenHollow.ttf) format("truetype");
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
  margin: 0 0 0 0;
  font-size: 7.5rem;
  font-weight: 400;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.footer {
  position: absolute;
  bottom: 0;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 0 0 0;
}

.logo > img {
  width: 400px;
}

.start {
  position: absolute;
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 4em;
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
  align-items: center;
  justify-content: space-around;
  z-index: 1;
}

@media only screen and (max-width: 414px) {
  .text {
    font-size: 30px;
  }

  .logo > img {
    width: 250px;
  }

  .start {
    font-size: 2.5em;
  }
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
