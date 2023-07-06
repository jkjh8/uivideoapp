<script setup>
import { ref, onMounted } from 'vue'
import { currentPath } from 'src/composables/useFiles'
import PlaylistHeader from 'src/components/playlist/headerPlaylist'
import ListPlaylist from 'src/components/playlist/listPlaylist'
import ListSimplePlaylist from 'src/components/playlist/simpleListPlaylist'
import TooltipDelay from 'src/components/tooltipDelay'
</script>

<template>
  <div class="q-pa-md">
    <q-card class="bg-grey-1" flat>
      <q-card-section class="q-pb-none q-mb-none">
        <PlaylistHeader />
      </q-card-section>
      <q-card-section class="q-pt-xs q-mt-none">
        <ListPlaylist class="gt-xs" />
        <ListSimplePlaylist class="lt-sm" />
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
