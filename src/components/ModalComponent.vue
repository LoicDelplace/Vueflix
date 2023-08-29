<script setup>
import Button from '@/components/buttons/ButtonComponent.vue'

defineProps({
  show: Boolean,
  movie: Object
})

const emit = defineEmits(['close'])
console.log()
</script>

<template>
  <transition name="modal">
    <div v-if="show" class="modal-mask" >
      <div class="modal-wrapper" @click.self="emit('close')">
        <div class="modal-container" >
          <div class="modal-header">
            <slot name="header">
              <h2>{{ movie.title }}</h2>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <iframe class="iframe"
                width="100%"
                height="500"
                :src="`https://www.youtube.com/embed/${movie.youtube}?si=acvU5JF_0LYORB2c`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <Button @click="emit('close')"> OK </Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  max-width: 80rem;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display:flex;
  justify-content: end;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-to {
  transition: 0.8s;
  opacity: 1;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
