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
        }
    },
}
</script>

<template lang="">
    <main>
        
        <section id="films">
            <div class="container">
                <div class="row">
                    <h2>Film:</h2>
                    <div class="d-flex gap-5 movielist">
                        <div class="col-4 d-flex flex-column align-items-center gap-2 text-center mb-3" v-for="film, index in store.movies" :key="index">
                            <h3> {{ film.title }} </h3>
                            <p> {{ film.original_title }} </p>
                            <span :class="getFlag(film.original_language)"></span>
                            <p> {{ film.vote_average }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="tvseries">
            <div class="container">
                <div class="row">
                    <h2>TV Series:</h2>
                    <div class="d-flex gap-3 movielist mt-5">
                        <div class="col-3 d-flex flex-column align-items-center gap-2 text-center mb-3" v-for="show, index in store.series" :key="index">
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

.movielist {
    max-width: 1320px;
    overflow-x: scroll;
}
</style>