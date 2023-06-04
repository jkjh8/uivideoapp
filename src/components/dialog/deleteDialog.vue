<script setup>
import { useQuasar, useDialogPluginComponent } from 'quasar'
const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent()

const props = defineProps({
  file: String
})
</script>

<template>
  <q-dialog ref="dialogRef">
    <q-card class="q-dialog-plugin" style="border-radius: 8px">
      <q-card-section class="row no-wrap items-center q-gutter-sm q-px-lg">
        <q-icon name="delete" color="red-10" size="sm" />
        <div style="font-size: 1.3rem">Confirm delete file</div>
      </q-card-section>
      <q-card-section class="row justify-center text-caption">
        {{ file }}
      </q-card-section>
      <q-card-actions class="q-pa-md" align="right">
        <q-btn
          style="width: 80px"
          label="취소"
          flat
          rounded
          @click="onDialogCancel"
        />
        <q-btn
          style="width: 80px"
          label="확인"
          color="blue-grey-4"
          unelevated
          rounded
          @click="onDialogOK"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.confirmDialog {
  border-radius: 0.5rem;
}
</style>
