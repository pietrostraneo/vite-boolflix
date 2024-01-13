<script>
import { store } from '../store';
export default {
    name: 'AppSearch',
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
        },

        getReview(vote) {
            let reviews = vote.toFixed() / 2
            return reviews
        }
    },
}
</script>

<template lang="">
    <section id="films" v-if="store.movies.length > 0">
            <div class="container">
                <div class="row mt-5">
                    <h2>Film:</h2>
                    <div class="d-flex gap-3 movielist mt-5">
                        <div class="col-3 d-flex flex-column align-items-center gap-2 text-center mb-3" v-for="film, index in store.movies" :key="index">
                            <div class="poster-front">
                                <img :src="getPoster(film.poster_path)" alt="" class="img-fluid">
                            </div>
                            <div class="poster-back">
                                <p> {{ film.original_title }} </p>
                                <span :class="getFlag(film.original_language)"></span>
                                <div>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 1 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 2 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 3 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 4 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) == 5 ? 'reviewed' : ''"></i>
                                </div>
                            </div>
                            <h3> {{ film.title }} </h3>
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
                            <div class="poster-front">
                                <img :src="getPoster(show.poster_path)" alt="" class="img-fluid">
                            </div>
                            <div class="poster-back">
                                <p> {{ show.first_air_date }} </p>
                                <span :class="getFlag(show.original_language)"></span>
                                <div>
                                    <i class="fas fa-star" :class="getReview(show.vote_average) >= 1 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(show.vote_average) >= 2 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(show.vote_average) >= 3 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(show.vote_average) >= 4 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(show.vote_average) == 5 ? 'reviewed' : ''"></i>
                                </div>
                                <h3> {{ show.name }} </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.movielist {
    max-width: 1320px;
    overflow-x: scroll;

    .col-3 {
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .col-3:hover {
        transform: rotateY(180deg);
    }

    .fa-star {
        color: white;
    }

    .reviewed {
        color: gold;
    }
}
</style>