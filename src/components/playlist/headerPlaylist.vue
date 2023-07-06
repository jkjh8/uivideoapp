<script setup>
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { getFiles, currentPathFiles } from 'src/composables/useFiles'
import TooltipDelay from 'src/components/tooltipDelay'

const $q = useQuasar()

// load file from local storage
onMounted(() => {
  getFiles()
  console.log(currentPathFiles.value)
})
</script>

<template>
  <div class="row justify-between q-px-sm">
    <!-- front -->
    <div class="row items-center q-gutter-x-md">
      <div>
        <q-icon color="primary" size="md" name="list"
          ><TooltipDelay msg="Files"
        /></q-icon>
      </div>
    </div>
    <!-- back -->
    <div>
      <q-btn flat round color="primary" icon="add_circle">
        <TooltipDelay msg="Add" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped></style>
