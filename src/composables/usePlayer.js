import { api } from 'src/boot/axios'

const play = async () => {
  try {
    const r = await api.get('/fn/play')
    console.log(r.data)
  } catch (error) {
    console.error(error)
  }
}

const pause = async () => {
  try {
    const r = await api.get('/fn/pause')
    console.log(r.data)
  } catch (error) {
    console.error(error)
  }
}

const stop = async () => {
  try {
    const r = await api.get('/fn/stop')
    console.log(r.data)
  } catch (error) {
    console.error(error)
  }
}

export { play, pause, stop }
