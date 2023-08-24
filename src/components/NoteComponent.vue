<script setup>
import { computed } from 'vue'
const props = defineProps(['note'])

const pourcent = computed(() => {
  return `${Math.ceil(props.note * 10)}`
})
</script>

<template>
  <div
    class="movieNote"
    :class="{
      green: pourcent >= 70,
      yellow: pourcent >= 50 && pourcent < 70,
      red: pourcent < 50
    }"
  >
    <span>{{ pourcent }}%</span>
  </div>
</template>

<style scoped lang="scss">
.movieNote {
  border-radius: 50%;
  border: 2px solid #000;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  &.green {
    border-color: #22c55e;
  }

  &.yellow {
    border-color: #eab308;
  }

  &.red {
    border-color: #ef4444;
  }
}
</style>
