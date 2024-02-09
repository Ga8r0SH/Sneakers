<template>
    <div>
        <Header/>
        <FavoritesTitle/>
    </div>
</template>
<script>
import Header from '../../components/Header/Header.vue';
import FavoritesTitle from '../../components/Favorites/FavoritesTitle.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        Header,
        FavoritesTitle
    }
}
</script>