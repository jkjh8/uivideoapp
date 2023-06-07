<script setup>
import { socket } from 'src/boot/socketio'
import TimeSlider from 'src/components/controls/timeSlider'
import { playerState } from 'src/composables/usePlayerState'
import SourceName from 'src/components/controls/sourceName'
import {
  play,
  pause,
  stop,
  rewind,
  fastforward
} from 'src/composables/usePlayer'
</script>

<template>
  <div class="q-pb-md">
    <div class="q-px-md">
      <TimeSlider />
    </div>
    <div class="row no-wrap justify-center items-center q-gutter-x-xs">
      <SourceName />
    </div>
    <div class="row no-wrap justify-center items-center">
      <!-- player btns -->
      <div>
        <q-btn flat round icon="skip_previous" color="primary" size="md" />
        <q-btn
          flat
          round
          icon="fast_rewind"
          color="primary"
          size="md"
          @click="rewind"
        />
      </div>
      <div>
        <q-btn
          v-if="playerState.status !== 'play'"
          flat
          round
          color="primary"
          icon="play_arrow"
          size="lg"
          @click="play()"
        />
        <q-btn
          v-else
          flat
          round
          color="yellow-6"
          icon="pause"
          size="lg"
          @click="pause()"
        />
      </div>
      <q-btn flat round icon="stop" color="red-10" size="lg" @click="stop" />
      <div>
        <q-btn
          flat
          round
          icon="fast_forward"
          color="primary"
          size="md"
          @click="fastforward"
        />
        <q-btn flat round icon="skip_next" color="primary" size="md" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
