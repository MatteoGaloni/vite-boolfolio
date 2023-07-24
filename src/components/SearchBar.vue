<script>

export default {
    name: "SearchBar",
    data() {
        return {
            input: 'ciao',
        }
    }
}

</script>

<template>
    <form class="d-flex" role="search">
        <input v-model="input" class="form-control me-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
</template>

<style  scoped></style>