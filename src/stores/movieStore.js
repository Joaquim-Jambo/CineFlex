import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { ref } from 'vue'

export const filme_store = defineStore('filmes', () => {
  const filmes = ref([])
  const loading = ref(true)

  const getFilmePopular = async () => {
    loading.value = true
    try {
      const res = await api.get('/movie/popular', {
        params: {
          api_key: process.env.API_KEY,
          language: 'pt-BR',
        },
      })
      filmes.value = res.data.results
    } catch (error) {
      console.log('Erro ao carregar os filmes ', error)
    } finally {
      loading.value = false
    }
  }
  return {
    getFilmePopular,
    filmes,
    loading,
  }
})
