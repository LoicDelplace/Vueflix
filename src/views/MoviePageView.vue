<script setup>
import { ref, computed } from 'vue'
import { getMovie } from '@/services/api'
import { useRoute } from 'vue-router'
import Note from '@/components/NoteComponent.vue'
import Modal from '@/components/ModalComponent.vue'
import TrailerButton from '@/components/buttons/ButtonTrailerComponent.vue'
import dayjs from 'dayjs'

const route = useRoute()
const movie = ref({})
const genre = ref({})
const color = ref([0, 0, 0])
const showModal = ref(false)

getMovie(route.params.id).then((response) => {
  movie.value = response
  genre.value = response.genre
})

// Convertie la date reçu via la promesse api en une date lisible via DayJS
const year = dayjs(movie.value.release_date).format('YYYY')

// Duration stocke la durée du film au format "XXhXX"
const duration = computed(() => {
  const hours = Math.floor(movie.value.runtime / 60)
  const minutes = movie.value.runtime % 60
  return `${hours}h${minutes < 10 ? 0 : ''}${minutes}`
})
</script>

<template>
  <div class="movie-header" :style="`background-image: url(${movie.backdrop_path})`">
    <div class="header-bg-overlay" :style="{ backgroundColor: `rgba(${color.join(', ')}, 0.75)` }">
      <div class="container">
        <div class="header-bg-content">
          <img :src="movie.poster_path" :alt="movie.title" class="movie-poster" />
          <div class="movie-content">
            <h1 class="content-title">
              {{ movie.title }} <span>({{ year }})</span>
            </h1>
            <div class="movie-infos">
              {{ dayjs(movie.release_date).format('DD/MM/YYYY') }} - {{ genre.name }} -
              {{ duration }}
            </div>
            <div class="movie-actions">
              <Note :note="movie.vote_average" />
              <TrailerButton @click="showModal = true">
                <template #text>Voir la bande annonce</template>
              </TrailerButton>
            </div>
            <div class="movie-description">
              <p class="movie-tagline">
                {{ movie.tagline }}
              </p>
              <h3>Synopsis</h3>
              <p class="overview">
                {{ movie.overview }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false"></Modal>
  </Teleport>
</template>

<style scoped lang="scss">
.movie-header {
  width: 100%;
  height: 61vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  .header-bg-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 40px 0;
    color: #fff;
    .header-bg-content {
      gap: 40px;
      display: flex;
    }
    .movie-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        margin: 0;
        span {
          font-weight: 300;
        }
      }
      .movie-infos {
        font-size: 1rem;
        font-weight: 300;
      }

      .movie-actions {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
      }
      .movie-description {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .movie-tagline {
          font-size: 1rem;
          font-style: italic;
        }
        .overview {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
    }
  }
  .movie-poster {
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    margin: 0;
  }
}

.container {
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 0.75rem;
}
</style>
