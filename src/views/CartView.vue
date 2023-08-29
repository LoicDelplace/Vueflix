<script setup>
import MovieCard from '@/components/cards/MovieCardComponent.vue'
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cart.js'

// const cart = defineProps(['cart'])

const cartStore = useCartStore();


const isEmpty = ref(!cartStore.cart.length ? true : false)

</script>

<template>
  <!-- <MovieCard v-for="movie in cart.cart" :key="movie.id" :movie="movie" /> -->
  <div class="cart-empty" v-if="isEmpty">
    <h1 class="titleView">Votre panier</h1>
    <h2> Votre panier est vide... 😱</h2>
    <RouterLink :to="{name: 'movies'}"><h2 class="text-empty"> 🔎 Cliquez ici pour parcourir les films disponible</h2></RouterLink>
  </div>

  <div class="cart-not-empty" v-if="!isEmpty">
    <MovieCard v-for="item in cartStore.cart" :key="item.movie.id" :movie="item.movie"> 
    </MovieCard>
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


.cart-not-empty {
  margin-top:2rem;
  display:flex;
  justify-content:center;
  align-items: center;
  gap: 2em;
}

</style>
