<template>
<!-- <div> -->
  <header class="header">
    <h1 class="header__title">Movies List</h1>
    <nav class="header__nav">
      <RouterLink to="/" class="header__nav__link">Home</RouterLink>
    </nav>
  </header>
  <!-- <div>
    <ul>
      <li
      v-for="(breadcrumb, index) in breadcrumbList"
      :key="index"
      @click="routeTo(index)"
      :class="{'linked': !!breadcrumb.link}">
      {{breadcrumb.name}}
      </li>
    </ul>
  </div>
  </div> -->
</template>

<script>
export default {
  name: "AppHeader",
  /* mounted(){
    this.updateList();
  },
  data(){
    return {
      breadcrumbList: [],
    }
  }, */
  methods: {
    selectView(name) {
      this.$emit("selectView", name);
    },
    /* routeTo(pRouteTo){
      if (this.breadcrumbList[pRouteTo].link) {
        this.$router.push(this.breadcrumbList[pRouteTo].link);
      }
    },
    updateList(){
      this.breadcrumbList = this.$route.meta.breadcrumb;
    } */
  },
  /* watch: {
    '$route' (){
      this.breadcrumbList = this.$route.meta.breadcrumb;
    }
  }, */

};
</script>

<style lang="scss" scoped>
.header {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
  height: 10vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $primaryColor;
  color: white;
  .header__title {
    margin-left: 1.5em;
    font-size: 24px;
    color: white;
  }
  .header__nav {
    margin-right: 2em;
    a {
      text-decoration: none;
      color: white;
      padding: .5em 1em;
      &:hover{
        background-color: $primaryColorHover;
      }
    }
  }
}
</style>
