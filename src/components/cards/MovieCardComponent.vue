<script setup>
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')
defineProps(['movie'])
</script>

<template>
  <div class="movieCard">
    <div class="movieCard-top">
      <RouterLink :to="{name: 'movie', params: { id: movie.id }}" movie="movie">
        <img :src="movie.poster_path" :alt="movie.title" />
      </RouterLink>
      <div
        class="movieNote"
        :class="{
          green: movie.vote_average >= 7,
          yellow: movie.vote_average >= 5 && movie.vote_average < 7,
          red: movie.vote_average < 5
        }"
      >
        <p>{{ Math.floor(movie.vote_average * 10) + '%' }}</p>
      </div>
    </div>
    <div class="movieCard-bottom">
      <RouterLink :to="`/films/`">
        <p class="movieTitle">{{ movie.title }}</p>
      </RouterLink>
      <p class="moviesReleaseDate">{{ dayjs(movie.release_date).format('DD MMMM YYYY') }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.movieCard {
  position: relative;
  width: 13rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.5em;
  box-shadow: 0 1px 3px 0 #0000001a;
  margin-bottom: 1em;
  .movieCard-top {
    width: 100%;
    height: 30em;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      border-radius:0.5em 0.5em 0 0;
    }
    .movieNote {
      border-radius: 50%;
      border: 2px solid #000;
      width: 3rem;
      height: 3rem;
      display:flex;
      justify-content: center;
      align-items: center;
      background-color: #000;
      position: absolute;
      left: 0.5em;
      bottom: 0.5em;
      color: #fff;
      &.green {
        border-color: #22c55e;
      }

      &.yellow {
        border-color: #eab308;
      }

      &.red {
        border-color: #ef4444;
      }
    }
  }
  .movieCard-bottom {
    width: 95%;
    height: 10em;
    // background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 0.75rem;
    .movieTitle {
      width: 100%;
      font-weight: bold;
      font-size: 1rem;
      color: $secondary-color;
      margin: 0;
      letter-spacing: 0.1em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .moviesReleaseDate {
      font-size: 1em;
      color: $secondary-color;
      margin: 0;
      font-weight: bold;
      letter-spacing: 0.1em;
      opacity: 0.5;
    }
  }

  a {
    text-decoration: none;
    color: $secondary-color;
  }
}
</style>
