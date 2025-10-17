<script setup>
import SparkTable from '@/components/SparkTable.vue'
import ThemeTable from '@/components/ThemeTable.vue'
import SparkList from '@/components/SparkList.vue'

import { boroughThemes } from '@/data/themesBorough'
import { boroughSparks } from '@/data/sparksBorough'
import { cocktailSparks } from '@/data/sparksBoroughCocktails'
import { parlourGamesSparks } from '@/data/sparksBoroughParlourGames'
</script>

<template>
  <section class="spark-panel">
    <h2 class="spark-panel__title">Bastion Borough</h2>
    <div class="spark-panel__grid">
      <div class="spark-panel__grid__col">
        <ThemeTable label="Theme" :themes="boroughThemes" />
        <sparkTable
          label="Cocktails"
          :tableOne="cocktailSparks[0]"
          :tableTwo="cocktailSparks[1]"
          :auto-populate="false"
        />
        <sparkTable
          label="Parlour Games"
          :tableOne="parlourGamesSparks[0]"
          :tableTwo="parlourGamesSparks[1]"
          :auto-populate="false"
        />
      </div>
      <div class="spark-panel__grid__col">
        <SparkList label="Sparks" :tableOne="boroughSparks[0]" :tableTwo="boroughSparks[1]" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
