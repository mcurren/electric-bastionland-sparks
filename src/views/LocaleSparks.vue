<script setup>
import { ref } from 'vue'
import BoroughSparks from '@/views/BoroughSparks.vue'
import UndergroundSparks from '@/views/UndergroundSparks.vue'
import DeepCountrySparks from '@/views/DeepCountrySparks.vue'

let locale = ref('Bastion Borough')
function setLocale(newType) {
  locale.value = newType
}
</script>

<template>
  <section class="spark-panel">
    <h2 class="spark-panel__title">{{ locale }}</h2>
    <nav>
      <button
        @click="setLocale('Bastion Borough')"
        :class="{ active: locale === 'Bastion Borough' }"
      >
        Borough
      </button>
      <button
        @click="setLocale('Bastion Underground')"
        :class="{ active: locale === 'Bastion Underground' }"
      >
        Underground
      </button>
      <button @click="setLocale('Deep Country')" :class="{ active: locale === 'Deep Country' }">
        Deep Country
      </button>
    </nav>
    <div>
      <BoroughSparks v-if="locale === 'Bastion Borough'" />
      <UndergroundSparks v-if="locale === 'Bastion Underground'" />
      <DeepCountrySparks v-if="locale === 'Deep Country'" />
    </div>
  </section>
</template>

<style scoped>
nav {
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  justify-content: center;
  background: var(--color--almost-white);
  padding-block-start: clamp(1rem, 3vw, 1.5rem);
}
</style>
