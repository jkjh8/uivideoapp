<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { socket } from 'src/boot/socketio'
import { playerState, playerTimes } from 'src/composables/usePlayerState'

import HeaderMenu from 'src/components/layout/headerMenus.vue'
import HeaderMenuSmall from 'src/components/layout/headerMenuSmall'
// import UserStatus from "components/layout/headerUserStatus.vue";
import PlayerControls from 'components/controls/playerControls.vue'
const router = useRouter()

onBeforeMount(() => {
  socket.on('connect', () => {
    console.log(`connecting to socket.io id=${socket.id}`)
  })

  socket.on('playerstate', (args) => {
    playerState.value = { ...args }
  })
  socket.on('times', (args) => {
    playerTimes.value = { ...args }
  })
})
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header row justify-between items-center">
      <div class="row q-gutter-x-sm pointer" @click="router.push('/')">
        <q-icon name="svguse:icons.svg#logo" size="md" />
        <div class="header-font">Player Controls</div>
      </div>
      <!-- Menu Components -->
      <HeaderMenu class="gt-xs" />
      <HeaderMenuSmall class="lt-sm" />
      <!-- <UserStatus /> -->
    </q-header>

    <q-page-container>
      <div class="router-view">
        <router-view />
      </div>
    </q-page-container>

    <q-footer class="footer">
      <PlayerControls />
    </q-footer>
  </q-layout>
</template>

<style scoped>
.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
