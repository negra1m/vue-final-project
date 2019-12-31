<template>
  <div>
    <HeaderMenu />
    <div class="list">
      <ul>
        <li :key="item.id" v-for="item in list">
          <div class="card">
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
                  Air Date:
                  <span>{{item.air_date}}</span>
                </p>
                <p>
                  Episode:
                  <span>{{item.episode}}</span>
                </p>
                <p>
                  Characters:
                  <span><CharactersImageGallery :ids="getCharacterIds(item.characters)"/></span>
                </p>
              </div>
            </div>

          </div>
        </li>
      </ul>
      <div v-if="show" class="show-more">
        <button @click="loadMore()">
          <img class="chevron" src="assets/chevron-down.svg" alt="load more characters" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import CharactersImageGallery from "../components/CharactersImageGallery";
export default {
  name: "EpisodesList",
  components: {
    HeaderMenu,
    CharactersImageGallery
  },
  data() {
    return {
      list: [],
      url: String,
      loading: true,
      show: true
    };
  },
  methods: {
    loadMore() {
      this.$axios.get(this.url).then(response => {
        this.list = this.list.concat(response.data.results);
        if (response.data.info.next) {
          this.url = response.data.info.next;
        } else {
          this.show = false;
        }
      });
    },
    getCharacterIds(urlList){
      let result = [];
      urlList.forEach(url => {
        let id = url.substr(url.lastIndexOf('/') + 1);
        result.push(id);
      });

      return result.slice(2, 11).join(',');
    }
  },
  mounted: function() {
    this.loading = true;
    this.$axios
      .get("https://rickandmortyapi.com/api/episode")
      .then(response => {
        return (
          (this.list = response.data.results),
          (this.url = response.data.info.next)
        );
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

.show-more {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.show-more > button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.chevron {
  width: 120px;
  height: auto;
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
