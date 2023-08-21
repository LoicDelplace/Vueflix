<script setup>
import AboutCard from '@/components/CardComponent.vue';

const team = [
    {
        id: 1,
        nickname: 'Gevail',
        avatar: 'https://i.pravatar.cc/150?u=gevail',
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti ipsum odio, sed aut ipsam provident blanditiis, molestias veritatis impedit aperiam expedita tempora?",
        age: 23,
        gender: 'M',
        country: 'FR'
    },
    {
        id: 2,
        nickname: 'Celine',
        avatar: 'https://i.pravatar.cc/150?u=celine',
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti ipsum odio, sed aut ipsam provident blanditiis, molestias veritatis impedit aperiam expedita tempora?",
        age: 34,
        gender: 'M',
        country: 'FR'
    },
    {
        id: 3,
        nickname: 'Natouche',
        avatar: 'https://i.pravatar.cc/150?u=nath',
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti ipsum odio, sed aut ipsam provident blanditiis, molestias veritatis impedit aperiam expedita tempora?",
        age: 26,
        gender: 'M',
        country: 'BE'
    }
]
</script>

<template>
    <h1 class="titleView">A propos</h1>
    <div class="card-grid">
        <AboutCard v-for="user in team" :key="user.id" :user="user"/>
    </div>

</template>

<style scoped lang="scss">

.titleView {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color : #2c3e50;
    margin: 1em;
}

.card-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 100%;
}

</style>
