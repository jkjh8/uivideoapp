import { ref } from 'vue'
import { api } from 'src/boot/axios'

const currentPath = ref('')
const currentPathFiles = ref([])
const defaultPath = ref('')
const fullPath = ref('')

const getFiles = async () => {
  const r = await api.get('/files', {
    params: { path: encodeURI(currentPath.value) }
  })
  currentPathFiles.value = r.data.files
  defaultPath.value = r.data.defaultPath
  fullPath.value = r.data.currentPath
  currentPath.value = r.data.currentPath.replace(r.data.defaultPath, '')
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

export { currentPath, currentPathFiles, getFiles, download }
