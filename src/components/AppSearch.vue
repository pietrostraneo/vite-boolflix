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
                        <div class="flip-card text-center" v-for="film, index in store.movies" :key="index">
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

        <section id="tvseries" v-if="store.series.length > 0">
            <div class="container">
                <div class="row mt-3">
                    <h2>TV Series:</h2>
                    <div class="d-flex gap-3 movielist mt-5">
                        <div class="flip-card text-center" v-for="show, index in store.series" :key="index">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img :src="getPoster(show.poster_path)" alt="" class="img-fluid">
                                </div>
                                <div class="flip-card-back">
                                    <p> {{ show.first_air_date }} </p>
                                    <span :class="getFlag(show.original_language)"></span>
                                    <div class="mt-3">
                                        <i class="fas fa-star" :class="getReview(show.vote_average) >= 1 ? 'reviewed' : ''"></i>
                                        <i class="fas fa-star" :class="getReview(show.vote_average) >= 2 ? 'reviewed' : ''"></i>
                                        <i class="fas fa-star" :class="getReview(show.vote_average) >= 3 ? 'reviewed' : ''"></i>
                                        <i class="fas fa-star" :class="getReview(show.vote_average) >= 4 ? 'reviewed' : ''"></i>
                                        <i class="fas fa-star" :class="getReview(show.vote_average) == 5 ? 'reviewed' : ''"></i>
                                    </div>
                                    <p class="mt-3">{{show.overview}}</p>
                                </div>
                            </div>
                            <h3 class="mt-3"> {{ show.name }} </h3>
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

    .fa-star {
        color: white;
    }

    .reviewed {
        color: gold;
    }
}

.flip-card {
    background-color: transparent;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 324px;
    height: 486px;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

.flip-card-back {
    border: 1px solid white;
    color: white;
    transform: rotateY(180deg);
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
</style>