<script>
import SearchBar from './SearchBar.vue';

export default {
    name: "AppHeader",
    components: {
        SearchBar,
    },
    data() {
        return {
            input: 'ciao',
            menuLinks: [
                { linkText: 'Home', name: 'home' },
                { linkText: 'Projects', name: 'projectListPage' },
            ]
        }
    }
}

</script>

<template>
    <nav id="my-nav" class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="item in menuLinks">
                        <router-link :to='item' class="nav-link active" href="">{{ item.linkText }}</router-link>
                    </li>
                </ul>
            </div>
            <SearchBar />
        </div>
    </nav>
</template>

<style  scoped>
#my-nav {
    height: 10vh;
}
</style>