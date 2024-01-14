import { reactive } from "vue";

export const store = reactive({
    movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=adb96d3e5fd020382172fe00aba18a4b&language=it-IT',
    seriesApi: 'https://api.themoviedb.org/3/search/tv?api_key=adb96d3e5fd020382172fe00aba18a4b&language=it-IT',
    popmovieApi: 'https://api.themoviedb.org/3/movie/popular?api_key=adb96d3e5fd020382172fe00aba18a4b&language=it-IT',
    popseriesApi: 'https://api.themoviedb.org/3/tv/popular?api_key=adb96d3e5fd020382172fe00aba18a4b&language=it-IT',
    search: '',
    movies: [],
    series: [],
    popmovie: [],
    popseries: [],
    posterPath: 'https://image.tmdb.org/t/p/w342',
    user: false,
    selectedUser: ''
})