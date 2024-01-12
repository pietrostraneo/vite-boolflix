<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <img src="../assets/logo.png" alt="logo" class="img-fluid">
                    <div class="d-flex gap-3">
                        <input type="text" name="search" id="search" v-model="store.search" placeholder="Search movie or series..">
                        <button class="btn btn-outline-danger searchBtn" @click="$emit('filterMovie')">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

header {
    background-color: black;
    width: 100%;
    height: 80px;

    #search {
        border-radius: 20px;
        border: 1px solid white;
        background-color: transparent;
        color: white;
        padding: 5px;
    }

    img {
        width: 15%;
        padding: 8px;
    }

    .searchBtn {
        border-radius: 20px;
        color: white;
    }
}
</style>