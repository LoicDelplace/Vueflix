<script setup>
import { getMovies, countMovies } from '../services/api'
import { ref } from 'vue'
import MovieCard from '@/components/cards/MovieCardComponent.vue'
import Loader from '@/components/LoaderComponent.vue'
import Button from '@/components/buttons/ButtonComponent.vue'
import { useCartStore } from '@/stores/cart.js'

countMovies().then((length) => (moviesNb.value = length))
const moviesNb = ref(0)

const page = ref(1)
const movies = ref([])
const loading = ref(true)
getMovies().then((response) => {
  setTimeout(() => {
    movies.value = response
    loading.value = false
  }, 1000)
})
const showMore = () => {
  loading.value = true

  getMovies(++page.value).then((response) => {
    setTimeout(() => {
      movies.value = movies.value.concat(response)
      loading.value = false
    }, 1000)
  })
}

const cartStore = useCartStore()
</script>

<template>
  <div class="container">
    <h1 class="titleView">Films</h1>

    <ul class="cart" v-if="!loading || movies.length > 0">
      <li v-for="item in cartStore.cart" :key="item.movie.id" class="cart-item">
        <img :src="item.movie.poster_path" :alt="item.movie.title" width="80" />
      </li>
    </ul>


    <div v-if="!loading || movies.length > 0">
      <div class="movieCard-container">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
      <div class="showMore-btn-container">
        <Button @click="showMore" v-if="!loading && page <= moviesNb / 5">Voir plus</Button>
        <Loader message="🚀 De nouveaux films ! 🚀" v-if="loading" />
      </div>
    </div>
    <div class="loaderContainer" v-else>
      <Loader message="Nous récupérons les films !" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.movieCard-container {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
}

.loaderContainer {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.showMore-btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}

.cart {
  list-style: none;
  font-size: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  margin-bottom: 5rem;
}
</style>
