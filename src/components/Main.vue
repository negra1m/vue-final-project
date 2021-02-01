<template>
  <div class="main">
    <HeaderMenu title="Rick n' Morty's list"/>
    <div class="content">
      <div class="text">
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

@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@100&display=swap');

@font-face {
  font-family: "KuchenHollow";
  src: local("KuchenHollow"),
    url(../fonts/kuchen/KuchenHollow.ttf) format("truetype");
}

.text {
  color: #faff64;
  padding: 15px 15px;
  align-self: flex-start;
  text-align: center;
}

.text > p {
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  font-family: 'Public Sans', sans-serif;
  /* text-shadow: 0.15rem 0.15rem #fff ; */
  background-color: #000;
  padding: 1rem 2rem;
}

.text > h1 {
  margin: 0 4rem 0 0;
  font-size: 7.5rem;
  font-weight: 400;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/assets/paisagem.png');
  background-repeat: no-repeat;
  background-attachment: absolute;
  background-position: bottom; 
  background-size: cover;
  background-size: ;
}

.footer {
  position: absolute;
  bottom: 0;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
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
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

@media only screen and (max-width: 510px) {
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
