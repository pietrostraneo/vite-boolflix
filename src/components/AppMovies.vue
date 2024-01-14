<script>
import { store } from '../store';
export default {
    name: 'AppMovies',
    data() {
        return {
            store,
            slider: [
                {
                    image: "public/slider5.jpg",
                    name: 'Toy Story 3'
                },
                {
                    image: "public/slider4.jpg",
                    name: 'Lo Hobbit - La desolazione di Smaug'
                },
                {
                    image: "public/slider3.jpg",
                    name: 'Fury'
                },
                {
                    image: "public/slider2.jpg",
                    name: 'Mad Max - Fury road'
                },
                {
                    image: "public/slider1.jpg",
                    name: 'Il cavaliere Oscuro'
                },
            ],
            activeImg: 0
        }
    },
    created() {
        this.nextImg()
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
        },

        nextImg() {
            setInterval(() => {
                this.activeImg++
                if (this.activeImg == this.slider.length) {
                    this.activeImg = 0
                }
            }, 2000);
        }
    },
}
</script>
<template lang="">

    <section id="slider">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <img :src="slider[activeImg].image" alt="" class="img-fluid fade-in">
                </div>
            </div>
        </div>
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

#slider {
    img {
        width: 100%;
        height: 800px;
    }
}

.fade-in {
    -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>