<script setup>
import { playerTimes } from 'src/composables/usePlayerState'
</script>

<template>
  <div>
    <q-slider
      :model-value="playerTimes.currentTime"
      :min="0"
      :max="playerTimes.duration"
      label
    />
  </div>
</template>

<style scoped></style>
