<script setup>
import { ref } from 'vue'
import AboutCard from '@/components/cards/CardComponent.vue'

const team = [
  {
    id: 1,
    nickname: 'Gevail',
    avatar: 'https://i.pravatar.cc/150?u=gevail',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti ipsum odio, sed aut ipsam provident blanditiis, molestias veritatis impedit aperiam expedita tempora?',
    age: 23,
    job: 'Développeur',
    gender: 'M',
    country: 'FR'
  },
  {
    id: 2,
    nickname: 'Celine',
    avatar: 'https://i.pravatar.cc/150?u=celine',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti ipsum odio, sed aut ipsam provident blanditiis, molestias veritatis impedit aperiam expedita tempora?',
    age: 34,
    gender: 'M',
    job: 'Graphiste',
    country: 'FR'
  },
  {
    id: 3,
    nickname: 'Natouche',
    avatar: 'https://i.pravatar.cc/150?u=nath',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti ipsum odio, sed aut ipsam provident blanditiis, molestias veritatis impedit aperiam expedita tempora?',
    age: 26,
    job: 'Commercial',
    gender: 'M',
    country: 'BE'
  }
]

const selected = ref(null)
</script>

<template>
  <h1 class="titleView">A propos</h1>
  <div class="card-grid">
    <AboutCard
      v-for="user in team"
      :key="user.id"
      :user="user"
      @opened="selected = user.id"
      :open="selected === user.id"
    />
    <!-- Ici, "@opened = selected = user.id" user.id peut être = à $event.id -->
  </div>
</template>

<style scoped lang="scss">


.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  margin-top: 1rem;
}
</style>
