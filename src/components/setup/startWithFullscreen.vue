<script setup>
import { ref, onBeforeMount } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'src/composables/useAxios.js'

const $q = useQuasar()
const fullscreenVal = ref(false)

const fnUpdateFullscreenVal = async () => {
  await api.put('/setup/startfullscreen', {
    startfullscreen: fullscreenVal.value
  })
}
onBeforeMount(async () => {
  const r = await api.get('/setup/startfullscreen')
  fullscreenVal.value = r.data.data.value
})
</script>

<template>
  <div class="row no-wrap justify-between items-center">
    <div class="text-weight-bold">Start With Fullscreen</div>
    <div class="row items-center q-gutter-x-md">
      <q-toggle
        v-model="fullscreenVal"
        @update:model-value="fnUpdateFullscreenVal"
      ></q-toggle>
    </div>
  </div>
</template>

<style scoped></style>
