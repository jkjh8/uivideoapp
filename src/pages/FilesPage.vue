<script setup>
import { ref, onMounted } from 'vue'
import FileList from 'src/components/files/fileList'
</script>

<template>
  <div>Files</div>
  <div class="q-px-md">
    <q-card class="bg-grey-1" flat>
      <q-card-section> File Path </q-card-section>
      <q-card-section>
        <FileList />
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
