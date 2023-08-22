<script setup>
import Button from '@/components/ButtonComponent.vue'

const props = defineProps(['user', 'open'])
const emit = defineEmits(['opened'])

const toggleBio = () => {
  emit('opened', props.user)
}
</script>

<template>
  <div class="card-container">
    <div class="card">
      <div class="card-info">
        <img :src="user.avatar" alt="user picture" class="avatarImg" />
        <div class="card-text-container">
          <h3>
            <img
              :src="'https://flagsapi.com/' + user.country + '/flat/32.png'"
              :alt="'flag' + user.country"
            />
            <div class="card-info-text">
              <div class="nickname-age-container">
                <span class="nickname">{{ user.nickname }},</span>
                <span class="age">{{ user.age }} </span>
              </div>
            </div>
          </h3>
          <h4 class="job">{{ user.job }}</h4>
        </div>
      </div>
      <div class="card-bio">
        <Button @click="toggleBio" v-if="!open">Voir la biographie</Button>
        <p v-if="open">{{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: flex;
  width: 100%;
  height: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  .card {
    width: 20rem;
    height: 20rem;
    background-color: #2c3e50;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1.2rem;
    padding: 1rem;
    margin-bottom: 2rem;
    .card-info {
      display: flex;
      align-items: center;
      .avatarImg {
        float: left;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 1rem;
      }
      h3 {
        display: flex;
        align-items: center;
      }
      .card-info-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }
      .job {
        font-weight: bold;
        font-size: 1.2rem;
        color: #e67e22;
      }
    }

    .card-bio {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-size: 1.2rem;
        max-width: max-content;
        width: 100%;
        height: 100%;
        overflow: auto;
        text-align: justify;
      }
    }
  }
}
</style>
