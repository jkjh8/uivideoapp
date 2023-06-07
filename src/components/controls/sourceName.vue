<script setup>
import { playerState } from 'src/composables/usePlayerState.js'

const getAudioChannels = (state) => {
  if (state && state.streams) {
    for (let i = 0; i < state.streams.length; i++) {
      if (state.streams[i].channels) {
        if (state.streams[i].channels == 2) {
          return 'Stereo'
        } else if (state.streams[i].channels == 6) {
          return '5.1'
        } else if (state.streams[i].channels == 8) {
          return '7.1'
        } else {
          return state.streams[i].channels
        }
      }
    }
  }
}
</script>

<template>
  <div class="row no-wrap justify-center items-center q-gutter-x-xs">
    <div class="name">
      {{ playerState.name ? playerState.name : 'Please load media file' }}
    </div>
    <div class="text-caption">{{ getAudioChannels(playerState) }}</div>
    <q-btn
      v-if="playerState.name"
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
