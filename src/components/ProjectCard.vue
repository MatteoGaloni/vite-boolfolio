<script>

export default {
    name: "AppMain",
    props: {
        project: Object
    }
}

</script>

<template>
    <div class="card col-4" style=" width: 18rem;">
        <img class="card-img-top" :src="project.img" :alt="project.type.name">
        <div class="card-body">
            <h1 class="text-center m-3">{{ project.title }}</h1>
            <div>
                <strong>Type: </strong>
                <span>{{ project.type ? project.type.name : "Niente da visualizzare" }}</span>
            </div>
            <div>
                <p>{{ project.description }}</p>
            </div>
            <div>
                <p>{{ project.technology }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>