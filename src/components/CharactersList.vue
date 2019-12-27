<template>
  <div>
    <HeaderMenu />
    <div class="list">
      <ul>
        <li :key="item.id" v-for="item in list">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="item.image" height="200px" width="200px" style="border-radius: 50%;" />
            </div>
            <div class="description">
              <div class="header">
                <p>
                  Name:
                  <span>{{item.name}}</span>
                </p>
                <p>ID: {{item.id}}</p>
              </div>
              <div class="others">
                <p>
                  Origin:
                  <span>{{item.location.name}}</span>
                </p>
                <p>
                  Status:
                  <span>{{item.status}}</span>
                </p>
                <p>
                  Specie:
                  <span>{{item.species}}</span>
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
  },
  data() {
    return {
      list: null,
      url: String,
      loading: true
    };
  },
  methods: {
    loadMore() {
      this.$axios.get(this.url).then(response => {
        this.list = response.results;
        this.url = response.info.next;
      });
    }
  },
  mounted: function() {
    this.loading = true;
    this.$axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        return (this.list = response.data.results);
      });
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
