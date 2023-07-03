<script setup>
import { onMounted } from 'vue'
import { playerState } from 'src/composables/usePlayerState.js'

onMounted(() => {
  console.log('source name tag', playerState.value)
})

const getAudioChannels = (state) => {
  try {
    let streams = state.file.meta.streams
    if (streams) {
      for (let i = 0; i < streams.length; i++) {
        if (streams[i].channels) {
          if (streams[i].channels == 2) {
            return 'Stereo'
          } else if (streams[i].channels == 6) {
            return '5.1'
          } else if (streams[i].channels == 8) {
            return '7.1'
          } else {
            return streams[i].channels
          }
        }
      }
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="row no-wrap justify-center items-center q-gutter-x-xs">
    <div class="name">
      <div v-if="playerState.file && playerState.file.name">
        {{ playerState.file.name }}
      </div>
      <div v-else>Please load media file</div>
    </div>
    <div class="text-caption">{{ getAudioChannels(playerState) }}</div>
    <q-btn
      v-if="playerState.file && playerState.file.name"
      flat
      round
      icon="info"
      color="primary"
      size="sm"
      @click="console.log(playerState)"
    ></q-btn>
  </div>
</template>

<style scoped></style>
