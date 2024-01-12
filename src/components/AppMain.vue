<script>
import { store } from '../store';
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },

}
</script>

<template lang="">
    <main>
        
        <section id="films">
            <div class="container">
                <div class="row">
                    <div class="col-2 d-flex flex-column align-items-center gap-2 text-center mb-3" v-for="film, index in store.movies" :key="index">
                        <h3> {{ film.title }} </h3>
                        <p> {{ film.original_title }} </p>
                        <p> {{ film.original_language}} </p>
                        <p> {{ film.vote_average }} </p>
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
</style>