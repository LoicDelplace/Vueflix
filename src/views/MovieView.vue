<script setup>
import { getMovies } from '../services/api'
import { ref } from 'vue'
import MovieCard from '@/components/cards/MovieCardComponent.vue'
import Loader from '@/components/LoaderComponent.vue'
// import Button from '@/components/buttons/ButtonMoreComponent.vue';

const movies = ref([])
const loading = ref(true)
getMovies().then((response) => {
  setTimeout(() => {
    movies.value = response
    loading.value = false
  }, 1000)
})
</script>

<template>
  <div class="container" v-if="!loading">
    <h1 class="titleView">Films</h1>
    <div class="movieCard-container">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>

  <div class="loaderContainer" v-else>
    <Loader message="Nous récupérons les films !" />
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
</style>
