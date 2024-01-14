<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            searching: false
        }
    },
    methods: {
        resetFilters() {
            store.movies = []
            store.series = []
            store.search = ''
        }
    },
}
</script>

<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="d-flex gap-2 align-items-center">
                        <img src="../assets/logo.png" alt="logo" class="img-fluid" @click="resetFilters()">
                        <ul class="list-unstyled d-flex gap-3 text-white">
                            <li>Home</li>
                            <li>TV Series</li>
                            <li>Film</li>
                            <li>New & Popular</li>
                            <li>My List</li>
                        </ul>
                    </div>
                    <div class="d-flex gap-3 align-items-center headerdx justify-content-end">
                        <input type="text" name="search" id="search" class="slide-in-right" v-model="store.search" v-if="searching" placeholder="Search movie or series.." @keyup.enter="$emit('filterMovie')">
                        <i class="fas fa-magnifying-glass" @click="searching = !searching"></i>
                        <ul class="list-unstyled d-flex gap-3 text-white">
                            <li>Kids</li>
                        </ul>
                        <i class="fas fa-bell"></i>
                        <div class="d-flex align-items-center">
                            <img :src="store.selectedUser" alt="" class="img-fluid">
                            <i class="fas fa-caret-down"></i>
                        </div>

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
    display: flex;
    align-items: center;

    #search {
        border-radius: 10px;
        border: 2px solid white;
        background-color: transparent;
        color: white;
        padding: 5px;
    }

    img {
        width: 25%;
        padding: 8px;
        cursor: pointer;
    }

    .searchBtn {
        border-radius: 20px;
        color: white;
    }

    i {
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    }

    ul {
        margin: 0;

        li:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .headerdx img {
        width: 55px;
    }
}

.slide-in-right {
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-right {
    0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-right {
    0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}
</style>