<template>
  <div class="q-pa-md">
    <div v-if="loading" class="row justify-center q-col-gutter-md q-gutter-md">
      <div v-for="n in 4" :key="n" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <q-skeleton height="170px" square animation="fade" />
        <div class="row items-start no-wrap q-mt-sm">
          <q-skeleton size="56px" square animation="fade" />
          <div class="col q-pl-sm">
            <q-skeleton type="text" square width="30%" animation="fade" />
            <q-skeleton type="text" square height="12px" animation="fade" />
            <q-skeleton type="text" square height="12px" width="75%" animation="fade" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row justify-center q-col-gutter-md q-gutter-md">
      <div
        v-for="filme in filmes"
        :key="filme.id"
        style="max-width: 300px"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
      >
        <img
          :src="`https://image.tmdb.org/t/p/original${filme.poster_path}`"
          alt="Filme"
          style="width: 100%; height: auto; border-radius: 8px"
        />
        <div class="text-h6 q-mt-sm">{{ filme.title }}</div>
        <div class="text-caption">{{ filme.release_date }}</div>
        <q-badge rounded color="orange" :label="filme.vote_average" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { filme_store } from '../stores/movieStore'
import { onMounted } from 'vue'
const store = filme_store()

const { getFilmePopular, filmes, loading } = store

onMounted(async () => {
  await getFilmePopular()
  console.log(filmes)
})
</script>
