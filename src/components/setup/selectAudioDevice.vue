<script setup>
import TooltipDelay from 'src/components/tooltipDelay'
</script>

<template>
  <div class="row no-wrap justify-between items-center">
    <div>Audio Device</div>
    <div>
      <q-btn flat round icon="list"><TooltipDelay msg="Select Device" /></q-btn>
    </div>
  </div>
</template>

<style scoped></style>
