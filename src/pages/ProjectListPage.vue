<script>
import { store } from '../data/store'
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectListPage',
    components: {
        ProjectCard
    },

    data() {
        return {
            store,
            projects: [],
            currentProjectsPage: 0,
            totalProjectsPages: 0,
        }

    },
    methods: {
        getFirstProjects() {
            this.store.loading = true;
            axios.get(this.store.apiUrl + this.store.projectsApi).then((response) => {
                this.projects = response.data.results.data;
                this.currentProjectsPage = response.data.results.current_page
                this.totalProjectsPages = response.data.results.last_page
                console.log(this.totalProjectsPages);
                this.store.loading = false;
                console.log(response.data);
            }).catch(err => {
                this.store.loading = false;
                this.store.loadingError = err.message;
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
                this.store.loading = true;
                axios.get(this.store.apiUrl + this.store.projectsApi, config).then((response) => {
                    this.projects = response.data.results.data;
                    this.currentProjectsPage = response.data.results.current_page
                    this.totalProjectsPages = response.data.results.last_page
                    console.log(this.totalProjectsPages);
                    this.store.loading = false;
                    console.log(response.data);
                }).catch(err => {
                    this.store.loading = false;
                    this.store.loadingError = err.message;
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
    <template v-if="store.loading">
        <h2 class="text-center text-white mt-5">
            <i id="my-gear" class="fa-solid fa-gear fa-spin"></i>
        </h2>
        <h2 class="text-center" v-if="store.loadingError">{{ store.loadingError }}</h2>
    </template>
    <div>
        <section class="container" v-if="projects.length > 0">
            <div class="row">
                <div class="col">
                    <button @click="prevPage" class="btn btn-primary m-2">Prev</button>
                    <button @click="nextPage" class="btn btn-primary m-2">Next</button>
                </div>
            </div>
            <div v-if="!store.loading" class="row">
                <template v-for="project in projects">
                    <ProjectCard :project="project" />
                </template>
            </div>
        </section>
    </div>
</template>

<style scoped>

#my-gear{
    font-size: 7rem;
}
</style>