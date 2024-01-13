<script>
import { store } from '../store';
import AppSearch from './AppSearch.vue'
export default {
    name: 'AppMain',
    components: {
        AppSearch
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <main>
        
        <AppSearch />

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
</style>