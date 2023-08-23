<script setup>
import { getMovies } from '../services/api'
import { ref } from 'vue'
import MovieCard from '@/components/cards/MovieCardComponent.vue'

const movies = ref([])
getMovies().then((response) => {
  movies.value = response
})
</script>

<template>
  <h1 class="titleView">Films</h1>
  <div class="movieCard-container">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
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
</style>
