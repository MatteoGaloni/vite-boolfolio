<script>
// import { store } from '../data/store'
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },


    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/",
            projectsApi: "projects",
            loading: false,
            loadingError: false,
            projects: [],
            totalProjectsPages: 0,
            currentProjectsPages: 0,
        }

    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(this.apiUrl + this.projectsApi).then((response) => {
                this.projects = response.data.results.data;
                this.loading = false;
                console.log(response.data);
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
            })
        }
    },
    mounted() {
        this.getProjects();
    }
}

</script>

<template>
    <template v-if="loading">
        <h5>La pagina sta caricando</h5>
        <h3 v-if="loadingError">{{ loadingError }}</h3>
    </template>
    <div>
        <!-- <div class="card m-3 col-4" v-for="project in projects">
                <h4>{{ project.name }}</h4>
                <h4>{{ project.type.name }}</h4>
                <h4> {{ project.description }}</h4>
                <a @click="getNextPage()">Next page</a>
            </div> -->
        <section class="container" v-if="projects.length > 0">
            <div class="row">
                <template v-for="project in projects">
                    <ProjectCard :project="project" />
                </template>
            </div>
        </section>
    </div>
</template>

<style scoped></style>