<template>
  <header>
    <div class="wrapper">
      <div class="logoText">Vue<span>Flix</span></div>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/movies">Films</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
      </nav>
      <div class="account-connected" v-if="!userStore.isConnected">
        <input type="button" value="Connexion" @click="userStore.connection" />
      </div>
      <div class="account-not-connected" v-if="userStore.isConnected">
        <div class="accountInfo">
          <p>{{ userStore.nickname }}</p>
          <img :src="userStore.avatar" alt="avatar" class="profileAvatar" />
          <input type="button" value="Deconnexion" v-if="userStore.isConnected" @click="userStore.connection">
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  padding: 0 1rem;
  background-color: #2c3e50;
  color: white;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    margin: 0 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .accountInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
    .profileAvatar {
      border-radius: 50%;
      object-fit: cover;
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>
