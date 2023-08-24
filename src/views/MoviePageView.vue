<script setup>
import { ref } from 'vue';
import { getMovie } from '@/services/api';
import { useRoute } from 'vue-router';

const route = useRoute()
const movie = ref({})
getMovie(route.params.id).then(response => {
  movie.value = response
})


</script>

<template>
    <h1 class="titleView">{{ movie.title}}</h1>
</template>