<script>
import { store } from '../store';
export default {
    name: 'AppMovies',
    data() {
        return {
            store
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

    <section>
        
    </section>

    <section id="popMovies">
        <div class="container">
            <div class="row mt-5">
                <h2>Most viewed films on Pierùflix:</h2>
                <div class="d-flex gap-3 movielist mt-5">
                    <div class="flip-card text-center" v-for="film, index in store.popmovie" :key="index">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img :src="getPoster(film.poster_path)" alt="" class="img-fluid">
                            </div>
                            <div class="flip-card-back">
                                <p> {{ film.original_title }} </p>
                                <span :class="getFlag(film.original_language)"></span>
                                <div class="mt-3">
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 1 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 2 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 3 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 4 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) == 5 ? 'reviewed' : ''"></i>
                                </div>
                                <p class="mt-3">{{film.overview}}</p>
                            </div>
                        </div>
                        <h3 class="mt-3"> {{ film.title }} </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="popSeries">
        <div class="container">
            <div class="row mt-5">
                <h2>Most viewed Tv Series on Pierùflix:</h2>
                <div class="d-flex gap-3 movielist mt-5">
                    <div class="flip-card text-center" v-for="film, index in store.popseries" :key="index">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img :src="getPoster(film.poster_path)" alt="" class="img-fluid">
                            </div>
                            <div class="flip-card-back">
                                <p> {{ film.original_title }} </p>
                                <span :class="getFlag(film.original_language)"></span>
                                <div class="mt-3">
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 1 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 2 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 3 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) >= 4 ? 'reviewed' : ''"></i>
                                    <i class="fas fa-star" :class="getReview(film.vote_average) == 5 ? 'reviewed' : ''"></i>
                                </div>
                                <p class="mt-3">{{film.overview}}</p>
                            </div>
                        </div>
                        <h3 class="mt-3"> {{ film.name }} </h3>
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
    @include moviesList
}
</style>