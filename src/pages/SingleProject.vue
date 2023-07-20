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
    <section v-if="project">
        <div class="container">
            <div class="col-12">
                <div class="card p-0 mb-4">
                    <img class="card-img-top" :src="'http://127.0.0.1:8000/storage/' + project.img"
                        :alt="project.type.name">
                    <div class="card-body">
                        <h1 class="text-center m-3">{{ project.title }}</h1>
                        <div>
                            <strong>Type: </strong>
                            <span>{{ project.type ? project.type.name : "Niente da visualizzare" }}</span>
                        </div>
                        <div>
                            <strong>Description: </strong>
                            <p>{{ project.description }}</p>
                        </div>
                        <strong>Technologies: </strong>
                        <div v-for="technology in project.technologies ">
                            <span>{{ technology.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>