<script setup>
import { reactive, computed, onMounted } from 'vue'
import { rollTable } from '../helpers/utils.js'
const props = defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  themes: {
    type: Array,
    required: true,
  },
  hasButton: {
    type: Boolean,
    default: true,
  },
})
const theme = reactive({
  label: false,
  items: [],
})
const primary = computed(() => {
  return theme.label ?? false
})
const secondary = computed(() => {
  return rollTable(theme.items) ?? false
})
function rollTheme() {
  const newTheme = rollTable(props.themes)
  theme.label = newTheme.label
  theme.items = newTheme.items
}
onMounted(() => {
  rollTheme()
})
</script>
<template>
  <article class="theme-table">
    <h3 v-if="label">{{ label }}</h3>
    <p>
      <span>{{ primary }}:</span> <span>{{ secondary }}</span>
    </p>
    <footer v-if="hasButton">
      <button @click="rollTheme">Roll a new Theme</button>
    </footer>
  </article>
</template>
<style scoped>
article {
  min-width: 300px;
}
h3 {
  margin-block-start: 0;
}
p {
  font-weight: 500;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25em;
}
footer {
  margin-block-start: 1em;
}
</style>
