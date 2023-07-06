<script setup>
import { onBeforeMount } from 'vue'
import { useQuasar } from 'quasar'
import { currentPath, getFiles } from 'src/composables/useFiles'

import TooltipDelay from 'src/components/tooltipDelay'
import FileUploader from 'src/components/dialog/fileUploader'

const $q = useQuasar()

const fileuploadDialog = () => {
  $q.dialog({
    component: FileUploader
  }).onOk(async () => {
    $q.loading.show()
    await getFiles()
    $q.loading.hide()
  })
}

onBeforeMount(() => {
  // load file from local storage
  getFiles()
})
</script>

<template>
  <div class="row justify-between q-px-sm">
    <!-- front -->
    <div class="row items-center q-gutter-x-md">
      <div>
        <q-icon color="yellow" size="md" name="folder"
          ><TooltipDelay msg="Files"
        /></q-icon>
      </div>
      <div class="name">{{ currentPath }}</div>
    </div>
    <!-- back -->
    <div>
      <q-btn flat round color="primary" icon="upload" @click="fileuploadDialog">
        <TooltipDelay msg="Upload Files" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped></style>
