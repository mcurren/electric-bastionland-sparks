<script setup>
import { reactive, onMounted } from 'vue'
import { rollTable } from '../helpers/utils.js'
const props = defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  table: {
    type: Array,
    required: true,
  },
  hasButton: {
    type: Boolean,
    default: true,
  },
  autoPopulate: {
    type: Boolean,
    default: true,
  },
})
let name = reactive({
  value: false,
})
function rollName() {
  name.value = rollTable(props.table)
}
onMounted(() => {
  if (props.autoPopulate) {
    rollName()
  }
})
</script>
<template>
  <article class="spark-table">
    <h3 v-if="label">{{ label }}</h3>
    <section v-if="name.value">
      <p>{{ name.value }}</p>
    </section>
    <footer v-if="hasButton">
      <button @click="rollName">Roll new Name</button>
    </footer>
  </article>
</template>
<style scoped>
article {
  background: #f3f3f3;
  padding: clamp(0.5rem, 2vw, 1rem);
  text-align: center;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
h3 {
  font-size: var(--font--large);
  margin-block: 0;
}
p {
  font-weight: 500;
  margin: 0;
}
button {
  margin-inline-start: 1rem;
}
</style>
