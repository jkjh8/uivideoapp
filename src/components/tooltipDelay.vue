<script setup>
const props = defineProps({ msg: String })
</script>

<template>
  <q-tooltip
    class="tooltop-bg"
    anchor="top middle"
    self="bottom middle"
    :offset="[10, 10]"
    :delay="500"
    style="background: #aaaaaaaa"
  >
    {{ props.msg }}
  </q-tooltip>
</template>

<style scoped></style>
