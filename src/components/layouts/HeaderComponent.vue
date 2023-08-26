<script setup>
import { useUserStore } from '@/stores/user'
import { useCartStore } from '@/stores/cart'
import { RouterLink } from 'vue-router'
import ButtonCart from '@/components/buttons/ButtonCartComponent.vue'


const userStore = useUserStore()
const cartStore = useCartStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logoText">
        <p>Vue<span class="orangeLogoTitle">Flix</span></p>
      </div>
      <nav>
        <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
        <RouterLink :to="{ name: 'movies' }">Films</RouterLink>
        <RouterLink :to="{ name: 'about' }">A propos</RouterLink>
      </nav>
      <div class="account">
        <div class="account-connected" v-if="!userStore.isConnected">
          <input type="button" value="Connexion" @click="userStore.connection" />
        </div>
        <div class="account-not-connected" v-if="userStore.isConnected">
          <div class="accountInfo">
            <p>{{ userStore.nickname }}</p>
            <img :src="userStore.avatar" alt="avatar" class="profileAvatar" />
            <input
              type="button"
              value="Deconnexion"
              v-if="userStore.isConnected"
              @click="userStore.connection"
            />
          </div>
          <span v-if="cartStore.total > 0">
            <RouterLink :to="{ name: 'cart'}" :cart="{cartStore}">
              <ButtonCart class="ButtonCart">Panier: {{ cartStore.total }}</ButtonCart>
            </RouterLink>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $secondary-color;
  .wrapper {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem 0.75rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3em;
    color: white;
    .logoText {
      width: 100%;
      float: left;
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      .orangeLogoTitle {
        color: $primary-color;
      }
    }
    nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 1rem;
        margin: 0 1rem;
        &:hover {
          color: $primary-color;
          transition: 0.2s;
          text-decoration: underline;
        }
      }
    }
    .account {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;
      .accountInfo {
        width: 100%;
        height: 100%;
        float: right;
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 100%;
        input {
          cursor: pointer;
          background-color: $primary-color;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: none;
          font-weight: bold;
          &:hover {
            background-color: #d35400;
          }
        }
      }

      .account-connected {
        display: flex;
        align-items: center;
        gap: 1rem;
        input {
          border: none;
          outline: none;
          cursor: pointer;
          background-color: $primary-color;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: bold;
          &:hover {
            background-color: #d35400;
          }
        }
      }
      .account-not-connected {
        display: flex;
        align-items: center;
        gap: 1rem;
        p {
          font-weight: bold;
          font-size: 1rem;
          color: white;
          margin: 0;
          &:hover {
            color: $primary-color;
            transition: 0.2s;
          }
        }
        img {
          border-radius: 50%;
          object-fit: cover;
          width: 3rem;
          height: 3rem;
          cursor: pointer;
          &:hover {
            border: 2px solid $primary-color;
            border-radius: 50%;
            padding: 0.2rem;
            width: 3.2rem;
            height: 3.2rem;
            object-fit: cover;
            cursor: pointer;
            transition: 0.2s;
          }
        }
      }
    }
  }
}

.ButtonCart {
  font-size: 0.5em;
  display: flex;
  border-radius: 0.5em;
  &:focus {
    border-radius: 0.5em;
  }
}
</style>
