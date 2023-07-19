<script>

export default {
    name: "ProjectList",
    props: {
        project: Object
    }
}

</script>

<template>
    <div class="col-4">
        <div class="card p-0 my-4" style="width: 18rem;">
            <img class="card-img-top" :src="'http://127.0.0.1:8000/storage/' + project.img" :alt="project.type.name">
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
</template>

<style scoped></style>