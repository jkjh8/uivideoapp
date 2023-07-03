<script setup>
import { ref } from 'vue'
import { socket } from 'src/boot/socketio'
import { playerTimes, msToMs, msToMsms } from 'src/composables/usePlayerState'

const currentTime = ref(0)

const panning = (value) => {
  socket.emit('ioCommands', { command: 'pan', value: value })
}

const updateTimefromSlide = (time) => {
  socket.emit('ioCommands', { command: 'seek', seekTime: time })
}
</script>

<template>
  <div class="row no-wrap items-center q-gutter-x-sm">
    <q-slider
      :model-value="playerTimes.currentTime"
      :min="0"
      :max="playerTimes.duration"
      :step="0.01"
      :label-value="msToMs(playerTimes.currentTime * 1000)"
      label
      @update:model-value="updateTimefromSlide"
      @pan="panning"
    />
    <div class="timeText">
      {{ msToMs(playerTimes.currentTime * 1000) }} /
      {{ msToMs(playerTimes.duration * 1000) }}
    </div>
  </div>
</template>

<style scoped>
.timeText {
  width: 68px;
  font-size: 10px;
}
</style>
