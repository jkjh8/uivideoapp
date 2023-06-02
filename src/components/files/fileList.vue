<script setup>
import { ref, onBeforeMount } from 'vue'
import { api } from 'src/boot/axios'
import { currentPathFiles, getFiles } from 'src/composables/useFiles'

onBeforeMount(async () => {
  getFiles()
})
</script>

<template>
  {{ currentPathFiles }}
</template>

<style scoped></style>
