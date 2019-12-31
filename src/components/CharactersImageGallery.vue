<template>
  <div>
    
        <div  class="frame">
            <div :key="item.id" v-for="item in list" class="card-image">
              <img v-bind:src="item.image" height="200px" width="200px" style="border-radius: 50%;" />
            </div>
        </div>
    </div>
  
</template>

<script>

export default {
  name: "CharactersImageGallery",
  components: {
  },
  props: ['ids'],
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
    console.log(this.ids);
    this.$axios
      .get("https://rickandmortyapi.com/api/character/" + this.ids)
      .then(response => {
        return (
          (this.list = response.data)
        );
      });
  }
};
</script>
<style scoped>
.frame {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 200px;
  margin-bottom: 10px;
  padding: 20px 20px;
}

.card-image {
  display: flex;
  justify-content: center;
  flex: 1;
  margin-right: 2em;
}
</style>
