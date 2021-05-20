<template>
    <header class="header">
        <h1 class="header__title">Movies List</h1>
        <nav class="header__nav">
            <RouterLink to="/" class="header__nav__link">Home</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    methods: {
        selectView(name){
            this.$emit("selectView", name);
        },
    },
}
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2b2b2b;
    color: white;
    .header__title{
        margin-left: 2em;
    }
    .header__nav{
        margin-right: 2em;
        a{
            text-decoration: none;
            color: white;
        }
    }
}
</style>