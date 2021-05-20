<template>
  <div class="genres__container">
    <ul class="genres__ul">
      <li class="genres__ul__li" v-for="(genre, $index) in genres" :key="$index">
          <a class="genres__ul__li__a" href="#" to="/">{{genre.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GenresList",
  mounted() {
    this.$store.dispatch("getGenresFromAPI");
  },
  computed: {
    genres() {
      return this.$store.state.genres;
    },
  },
};
</script>

<style lang="scss" scoped>
.genres__container{
    padding: .2em 0.5em;
    background-color: #dbdbdb;
}
.genres__ul{
    display: flex;
    flex-flow:wrap;
    row-gap: .5em;
    justify-content: center;
    .genres__ul__li{
        list-style: none;
        margin-right: .5em;
        cursor: pointer;
        background-color: white;
        padding: 0.2rem .7rem;
        border-radius: 18px;
        &:hover{
            background-color: #cccccc;
        }
    }
    .genres__ul__li__a{
        font-size: 14px;
        text-decoration: none;
        color: #474747;
    }
}
</style>
