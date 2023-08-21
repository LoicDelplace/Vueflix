<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>
@import url('https://fonts.bunny.net/css?family=poppins:100,100i,400,400i,600,600i,700,700i,900,900i');
* {
  font-family: "poppins", sans-serif;
}
</style>