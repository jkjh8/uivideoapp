<script setup>
import { socket } from 'src/boot/socketio'
import TimeSlider from 'src/components/controls/timeSlider'
import { playerState } from 'src/composables/usePlayerState'
import { play } from 'src/composables/usePlayer'

// const play = () => {
//   socket.emit('playcommand', { command: 'play' })
// }
// const pause = () => {
//   socket.emit('playcommand', { command: 'pause' })
// }
</script>

<template>
  <q-card flat square>
    <q-card-section class="q-my-none q-py-none">
      <TimeSlider />
    </q-card-section>
    <q-card-section class="row no-wrap justify-center">
      <div>{{ playerState.name }}</div>
    </q-card-section>
    <q-card-section class="row no-wrap justify-center">
      <div>
        <q-btn
          v-if="playerState.play !== 1"
          flat
          round
          color="primary"
          icon="play_arrow"
          @click="play()"
        />
        <q-btn
          v-else
          flat
          round
          color="yellow-6"
          icon="pause"
          @click="pause()"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped></style>
