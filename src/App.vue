<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
// import AppMain from './components/AppMain.vue'

// import { store } from './data/store'
// import axios from 'axios';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    // AppMain
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
  <router-view></router-view>
  <AppFooter />

  <!-- move components in router.js -->
</template>

<style scoped></style>
