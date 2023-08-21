<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const user = props.user
</script>

<template>
  <div class="card-container">
    <div class="card">
      <div class="card-info">
        <img :src="user.avatar" alt="user picture" />
        <h3>
          <img :src="'https://flagsapi.com/' + user.country + '/flat/32.png'"> {{ user.nickname }},
          {{ user.age }} ans
        </h3>
      </div>
      <div class="card-bio">
        <p>{{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: flex;
  width: 100%;
  height: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  .card {
    width: 30rem;
    height: 20rem;
    background-color: #2c3e50;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1.2rem;
    padding: 1rem;
    margin-bottom: 3rem;
    .card-info {
        h3 {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
  }
}
</style>
