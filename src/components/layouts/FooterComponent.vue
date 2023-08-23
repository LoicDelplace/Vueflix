<script setup>
import { ref } from 'vue'
import { countMovies } from '@/services/api.js'

const moviesNb = ref(0)
const yearDate = new Date().getFullYear()

countMovies().then((length) => (moviesNb.value = length))
</script>

<template>
  <footer>
    Copyright © {{ yearDate }} - VueFlix - Catalogue de
    <span class="bold">&nbsp;{{ moviesNb }}&nbsp;</span> films.
  </footer>
</template>

<style scoped lang="scss">
footer {
  width: 100%;
  height: 5rem;
  display: flex;
  position:absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  background-color: $secondary-color;
  color: white;
  text-align: center;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bold {
    font-weight: bold;
  }
}
</style>
