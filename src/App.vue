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
@import url(https://fonts.bunny.net/css?family=nunito:200,200i,500,500i,700,700i,900,900i);

* {
  font-family: "nunito", sans-serif;
}
</style>