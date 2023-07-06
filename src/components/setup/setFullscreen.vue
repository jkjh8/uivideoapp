<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'src/composables/useAxios.js'
import { playerState } from 'src/composables/usePlayerState.js'

const $q = useQuasar()
const fullscreenVal = ref(false)

const fnUpdateFullscreenVal = async () => {
  const r = await api.put('/setup/fullscreen', {
    value: fullscreenVal.value
  })
  console.log(r)
}
onMounted(async () => {
  fullscreenVal.value = playerState.value.fullscreen
})
</script>

<template>
  <div class="row no-wrap justify-between items-center">
    <div class="text-weight-bold">Show Logo</div>
    <div class="row items-center q-gutter-x-md">
      <q-toggle
        v-model="fullscreenVal"
        @update:model-value="fnUpdateFullscreenVal"
      ></q-toggle>
    </div>
  </div>
</template>

<style scoped></style>
