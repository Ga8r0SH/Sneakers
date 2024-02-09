<template>
    <div class="flex justify-start px-16 bg-white items-center py-10">
        <button @click="goBack">
            <div class="px-3 py-2 bg-white rounded-xl border ">
                <svg width="12" height="17" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11L1 6L6 1" stroke="grey" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </button>
        <h1 class="font-bold text-[32px] ml-5">Мои закладки</h1>
    </div>
</template>
<script >

export default {
    name: 'FavoritesTitle',
    data() {
        return {
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1); 
        },
    }
}
</script>