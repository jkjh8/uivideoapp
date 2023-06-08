import { ref } from 'vue'
import { api } from './useAxios'
import deleteConfirmDialog from 'src/components/dialog/deleteDialog'

const currentPath = ref('')
const currentPathFiles = ref([])
const defaultPath = ref('')
const fullPath = ref('')

const fileColumns = [
  {
    name: 'name',
    label: 'NAME',
    field: 'name',
    align: 'center',
    sortable: true
  },
  {
    name: 'type',
    label: 'TYPE',
    field: 'ext',
    align: 'center',
    sortable: true
  },
  {
    name: 'size',
    label: 'SIZE',
    field: 'size',
    align: 'center',
    sortable: true
  },
  { name: 'actions', label: 'ACTIONS' }
]

const simpleFileColumns = [
  {
    name: 'name',
    label: 'NAME',
    field: 'name',
    align: 'center',
    sortable: true
  },
  { name: 'actions', label: 'ACTIONS' }
]

const getFiles = async () => {
  try {
    const r = await api.get('/files', {
      params: { path: encodeURI(currentPath.value) }
    })
    currentPathFiles.value = r.data.files
    defaultPath.value = r.data.defaultPath
    fullPath.value = r.data.currentPath
    currentPath.value = r.data.currentPath.replace(r.data.defaultPath, '')
  } catch (error) {
    console.error(error)
  }
}

const download = (file) => {
  api
    .get('/files/downloadFile', {
      params: { file },
      responseType: 'blob'
    })
    .then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', file.base)
      document.body.appendChild(link)
      link.click()
    })
    .catch((err) => {
      console.error(err)
    })
}

const deleteFile = async (args) => {
  try {
    const r = await api.get('/files/deleteFile', { params: { file: args } })
    console.log(r)
    await getFiles()
  } catch (error) {
    console.error(error)
  }
}
export {
  currentPath,
  currentPathFiles,
  fileColumns,
  simpleFileColumns,
  getFiles,
  download,
  deleteFile
}
