<script setup>
</script>

<template>
  <div class="button-trailer">
    <div class="icon-container">
      <img src="/play.svg">
    </div>
    <slot name="text"/>
  </div>
</template>

<style scoped lang="scss">
.button-trailer {
  display: flex;
  cursor: pointer;
  width: fit-content;
  align-items: center;
  justify-content: center;
}

.icon-container{
  width: 48px;
  height: 48px;
}
</style>
