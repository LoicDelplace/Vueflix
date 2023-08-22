<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  width: 15rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #e67e22;
  transition: 0.2s;
  &:hover {
    background-color: #d35400;
    transition: 0.2s;
  }
  &:active {
    background-color: #c0392b;
    transition: 0.2s;
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
    border: none;
    background-color: #c0392b;
    transition: 0.2s;
    transform: scale(0.9);
    box-shadow: 0 0 0 0.2rem #c0392b;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #c0392b;
    transition: 0.2s;
    transform: scale(0.9);
    box-shadow: 0 0 0 0.2rem #c0392b;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
}
</style>
