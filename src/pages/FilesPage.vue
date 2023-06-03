<script setup>
import { ref, onMounted } from 'vue'
import { currentPath } from 'src/composables/useFiles'
import FileList from 'src/components/files/fileList'
import TooltipDelay from 'src/components/tooltipDelay'
</script>

<template>
  <div class="q-pa-md">
    <q-card class="bg-grey-1" flat>
      <q-card-section>
        <div class="row items-center q-gutter-x-md">
          <div>
            <q-icon color="yellow" size="md" name="folder"
              ><TooltipDelay msg="Files"
            /></q-icon>
          </div>
          <div class="name">{{ currentPath }}</div>
        </div>
      </q-card-section>
      <q-card-section>
        <FileList />
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
