<template>
  <header>
    <div class="wrapper">
      <div class="logoText">
        <p>Vue<span class="orangeLogoTitle">Flix</span></p>
      </div>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/movies">Films</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
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
header {
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
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
        color: #e67e22;
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
          color: #e67e22;
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
          background-color: #e67e22;
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
          background-color: #e67e22;
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
            color: #e67e22;
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
            border: 2px solid #e67e22;
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
</style>
