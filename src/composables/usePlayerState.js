import { ref } from 'vue'
import { ms, h, m, s } from 'time-convert'

const playerState = ref({})
const playerTimes = ref({
  duration: 0,
  currentTime: 0,
  remaining: 0
})

const msToMs = (time) => {
  return ms
    .to(
      m,
      s
    )(time)
    .map((n) => (n < 10 ? '0' + n : n.toString()))
    .join(':')
}

const msToMsms = (time) => {
  const times = ms.to(m, s, ms)(time)
  return `${times[0] < 10 ? '0' + times[0] : times[0]}:${
    times[1] < 10 ? '0' + times[1] : times[1]
  }.${times[2]}`
}

export { playerState, playerTimes, msToMs, msToMsms }
