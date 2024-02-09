<template>
    <div class="bg-white px-16 mt-7 rounded-lg mb-10">
        <div class="flex justify-center py-8 align-middle items-center">
            <li class="inline-block px-10"><img :src="bitcoin"></img></li>
            <li class="inline-block px-10"><img :src="visa"></img></li>
            <li class="inline-block px-10"><img :src="maestro"></img></li>
        </div>
        <h1 class="text-center pb-12 font-bold ">Copyright 2024 SHOPSNEAKERS</h1>
    </div>
</template>
<script>
import visa from '@/assets/visa.png';
import maestro from '@/assets/maestro.png';
import bitcoin from '@/assets/bitcoin.png';
export default {
    name: 'Footer',
    data() {
        return {
            visa: visa,
            bitcoin:bitcoin,
            maestro:maestro
        }
    }
}
</script>
<style></style>