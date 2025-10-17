<script setup>
import ThemeTable from '@/components/ThemeTable.vue'
import SparkTable from '@/components/SparkTable.vue'
import SparkList from '@/components/SparkList.vue'

import { undergroundThemes } from '@/data/themesUnderground'
import { undergroundSparks } from '@/data/sparksUnderground'
import { undergroundHazardSparks } from '@/data/sparksUndergroundHazards'
import { tunnelAestheticSparks } from '@/data/sparksUndergroundTunnelAesthetic'
</script>

<template>
  <section class="spark-panel">
    <h2 class="spark-panel__title">Bastion Underground</h2>
    <div class="spark-panel__grid">
      <div class="spark-panel__grid__col">
        <ThemeTable label="Theme" :themes="undergroundThemes" />
        <SparkTable
          label="Tunnel Aesthetic"
          columnOneName="Obstacle"
          columnTwoName="Look"
          :tableOne="tunnelAestheticSparks[0]"
          :tableTwo="tunnelAestheticSparks[1]"
          :auto-populate="false"
        />
        <SparkTable
          label="Hazards in the Dark"
          columnOneName="Warning"
          columnTwoName="Danger"
          :tableOne="undergroundHazardSparks[0]"
          :tableTwo="undergroundHazardSparks[1]"
          :auto-populate="false"
        />
      </div>
      <div class="spark-panel__grid__col">
        <SparkList
          label="Sparks"
          :tableOne="undergroundSparks[0]"
          :tableTwo="undergroundSparks[1]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
