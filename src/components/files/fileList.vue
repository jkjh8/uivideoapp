<script setup>
import { ref, onBeforeMount } from 'vue'
import { format } from 'quasar'
import { api } from 'src/boot/axios'
import { currentPathFiles, getFiles } from 'src/composables/useFiles'
import { loadFile } from 'src/composables/usePlayer'

import TooltipDelay from 'src/components/tooltipDelay'

const { humanStorageSize } = format

const columns = [
  {
    name: 'name',
    label: 'NAME',
    field: 'name',
    align: 'center',
    sortable: true
  },
  {
    name: 'type',
    label: 'TYPE',
    field: 'ext',
    align: 'center',
    sortable: true
  },
  {
    name: 'size',
    label: 'SIZE',
    field: 'size',
    align: 'center',
    sortable: true
  },
  { name: 'actions', label: 'ACTIONS' }
]

onBeforeMount(async () => {
  getFiles()
})
</script>

<template>
  <!-- <div v-for="(file, idx) in currentPathFiles" :key="idx">
    {{ file }}
  </div> -->
  <q-table
    table-header-class="bg-grey-3"
    :rows="currentPathFiles"
    :columns="columns"
    :pagination="{ rowsPerPage: 0 }"
    hide-pagination
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
              <TooltipDelay msg="Load File" />
            </q-btn>
            <q-btn flat round color="primary" icon="play_arrow">
              <TooltipDelay msg="Play Direct" />
            </q-btn>
            <q-btn flat round icon="info" @click="console.log(props.row)" />
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<style scoped></style>
