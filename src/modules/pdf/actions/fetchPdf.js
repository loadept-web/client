import { apiClient } from '../../../core/utils/apiClient'

export const fetchPdf = async ({ action, file, quality }) => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('quality', quality)


    const res = await apiClient.post(`/pdf/${action}`, formData, {
      responseType: 'arraybuffer',
    })

    return { fileCompressed: res.data }
  } catch (err) {
    console.error(err.response)
    return { file: null }
  }
}
