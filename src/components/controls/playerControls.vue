<script setup>
import { socket } from 'src/boot/socketio'
import TimeSlider from 'src/components/controls/timeSlider'
import { playerState } from 'src/composables/usePlayerState'
import { play, pause, stop } from 'src/composables/usePlayer'
</script>

<template>
  <div class="q-pb-md">
    <div class="q-px-md">
      <TimeSlider />
    </div>
    <div class="row no-wrap justify-center items-center q-gutter-x-xs">
      <div class="name">
        {{ playerState.name ? playerState.name : 'Please load media file' }}
      </div>
      <q-btn
        v-if="playerState.name"
        flat
        round
        icon="info"
        color="primary"
        @click="console.log(playerState)"
      ></q-btn>
    </div>
    <div class="row no-wrap justify-center">
      <!-- player btns -->
      <div>
        <q-btn
          v-if="playerState.status !== 'play'"
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
      <q-btn flat round icon="stop" color="red-10" @click="stop" />
    </div>
  </div>
</template>

<style scoped></style>
