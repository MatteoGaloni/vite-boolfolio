<script>
import ContactForm from '../components/ContactForm.vue';
export default {
    name: "HomePage",
    components: {
        ContactForm
    },
    data() {
        return {
        }
    },
}
</script>

<template>
    <section>
        <div id="my-jumbo" class="container">
            <h1 class="text-center text-white mt-4">My BoolFolio</h1>
            <ContactForm />
        </div>
    </section>
</template>

<style  scoped>
#my-jumbo {
    height: 80vh;
}
</style>