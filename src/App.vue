<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/layouts/HeaderComponent.vue'
import Footer from '@/components/layouts/FooterComponent.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>
</style>
