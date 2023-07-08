<script setup>
import { ref, onMounted, watch } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'src/composables/useAxios.js'
import { playerState } from 'src/composables/usePlayerState.js'

const showLogoVal = ref(false)

const $q = useQuasar()

const fnUpdateShowLogoVal = async () => {
  const r = await api.put('/setup/showlogo', {
    value: showLogoVal.value
  })
}
onMounted(async () => {
  showLogoVal.value = playerState.value.showlogo
})
</script>

<template>
  <div class="row no-wrap justify-between items-center">
    <div class="text-weight-bold">Show Logo</div>
    <div class="row items-center q-gutter-x-md">
      <q-toggle
        v-model="showLogoVal"
        @update:model-value="fnUpdateShowLogoVal"
      ></q-toggle>
    </div>
  </div>
</template>

<style scoped></style>
