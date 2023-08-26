<script setup>
import Note from '@/components/NoteComponent.vue'
import ButtonCart from '@/components/buttons/ButtonCartComponent.vue'
import { useCartStore } from '@/stores/cart'
import slugify from 'slugify'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')
defineProps(['movie'])
const slugTitle = (title) => slugify(title, { lower: true })

const store = useCartStore()
</script>

<template>
  <div class="movieCard">
    <div class="movieCard-top">
      <RouterLink
        :to="{ name: 'movie', params: { id: movie.id, slug: slugTitle(movie.title) } }"
        movie="movie"
      >
        <img :src="movie.poster_path" :alt="movie.title" />
      </RouterLink>
      <Note :note="movie.vote_average" class="note" />
    </div>
    <div class="movieCard-bottom">
      <RouterLink :to="{ name: 'movie', params: { id: movie.id, slug: slugTitle(movie.title) } }">
        <p class="movieTitle">{{ movie.title }}</p>
      </RouterLink>
      <p class="moviesReleaseDate">{{ dayjs(movie.release_date).format('DD MMMM YYYY') }}</p>
      <div class="cart-add-btn">
        <ButtonCart class="ButtonCart" @click="store.add(movie)" v-if="!store.has(movie)"
          >Ajouter au panier</ButtonCart
        >
        <ButtonCart class="ButtonCart" @click="store.delete(movie)" v-if="store.has(movie)"
          >Retirer du panier</ButtonCart
        >
      </div>
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
      border-radius: 0.5em 0.5em 0 0;
    }
  }
  .movieCard-bottom {
    width: 100%;
    height: 10em;
    // background-color: aqua;
    padding-top: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .movieTitle {
      width: 100%;
      font-weight: bold;
      font-size: 1rem;
      color: $secondary-color;
      letter-spacing: 0.1em;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    .moviesReleaseDate {
      font-size: 1em;
      color: $secondary-color;
      margin: 0;
      font-weight: bold;
      letter-spacing: 0.1em;
      opacity: 0.5;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }

  a {
    text-decoration: none;
    color: $secondary-color;
  }
}

.note {
  position: absolute;
  bottom: 0.5em;
  left: 0.5em;
}

.cart-add-btn {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.ButtonCart {
  height: 3em;
  width: 100%;
}
</style>
