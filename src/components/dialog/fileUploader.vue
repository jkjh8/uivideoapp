<script setup>
import { useQuasar, useDialogPluginComponent } from 'quasar'
import { currentPath } from 'src/composables/useFiles'
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent()
const getUrl = () => {
  return `http://${window.location.hostname}:3000/api/files/upload`
}
</script>

<template>
  <q-dialog ref="dialogRef">
    <div>
      <q-uploader
        class="uploader"
        :url="getUrl"
        color="blue-grey-8"
        multiple
        :headers="[{ name: 'uploadPath', value: currentPath }]"
      >
        <template v-slot:header="scope">
          <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
            <q-btn
              v-if="scope.queuedFiles.length > 0"
              icon="clear_all"
              @click="scope.removeQueuedFiles"
              round
              dense
              flat
            >
              <q-tooltip>Clear All</q-tooltip>
            </q-btn>
            <q-btn
              v-if="scope.uploadedFiles.length > 0"
              icon="done_all"
              @click="scope.removeUploadedFiles"
              round
              dense
              flat
            >
              <q-tooltip>Remove Uploaded Files</q-tooltip>
            </q-btn>
            <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
            <div class="col">
              <div class="q-uploader__title">Upload your files</div>
              <div class="q-uploader__subtitle">
                {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
              </div>
            </div>
            <q-btn
              v-if="scope.canAddFiles"
              type="a"
              icon="add_box"
              @click="scope.pickFiles"
              round
              dense
              flat
            >
              <q-uploader-add-trigger />
              <q-tooltip>Pick Files</q-tooltip>
            </q-btn>
            <q-btn
              v-if="scope.canUpload"
              icon="cloud_upload"
              @click="scope.upload"
              round
              dense
              flat
            >
              <q-tooltip>Upload Files</q-tooltip>
            </q-btn>

            <q-btn
              v-if="scope.isUploading"
              icon="clear"
              @click="scope.abort"
              round
              dense
              flat
            >
              <q-tooltip>Abort Upload</q-tooltip>
            </q-btn>
            <q-btn
              size="sm"
              round
              flat
              color="blue-grey-2"
              icon="close"
              @click="onDialogOK"
            >
              <q-tooltip>Close</q-tooltip>
            </q-btn>
          </div>
        </template>
      </q-uploader>
    </div>
  </q-dialog>
</template>

<style scoped>
.uploader {
  min-width: 400px;
  max-width: 600px;
}
</style>
