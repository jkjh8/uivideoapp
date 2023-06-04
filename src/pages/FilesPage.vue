<script setup>
import { ref, onMounted } from 'vue'
import { currentPath } from 'src/composables/useFiles'
import FileHeader from 'src/components/files/headerFiles'
import FileList from 'src/components/files/listFiles'
import simpleFileList from 'src/components/files/simpleListFiles'
import TooltipDelay from 'src/components/tooltipDelay'
</script>

<template>
  <div class="q-pa-md">
    <q-card class="bg-grey-1" flat>
      <q-card-section class="q-pb-none q-mb-none">
        <FileHeader />
      </q-card-section>
      <q-card-section class="q-pt-xs q-mt-none">
        <FileList class="gt-xs" />
        <simpleFileList class="lt-sm" />
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
