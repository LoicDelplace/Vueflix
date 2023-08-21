<template>
    <footer>
        <p>Copyright {{ yearDate }} - VueFlix - Votre répertoire de <b>{{ moviesNb }}</b> films.</p>
    </footer>
</template>

<script setup>
const yearDate = new Date().getFullYear();
const moviesNb = 24592;
</script>