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
            apiUrl: "http://127.0.0.1:8000/ai/",
            projectsApi: "projects",
            loading: false,
            loadingError: false,
            projects: [],
            currentProjectsPage: 0,
            totalProjectsPages: 0,
        }

    },
    methods: {
        getFirstProjects() {
            this.loading = true;
            axios.get(this.apiUrl + this.projectsApi).then((response) => {
                this.projects = response.data.results.data;
                this.currentProjectsPage = response.data.results.current_page
                this.totalProjectsPages = response.data.results.last_page
                console.log(this.totalProjectsPages);
                this.loading = false;
                console.log(response.data);
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
                this.$router.push({ name: 'not-found' })
            });

        },

        getProjects(pageNumber) {
            if (pageNumber && pageNumber > 0 && pageNumber <= this.totalProjectsPages) {

                let config = {
                    params: {
                        page: pageNumber
                    }
                }

                this.loading = true;
                axios.get(this.apiUrl + this.projectsApi, config).then((response) => {
                    this.projects = response.data.results.data;
                    this.currentProjectsPage = response.data.results.current_page
                    this.totalProjectsPages = response.data.results.last_page
                    console.log(this.totalProjectsPages);
                    this.loading = false;
                    console.log(response.data);
                }).catch(err => {
                    this.loading = false;
                    this.loadingError = err.message;

                });
            }
        },

        nextPage() {
            this.getProjects(this.currentProjectsPage + 1)
        },
        prevPage() {
            this.getProjects(this.currentProjectsPage - 1)
        },
    },
    mounted() {
        this.getFirstProjects();
    }
}

</script>

<template>
    <template v-if="loading">
        <h5>La pagina sta caricando</h5>
        <h3 v-if="loadingError">{{ loadingError }}</h3>
    </template>
    <div>
        <section class="container" v-if="projects.length > 0">
            <div class="row">
                <div class="col">
                    <button @click="prevPage" class="btn btn-primary m-2">Prev</button>
                    <button @click="nextPage" class="btn btn-primary m-2">Next</button>
                </div>
            </div>
            <div class="row">
                <template v-for="project in projects">
                    <ProjectCard :project="project" />
                </template>
            </div>
        </section>
    </div>
</template>

<style scoped></style>