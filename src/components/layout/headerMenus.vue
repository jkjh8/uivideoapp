<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentPath = ref('/')

const updatePath = (path) => {
  currentPath.value = path
}
onMounted(() => {
  currentPath.value = router.currentRoute.value.path
})
</script>

<template>
  <div class="q-gutter-x-md" style="padding-top: 5px">
    <q-btn
      :class="currentPath === '/playlist' ? 'bg-grey-2' : ''"
      style="border-radius: 10px"
      flat
      to="/playlist"
      @click="updatePath('/playlist')"
    >
      <div>PLAYLIST</div>
    </q-btn>

    <q-btn
      :class="currentPath === '/files' ? 'bg-grey-2' : ''"
      style="border-radius: 10px"
      flat
      to="/files"
      @click="updatePath('/files')"
    >
      <div>FILES</div>
    </q-btn>

    <q-btn
      :class="currentPath === '/setup' ? 'bg-grey-2' : ''"
      style="border-radius: 10px"
      flat
      to="/setup"
      @click="updatePath('/setup')"
    >
      <div>SETUP</div>
    </q-btn>
  </div>
</template>

<style scoped></style>
