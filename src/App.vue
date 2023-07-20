<script>
import AppHeader from './components/AppHeader.vue'


export default {
  name: "App",
  components: {
    AppHeader,
  },

  data() {
    return {
      // store,
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<template>
  <AppHeader />
  <!-- move components in router.js -->
  <router-view></router-view>

</template>

<style scoped></style>
