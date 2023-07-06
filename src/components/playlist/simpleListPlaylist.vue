<script setup>
import { ref, onBeforeMount } from 'vue'
import { format, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { playlist, simplePlaylistColumns } from 'src/composables/usePlaylist'
import { loadFile, directPlay } from 'src/composables/usePlayer'
import deleteConfirmDialog from 'src/components/dialog/deleteDialog'
import TooltipDelay from 'src/components/tooltipDelay'

const $q = useQuasar()
const { humanStorageSize } = format
const audioVideo = ['.mp4', 'mkv', 'webm', 'mp3', 'wav', 'flac', 'aac']

const confirmDelete = (args) => {
  $q.dialog({
    component: deleteConfirmDialog,
    componentProps: { file: args.base }
  }).onOk(() => {
    deleteFile(args)
  })
}
onBeforeMount(async () => {})
</script>

<template>
  <!-- <div v-for="(file, idx) in currentPathFiles" :key="idx">
    {{ file }}
  </div> -->
  <q-table
    table-header-class="bg-grey-3"
    :rows="playlist"
    :columns="simplePlaylistColumns"
    :pagination="{ rowsPerPage: 0 }"
    hide-pagination
    wrap-cells
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.name }}
        </q-td>
        <q-td key="type" :props="props">
          {{ props.row.ext }}
        </q-td>
        <q-td key="size" :props="props">
          {{ humanStorageSize(props.row.size) }}
        </q-td>
        <q-td key="actions" :props="props">
          <div class="q-gutter-x-sm">
            <q-btn
              flat
              round
              color="yellow-8"
              icon="folder_open"
              @click="loadFile(props.row)"
            >
              <TooltipDelay msg="Load" />
            </q-btn>
            <q-btn
              flat
              round
              color="primary"
              icon="play_arrow"
              @click="directPlay(props.row)"
            >
              <TooltipDelay msg="Play" />
            </q-btn>
            <!-- <q-btn flat round icon="info" @click="console.log(props.row)" /> -->
            <q-btn
              flat
              round
              color="secondary"
              icon="download"
              @click="download(props.row)"
            >
              <TooltipDelay msg="download" />
            </q-btn>

            <q-btn
              flat
              round
              color="red-10"
              icon="delete"
              @click="confirmDelete(props.row)"
            >
              <TooltipDelay msg="Delete" />
            </q-btn>
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<style scoped></style>
