<script>
import { store } from '../store';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    methods: {
        getFlag(flag) {

            if (flag == "en") {
                return "fi fi-gb"
            }

            if (flag == "it") {
                return "fi fi-it"
            }

            if (flag == "ja") {
                return "fi fi-jp"
            }
        },

        getPoster(path) {
            let imgPath = store.posterPath + path
            return imgPath
        }
    },
}
</script>

<template lang="">
    <main>
        
        <section id="films" v-if="store.movies.length > 0">
            <div class="container">
                <div class="row mt-5">
                    <h2>Film:</h2>
                    <div class="d-flex gap-3 movielist mt-5">
                        <div class="col-3 d-flex flex-column align-items-center gap-2 text-center mb-3" v-for="film, index in store.movies" :key="index">
                            <img :src="getPoster(film.poster_path)" alt="" class="img-fluid">
                            <h3> {{ film.title }} </h3>
                            <p> {{ film.original_title }} </p>
                            <span :class="getFlag(film.original_language)"></span>
                            <p> {{ film.vote_average }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="tvseries" v-if="store.series.length > 0">
            <div class="container">
                <div class="row mt-5">
                    <h2>TV Series:</h2>
                    <div class="d-flex gap-3 movielist mt-5">
                        <div class="col-3 d-flex flex-column align-items-center gap-2 text-center mb-3" v-for="show, index in store.series" :key="index">
                            <img :src="getPoster(show.poster_path)" alt="" class="img-fluid">
                            <h3> {{ show.name }} </h3>
                            <p> {{ show.first_air_date }} </p>
                            <span :class="getFlag(show.original_language)"></span>
                            <p> {{ show.vote_average }} </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

main {
    height: calc(100vh - 80px);
    overflow: auto;
    background-color: rgb(30, 30, 30);
}

.movielist {
    max-width: 1320px;
    overflow-x: scroll;
}
</style>