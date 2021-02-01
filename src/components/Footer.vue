<template>
  <section class="footer">
    <img src="assets/rick waiting.gif" />
    <div class="description">
      Developed by
      <a target="blank" href="https://github.com/negra1m">Vinícius Negrão</a>
      and
      <a target="blank" href="https://https://github.com/gustavofreitas"
        >Gustavo Freitas</a
      >.
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
a {
  color: #faff64;
  text-decoration: none;
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 400px;
  width: 100%;
  z-index: 0;
}

@media only screen and (max-width: 510px) {
.footer > img {
  width: 12rem;
  transition: all 2s ease;
}
}
.description {
  color: white;
}
</style>
