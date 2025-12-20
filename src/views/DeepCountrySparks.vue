<script setup>
import ThemeTable from '@/components/ThemeTable.vue'
import SparkTable from '@/components/SparkTable.vue'
import SparkList from '@/components/SparkList.vue'

import { deepCountryThemes } from '@/data/themesDeepCountry'
import { deepCountrySparks } from '@/data/sparksDeepCountry'
import { placesSparks } from '@/data/sparksDeepCountryPlaces'
import { flagsSparks } from '@/data/sparksDeepCountryFlags'
</script>

<template>
  <div class="spark-panel__grid">
    <div class="spark-panel__grid__col">
      <ThemeTable label="Theme" :themes="deepCountryThemes" />
      <SparkTable
        label="Places"
        columnOneName="Landmark"
        columnTwoName="Surroundings"
        :tableOne="placesSparks[0]"
        :tableTwo="placesSparks[1]"
      />
      <SparkTable
        label="Flags"
        columnOneName="Colours"
        columnTwoName="Detail"
        :tableOne="flagsSparks[0]"
        :tableTwo="flagsSparks[1]"
      />
    </div>
    <div class="spark-panel__grid__col">
      <SparkList label="Sparks" :tableOne="deepCountrySparks[0]" :tableTwo="deepCountrySparks[1]" />
    </div>
  </div>
</template>

<style scoped></style>
