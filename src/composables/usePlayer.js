import { api } from './useAxios'
import { playerState } from './usePlayerState'

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

const loadFile = async (args) => {
  try {
    const r = await api.get('/fn/loadfile', {
      params: { file: encodeURI(args.fullPath) }
    })
    console.log(r.data)
  } catch (error) {
    console.error(error)
  }
}

const directPlay = async (args) => {
  try {
    const r = await api.get('/fn/loadFile', {
      params: { file: encodeURI(args.fullPath) }
    })
    const interval = setInterval(() => {
      if (playerState.value.status === 'ready') {
        play()
        clearInterval(interval)
      }
    }, 100)
  } catch (error) {
    console.error(error)
  }
}

const fastforward = async (args) => {
  try {
    const r = await api.get('/fn/fastforward', {
      params: { time: 5 }
    })
    console.log(r)
  } catch (error) {
    console.error(error)
  }
}

const rewind = async (args) => {
  try {
    const r = await api.get('/fn/rewind', {
      params: { time: 5 }
    })
    console.log(r)
  } catch (error) {
    console.error(error)
  }
}

const setfullscreen = async (value) => {
  try {
    const r = await api.get('/fn/setfullscreen', {
      params: { fullscreen: value ? value : true }
    })
  } catch (error) {
    console.error(error)
  }
}

export {
  play,
  pause,
  stop,
  loadFile,
  directPlay,
  fastforward,
  rewind,
  setfullscreen
}
