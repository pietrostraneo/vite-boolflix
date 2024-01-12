<script>
import { store } from './store';
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {

    getMovies() {

      let movieSearch = store.movieApi;
      let seriesSearch = store.seriesApi

      if (store.search !== '') {
        movieSearch += `&query=${store.search}`
        seriesSearch += `&query=${store.search}`
      }

      axios.get(movieSearch).then((response) => {
        this.store.movies = response.data.results
      })

      axios.get(seriesSearch).then((response) => {
        this.store.series = response.data.results
      })

    }

  },
}
</script>

<template lang="">
  
  <AppHeader @filterMovie="getMovies()" />
  <AppMain />

</template>

<style lang="scss">
@use './styles/generals.scss';
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;
</style>
