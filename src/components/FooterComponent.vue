<template>
    <footer>
        Copyright © {{ yearDate }} - VueFlix - Votre répertoire de <span class="bold">&nbsp;{{moviesNb}}&nbsp;</span> films.
    </footer>
</template>

<script setup>
const yearDate = new Date().getFullYear();
const moviesNb = "20";
</script>


<style lang="scss">
footer {
    width: 100%;
    height: 5rem;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    font-size: 1rem;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 1rem;
    p{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .bold {
        font-weight: bold;
    }
}
</style>