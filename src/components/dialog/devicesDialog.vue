<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar, useDialogPluginComponent } from 'quasar'
import { devices, device } from 'src/composables/usePlayerState.js'
const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent()

const selected = ref('')

onMounted(() => {
  selected.value = device.value
})
</script>

<template>
  <q-dialog ref="dialogRef">
    <q-card class="q-dialog-plugin" style="border-radius: 8px">
      <q-card-section class="row no-wrap items-center q-gutter-sm q-px-lg">
        <q-icon name="check_circle" color="primary" size="sm" />
        <div style="font-size: 1.3rem">Select Audio Output Device</div>
      </q-card-section>
      <q-card-section class="row justify-center text-caption">
        <q-select
          v-model="selected"
          class="selected"
          filled
          :options="devices"
          option-value="deviceId"
          :display-value="devices.find((d) => d.deviceId == selected).label"
          emit-value
        ></q-select>
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
          @click="onDialogOK(selected)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.confirmDialog {
  border-radius: 0.5rem;
}
.selected {
  min-width: 350px;
  max-width: 90%;
}
</style>
