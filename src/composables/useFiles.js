import { ref } from 'vue'
import { api } from 'src/boot/axios'

const currentPath = ref('')
const currentPathFiles = ref([])

const getFiles = async () => {
  currentPathFiles.value = await api.get('/files', {
    params: { path: encodeURI(currentPath.value) }
  })
}

export { currentPath, currentPathFiles, getFiles }
