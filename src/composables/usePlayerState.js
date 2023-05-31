import { ref } from 'vue'

const playerState = ref({})
const playerTimes = ref({
  duration: 0,
  currentTime: 0,
  remaining: 0
})

export { playerState, playerTimes }
