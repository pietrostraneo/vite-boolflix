<script>
import { store } from '../store';
export default {
    name: 'AppUser',
    data() {
        return {
            store,
            users: [
                {
                    name: 'Fabrizio',
                    img: 'public/profile1.png'
                },
                {
                    name: 'Antonio',
                    img: 'public/profile2.png'
                },
                {
                    name: 'Thomas',
                    img: 'public/profile3.png'
                },
                {
                    name: 'Pietro',
                    img: 'public/profile4.png'
                },
            ]
        }
    },
}
</script>
<template lang="">
    <section id="login">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Who's watching Pierùflix?</h1>
                </div>
                <div class="col-12 col-md-3 mt-5 text-center" v-for="user, index in users" :key="index">
                    <img :src="user.img" :alt="user.name" @click="store.user = true; store.selectedUser = user.img" class="img-fluid">
                    <h5 class="mt-3">{{user.name}}</h5>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

#login {
    width: 100vw;
    height: 100vh;
    background-color: rgb(30, 30, 30);
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: white;
    }

    h5 {
        color: #808080
    }

    img {
        border: 2px solid;

        &:hover {
            border: 2px solid white;
        }
    }
}
</style>