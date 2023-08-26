<script setup>
// import MovieCard from '@/components/cards/MovieCardComponent.vue'
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// const cart = defineProps(['cart'])



const isEmpty = ref(true);

</script>

<template>
  <!-- <MovieCard v-for="movie in cart.cart" :key="movie.id" :movie="movie" /> -->
  <div class="cart-empty" v-if="isEmpty">
    <h1 class="titleView">Votre panier</h1>
    <h2> Votre panier est vide... 😱</h2>
    <RouterLink :to="{name: 'movies'}"><h2 class="text-empty"> 🔎 Cliquez ici pour parcourir les films disponible</h2></RouterLink>
  </div>
</template>

<style scoped lang="scss">

.cart-empty{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 2em;
    .text-empty{
        color: $primary-color;
    }
}

</style>
