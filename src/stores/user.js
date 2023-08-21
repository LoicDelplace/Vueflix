import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isConnected: false,
    nickname: ref("Gevail"),
    age: ref(23),
    avatar: ref('https://avatars.dicebear.com/v2/avataaars/901fa48940fe4a2b670f4b01588ebb93.svg')
  }),
  actions: {
    connection() {
      const wasConnected = this.isConnected;
      this.isConnected = !wasConnected

      if (!wasConnected.value) {
        console.log(`Bienvenue, ${this.nickname}! Tu étais deconnecté.`)
      } else {
        console.log(`Au revoir, ${this.nickname}!`)
      }
    },
  }
})
