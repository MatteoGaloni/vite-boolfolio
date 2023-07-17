<script>

import { store } from '../data/store'
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppMain',
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
                this.projects = [];
                this.loading = false;
                this.loadingError = err + "something wrong";
            })
        }
    },
    mounted() {
        this.getProjects();
    }
}

</script>

<template>
    <template v-if="this.loading == true">
        <h5>La pagina sta caricando</h5>
    </template>
    <div class="container">
        <div class="row">
            <!-- <div class="card m-3 col-4" v-for="project in projects">
                <h4>{{ project.name }}</h4>
                <h4>{{ project.type.name }}</h4>
                <h4> {{ project.description }}</h4>
                <a @click="getNextPage()">Next page</a>
            </div> -->
            <section v-if="projects.length > 0">
                <template v-for="project in projects">
                    <ProjectCard :project="project" />
                </template>
            </section>
        </div>
    </div>
</template>

<style scoped></style>