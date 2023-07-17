<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/",
            projectsApi: "projects",
            loading: false,
            projects: []
        }

    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl + 'projects').then((response) => {
                this.projects = response.data.results.data;
                console.log(response.data);
            });
        }



    },

    mounted() {
        this.getProjects();
    }

}
</script>

<template>
    <h2>Ciao sono componente come stai? </h2>
    <div v-for="project in projects">
        <h4>{{ project.name }}</h4>
        <h4>{{ project.type.name }}</h4>
        <h4> {{ project.description }}</h4>

        <a @click="getNextPage()">Next page</a>
    </div>
</template>