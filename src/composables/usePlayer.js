import { api } from 'src/boot/axios'

const play = async () => {
  const r = await api.get('/player/play')
}

export { play }
