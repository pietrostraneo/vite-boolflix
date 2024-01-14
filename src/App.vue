<script>
import { store } from './store';
import axios from 'axios';
import AppUser from './components/AppUser.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain,
    AppUser
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.mostPopular()
  },
  methods: {

    getMovies(vote) {

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

    },

    mostPopular() {
      axios.get(store.popmovieApi).then((response) => {
        this.store.popmovie = response.data.results
      })

      axios.get(store.popseriesApi).then((response) => {
        this.store.popseries = response.data.results
      })
    }
  },
}
</script>

<template lang="">
  
  <AppUser v-if="store.user == false" />
  <AppHeader @filterMovie="getMovies()" v-if="store.user == true" />
  <AppMain v-if="store.user == true" />

</template>

<style lang="scss">
@use './styles/generals.scss';
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;
</style>
