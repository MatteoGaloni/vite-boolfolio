<script>
import { store } from '../data/store';
import axios from 'axios'

export default {
    name: "ContactForm",
    props: {
        projectId: Number
    },
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
        }
    },
    methods: {
        sendData() {
            let requestData = {
                name: this.name,
                email: this.email,
                message: this.message,
            }
            axios.post(this.store.apiUrl + `contacts/${this.projectId}`, requestData).then(response => {
                console.log(response, 'I dati del form sono stati inviati correttamaente');
            }).catch(err => {
                console.log(err.message, 'ops, qualcosa è andato storto')
            });
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
}
</script>

<template>
    <form @submit.prevent="sendData()">
        <div class="mb-3 form-group">
            <label for="name" class="form-label text-white">Name</label>
            <input v-model="name" type="text" class="form-control" id="name" placeholder="Inserisci qui il tuo nome">
        </div>
        <div class="mb-3 form-group">
            <label for="email" class="form-label text-white">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Inserisci qui la tua email">
        </div>
        <div class="mb-3 form-group">
            <label class="text-white" for="meassage">Message</label>
            <textarea v-model="message" class="form-control" id="message" rows="3"
                placeholder="Insersci qui le tue richieste al creatore del progetto"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    {{ projectId }}
</template>

<style  scoped></style>