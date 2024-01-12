import { reactive } from "vue";

export const store = reactive({
    movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=936c35b4b16460fb4dde335b5ef4cc15',
    seriesApi: 'https://api.themoviedb.org/3/search/tv?api_key=936c35b4b16460fb4dde335b5ef4cc15',
    search: ''
})