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

export { currentPath, currentPathFiles, getFiles }
