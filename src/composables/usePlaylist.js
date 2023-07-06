import { ref } from 'vue'
import { api } from './useAxios'
import { playerState } from './usePlayerState'

const playlist = ref([])

const playlistColumns = [
  {
    name: 'num',
    label: 'NO',
    field: 'num',
    align: 'center',
    sortable: true
  },
  {
    name: 'name',
    label: 'NAME',
    field: 'name',
    align: 'center',
    sortable: true
  },
  {
    name: 'exists',
    label: 'Exists',
    field: 'exists',
    align: 'center'
  },
  {
    name: 'actions',
    label: 'Actions',
    align: 'center',
    sortable: true
  }
]

const simplePlaylistColumns = [
  {
    name: 'num',
    label: 'NO',
    field: 'num',
    align: 'center',
    sortable: true
  },
  {
    name: 'name',
    label: 'NAME',
    field: 'name',
    align: 'center',
    sortable: true
  }
]

export { playlist, playlistColumns, simplePlaylistColumns }
