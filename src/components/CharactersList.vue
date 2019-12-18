<template>
  <div>
    <HeaderMenu />
    <div class="list">
      <ul>
        <li>
          <div class="card">
            <div class="card-image">
              <img src="test-list.jpeg" width="200px" style="border-radius: 50%;" />
            </div>
            <div class="description">
              <div class="header">
                <p>
                  Name:
                  <span>Rick Sanchez</span>
                </p>
                <p>ID: #1</p>
              </div>
              <div class="others">
                <p>
                  Origin:
                  <span>Earth</span>
                </p>
                <p>
                  Status:
                  <span>Alive</span>
                </p>
                <p>
                  Species:
                  <span>Human</span>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";

export default {
  name: "CharactersList",
  components: {
    HeaderMenu
  }
};
</script>
<style scoped>
.card {
  border-radius: 2px;
  border: rgb(88, 209, 233) 1px solid;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  min-height: 200px;
  margin-bottom: 10px;
  padding: 20px 20px;
}

.card-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 2em;
}

.list {
  padding: 7em 2em;
}

.description {
  color: white;
  flex: 3;
  font-size: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
}

p > span {
  font-weight: bold;
  color: #faff64;
}

a,
ul,
li {
  color: #faff64;
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
