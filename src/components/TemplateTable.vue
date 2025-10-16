<script setup>
import { reactive, computed, onMounted } from 'vue'
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
const template = reactive({
  title: false,
  description: false,
  details: [],
})
function rollTemplate() {
  const newTemplate = rollTable(props.templates)
  template.title = newTemplate.title
  template.description = newTemplate.description
  template.details = newTemplate.details
}
onMounted(() => {
  rollTemplate()
})
</script>
<template>
  <article class="template-table">
    <section v-if="template.title && template.description && template.details.length">
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
  font-size: var(--font--larger);
}
h4 {
  font-size: var(--font--large);
  margin-block: 1em 0.5em;
}
p {
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
}
ul {
  padding-inline-start: 1em;
  margin-block: 0.5em;
  line-height: 1.3;
  font-size: var(--font--large);
}
footer {
  margin-block-start: 1em;
}
</style>
