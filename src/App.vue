<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './data/store'
import axios from 'axios';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store,
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
  <AppMain />
</template>

<style scoped></style>
