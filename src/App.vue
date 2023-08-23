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
@import url(https://fonts.bunny.net/css?family=nunito:200,200i,500,500i,700,700i,900,900i);

.titleView {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 1em;
}

* {
  font-family: 'nunito', sans-serif;
}
body {
  min-height: 100vh;
  margin: 0;
  position: relative;
  background-color: #e5e7eb;
}
</style>
