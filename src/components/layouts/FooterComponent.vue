<script setup>
import { onBeforeMount, ref } from 'vue'
import { getMovies } from '@/services/api.js'

const moviesNb = ref(0)

onBeforeMount(() => {
  getMovies().then((response) => {
    moviesNb.value = response.length;
  })
})

const yearDate = new Date().getFullYear()
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
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
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
