<script>

import { store } from '../data/store'
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }

    },
    methods: {
        getProjects() {
            axios.get(this.store.apiUrl + this.store.projectsApi).then((response) => {
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
    <div class="container">
        <h2>Projects</h2>
        <div class="row">
            <div class="card m-3 col-4" v-for="project in projects">
                <h4>{{ project.name }}</h4>
                <h4>{{ project.type.name }}</h4>
                <h4> {{ project.description }}</h4>

                <a @click="getNextPage()">Next page</a>
            </div>
        </div>
    </div>
</template>