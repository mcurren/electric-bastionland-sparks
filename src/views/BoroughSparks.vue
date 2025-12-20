<script setup>
import ThemeTable from '@/components/ThemeTable.vue'
import SparkTable from '@/components/SparkTable.vue'
import SparkList from '@/components/SparkList.vue'

import { boroughThemes } from '@/data/themesBorough'
import { boroughSparks } from '@/data/sparksBorough'
import { cocktailSparks } from '@/data/sparksBoroughCocktails'
import { parlourGamesSparks } from '@/data/sparksBoroughParlourGames'
</script>

<template>
  <div class="spark-panel__grid">
    <div class="spark-panel__grid__col">
      <ThemeTable label="Theme" :themes="boroughThemes" />
      <SparkTable
        label="Cocktails"
        columnOneName="Spirit"
        columnTwoName="Modifier"
        :tableOne="cocktailSparks[0]"
        :tableTwo="cocktailSparks[1]"
      />
      <SparkTable
        label="Parlour Games"
        :tableOne="parlourGamesSparks[0]"
        :tableTwo="parlourGamesSparks[1]"
      />
    </div>
    <div class="spark-panel__grid__col">
      <SparkList label="Sparks" :tableOne="boroughSparks[0]" :tableTwo="boroughSparks[1]" />
    </div>
  </div>
</template>

<style scoped></style>
