<template>
  <div class="main-content">
    <HeaderMenu title="Characters"/>
    <div class="list">
      <ul>
        <li :key="item.id" v-for="item in list">
          <div class="card">
            <div class="card-image">
              <img class="shine" v-bind:src="item.image" height="200px" width="200px" />
            </div>
            <div class="description">
              <div class="header">
                <p class="name">
                  Name:
                  <span>{{item.name}}</span>
                </p>
                <p class="id">#{{item.id}}</p>
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
export default {
  name: "CharactersList",
  components: {
    HeaderMenu
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
    }
  },
  mounted: function() {
    this.loading = true;
    this.$axios
      .get("https://rickandmortyapi.com/api/character")
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

.main-content {
  display: flex;
  align-content: center;
  width: 100%;
}

.card {
  box-shadow: inset 150px 10px 140px 80px rgba(0,0,0,0.75);
  border-radius: 0.5rem;
  background: linear-gradient(to right, #000000, #1b9dd1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: space-around;
  min-height: 200px;
  margin-bottom: 4rem;
  min-width: 35rem;
  width: 50rem;
  max-width: 80rem;
  padding: 0 20px 0 0px;
  filter: blur(0.03rem) saturate(0.7) contrast(1.2) brightness(0.9);
}

.card-image {
  box-shadow: inset 150px 10px 140px 80px rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 2em;
}

.card-image > img {
  height: -webkit-fill-available;
  width: 250px;
}

.card-image > img:hover {
  filter: none;
}

.header > .id  {
    position: relative;
    float: right;
}

.header > .name {
  font-size: 20px;
}

.list {
  width: 100%;
  padding: 12em 7em;
  background: linear-gradient(180deg, rgba(14,14,14,1) 16%, rgba(30,32,70,1) 33%, rgba(73,68,100,1) 59%, rgba(52,96,127,1) 66%, rgba(137,167,119,1) 88%, rgba(198,197,137,1) 100%);
}

.list {
  background-image: url('/assets/paisagem.png');
  background-repeat: no-repeat;
  background-attachment: absolute;
  background-position: bottom; 
  background-size:contain;
}

.description {
  color: white;
  flex: 3;
  font-size: 1rem;
  font-weight: 900;
}

.shine {
  filter: brightness(0.3);
  transition: all 2s ease;
}

.shine:hover {
  filter: brightness(1);
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

p {
  font-size: 14px;
  font-family: 'Public Sans', sans-serif;
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

li {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
}

</style>
