<script setup>
import { ref, onBeforeMount } from 'vue'
import { useQuasar } from 'quasar'
import {
  devices,
  device,
  getDevices,
  getDevice,
  setDevice
} from 'src/composables/usePlayerState.js'
import TooltipDelay from 'src/components/tooltipDelay'
import SelectDevice from 'src/components/dialog/devicesDialog'
const $q = useQuasar()
const deviceLabel = ref('')

const getDeviceLabel = (device) => {
  for (let i = 0; i < devices.value.length; i++) {
    if (devices.value[i].deviceId == device) {
      console.log(devices.value[i].deviceId)
      deviceLabel.value = devices.value[i].label
      break
    }
  }
  return deviceLabel.value
}

const openDevicesDialog = () => {
  $q.dialog({
    component: SelectDevice
  }).onOk(async (deviceId) => {
    await setDevice(deviceId)
    await getDevices()
    getDevice()
  })
}

onBeforeMount(async () => {
  await getDevices()
  await getDevice()
})
</script>

<template>
  <div class="row no-wrap justify-between items-center">
    <div class="text-weight-bold">Audio Device</div>
    <div class="row items-center q-gutter-x-md">
      <div>{{ getDeviceLabel(device) }}</div>
      <q-btn flat round icon="list" @click="openDevicesDialog">
        <TooltipDelay msg="Select Device" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped></style>
