<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  width: 100%;
  height: 100%;
  border-radius: 0 0 0.5em 0.5em;
  border: none;
  font-weight: bold;
  font-size: 1em;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: $primary-color;
  transition: 0.2s;
  &:hover {
    background-color: #d35400;
    transition: 0.2s;
  }
  &:active {
    background-color: #c0392b;
    transition: 0.2s;
  }
  &:focus {
    outline: none;
    border: none;
    background-color: #c0392b;
    transition: 0.2s;
    box-shadow: 0 0 0 0.2rem #c0392b;
    border-radius: 0 0 0.5em 0.5em;
    padding: 0.5rem 1rem;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #c0392b;
    transition: 0.2s;
    box-shadow: 0 0 0 0.2rem #c0392b;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
}
</style>
