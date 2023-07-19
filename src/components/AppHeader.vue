<script>

export default {
    name: "AppHeader",
    data() {
        return {
            menuLinks: [
                { linkText: 'Home', name: 'home' },
                { linkText: 'Projects', name: 'projectsList' },
            ]
        }
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="item in menuLinks">
                        <router-link :to='item' class="nav-link active" href="">{{ item.linkText }}</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style  scoped></style>