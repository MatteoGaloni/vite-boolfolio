<script>
import axios from 'axios';
import ContactForm from '../components/ContactForm.vue';


export default {
    name: "SingleProject",
    components: {
        ContactForm
    },

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
            <div class="row mt-4">
                <div class="col-6">
                    <div class="card p-0">
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
                            <div>
                                <strong>Creatore: </strong>
                                <span>{{ project.user.name }}</span>
                                <div>
                                    <strong>Email: </strong>
                                    <span>{{ project.user.email }}</span>
                                </div>
                            </div>
                            <div>
                                {{ project.id }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <ContactForm :projectId="project.id" />
                </div>
            </div>
        </div>
    </section>
</template>