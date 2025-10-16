<script setup>
import { ref } from 'vue'
import SparkTable from '@/components/sparkTable.vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Sparks',
  },
  tableOne: {
    type: Array,
    required: true,
  },
  tableTwo: {
    type: Array,
    required: true,
  },
  startingCount: {
    type: Number,
    default: 6,
  },
})
const startingMin = props.startingCount ?? 1
const boroughSparkCount = ref(startingMin)
</script>

<template>
  <article>
    <header>
      <h3>{{ label }}</h3>
      <div>
        <label for="spark-count">Count: </label>
        <input id="spark-count" type="number" min="1" max="30" v-model.number="boroughSparkCount" />
      </div>
    </header>
    <section>
      <SparkTable
        v-for="spark in boroughSparkCount"
        :key="spark"
        :tableOne="props.tableOne"
        :tableTwo="props.tableTwo"
        :hasButton="false"
      />
    </section>
  </article>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  font-size: var(--font--larger);
  gap: 1em;
  margin-block-end: 1em;
}
h3 {
  margin-block: 0;
  font-size: inherit;
}
input {
  font-size: inherit;
}
section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}
</style>
