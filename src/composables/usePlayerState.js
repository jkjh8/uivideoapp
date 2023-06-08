import { api } from './useAxios'
import { ref } from 'vue'
import { ms, m, s } from 'time-convert'

const playerState = ref({})
const playerTimes = ref({
  duration: 0,
  currentTime: 0,
  remaining: 0
})
const device = ref('')
const devices = ref([])

const getDevices = async () => {
  try {
    const r = await api.get('/fn/devices')
    console.log(r)
  } catch (error) {
    console.error(error)
  }
}

const getDevice = async () => {
  try {
    const r = await api.get('/fn/device')
    console.log(r)
  } catch (error) {
    console.error(error)
  }
}

const setDevice = async (deviceId) => {
  try {
    const r = await api.post('/fn/setDevice', { deviceId })
    console.log(r)
  } catch (error) {
    console.error(error)
  }
}

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

export {
  playerState,
  playerTimes,
  device,
  devices,
  getDevice,
  getDevices,
  setDevice,
  msToMs,
  msToMsms
}
