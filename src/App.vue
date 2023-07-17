<script>
import AppMain from './components/AppMain.vue'

import { store } from './data/store'
import axios from 'axios';

export default {
  name: "App",
  components: {
    AppMain
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <h1>CIAO SONO VUE!!</h1>
  <AppMain />
</template>

<style scoped></style>
