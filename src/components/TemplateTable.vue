<script setup>
import { reactive, onMounted } from 'vue'
import { rollTable } from '../helpers/utils.js'
const props = defineProps({
  templates: {
    type: Array,
    required: true,
  },
  hasButton: {
    type: Boolean,
    default: true,
  },
})

const roles = ['Patron', 'Specialist', 'Mercenary']
const template = reactive({
  role: false,
  title: false,
  description: false,
  details: [],
})
function rollTemplate() {
  const newTemplate = rollTable(props.templates)
  template.title = newTemplate.title
  template.description = newTemplate.description
  template.details = newTemplate.details
  template.role = rollTable(roles)
}
onMounted(() => {
  rollTemplate()
})
</script>
<template>
  <article class="template-table">
    <section v-if="template.title && template.description && template.details.length">
      <p class="eyebrow">
        <span
          v-for="item in roles"
          :class="{ selected: item === template.role }"
          v-bind:key="item"
          @click="template.role = item"
          >{{ item }}</span
        >
      </p>
      <h3 class="template-table__title">{{ template.title }}</h3>
      <p class="template-table__description">{{ template.description }}</p>
      <ul class="template-table__details">
        <li v-for="item in template.details" :key="item.id">{{ item }}</li>
      </ul>
    </section>
    <footer v-if="hasButton">
      <button @click="rollTemplate">Roll a new Template</button>
    </footer>
  </article>
</template>
<style scoped>
article {
  min-width: 300px;
}
h3 {
  margin-block: 0 0.5em;
}
h4 {
  margin-block: 1em 0.5em;
}
p {
  font-weight: 500;
  margin: 0;
}
p.eyebrow {
  font-size: 1em;
  margin-block-end: 0.5em;
  display: flex;
  gap: 0.5em;
}
p.eyebrow span {
  cursor: pointer;
}
p.eyebrow span:not(.selected) {
  opacity: 0.6;
}
ul {
  padding-inline-start: 1em;
  margin-block: 0.5em;
}
footer {
  margin-block-start: 1em;
}
</style>
