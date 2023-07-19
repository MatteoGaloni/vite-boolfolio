<script>
import axios from 'axios';

export default {
    name: "SingleProject",
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/",
            loading: false,
            loadingError: false,
            project: null
        }
    },
    methods: {
        getProject(slug) {
            this.loading = true;
            axios.get(this.apiUrl + 'projects/' + slug).then((response) => {
                this.project = response.data.results;
                console.log(this.project, 'Sono la chiamata del singolo progetto');
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
                this.$router.push({ name: 'not-found' })
            });

        },
    },
    mounted() {
        this.getProject(this.$route.params.slug);
    }
}
</script>

<template>
    <section>
        <h1>SONO IL SINGOLO PROGETTO</h1>
    </section>
</template>