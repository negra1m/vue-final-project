<template>
  <section class="footer">
    <img width="130px" src="../assets/rick waiting.gif" />
    <div class="description">
      Developed by
      <a href="https//github.com/negra1m">Negrão</a>
      e
      <a href="https//github.com/gfrank">Gfrank</a>.
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #faff64;
  text-decoration: none;
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 300px;
  width: 100%;
}

.description {
  color: white;
}
</style>
