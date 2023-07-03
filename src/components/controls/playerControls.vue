<script setup>
import { socket } from 'src/boot/socketio'
import TimeSlider from 'src/components/controls/timeSlider'
import { playerState, isFullscreen } from 'src/composables/usePlayerState'
import SourceName from 'src/components/controls/sourceName'
import {
  play,
  pause,
  stop,
  rewind,
  fastforward,
  setfullscreen
} from 'src/composables/usePlayer'
import TooltipDelay from 'src/components/tooltipDelay'

const chkPlayBtn = () => {
  if (playerState.value.status && playerState.value.status.status) {
    let v
    switch (playerState.value.status.status) {
      case 'play':
      case 'playing':
        v = true
        break
      default:
        v = false
        break
    }
    return v
  } else {
    return false
  }
}
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
          v-if="chkPlayBtn()"
          flat
          round
          color="yellow-6"
          icon="pause"
          size="lg"
          @click="pause()"
        />
        <q-btn
          v-else
          flat
          round
          color="primary"
          icon="play_arrow"
          size="lg"
          @click="play()"
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
      <div>
        <q-btn
          v-if="isFullscreen"
          round
          flat
          icon="fullscreen"
          @click="setfullscreen(true)"
        >
          <TooltipDelay msg="Leave Fullscreen" />
        </q-btn>
        <q-btn v-else round flat icon="fullscreen" @click="setfullscreen(true)">
          <TooltipDelay msg="Enter Fullscreen" />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
