<script setup>
import { ref, onMounted } from 'vue'
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
let selectedRole = ref(false)

let selectedTemplate = ref(false)

function rollTemplate() {
  const newTemplate = rollTable(props.templates)
  selectedTemplate.value = newTemplate
  selectedRole.value = rollTable(roles)
}
function assignTemplate(newTemplate) {
  // console.log(newTemplate)
  selectedTemplate.value = newTemplate
}
function setRole(newRole) {
  selectedRole.value = newRole
}
onMounted(() => {
  rollTemplate()
})
</script>
<template>
  <article class="template-table">
    <section
      v-if="
        selectedTemplate.title && selectedTemplate.description && selectedTemplate.details.length
      "
    >
      <p class="eyebrow">
        <span
          v-for="item in roles"
          :class="{ selected: item === selectedRole }"
          v-bind:key="item"
          @click="setRole(item)"
          >{{ item }}</span
        >
      </p>
      <select
        name="selectTemplate"
        id="selectTemplate"
        tabindex="0"
        @change="assignTemplate(templates[$event.target.selectedIndex])"
      >
        <option
          value=""
          v-for="item in templates"
          :key="item.title"
          :selected="selectedTemplate.title === item.title"
        >
          {{ item.title }}
        </option>
      </select>
      <p class="template-table__description">{{ selectedTemplate.description }}</p>
      <ul class="template-table__details">
        <li v-for="item in selectedTemplate.details" :key="item.id">{{ item }}</li>
      </ul>
    </section>
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
  display: block;
}
p.eyebrow span:not(.selected) {
  opacity: 0.6;
}
ul {
  padding-inline-start: 1em;
  margin-block: 0.5em;
}
select {
  font-family: inherit;
  display: block;
  appearance: none;
  font-size: var(--font--larger);
  font-variant: small-caps;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--color--black);
  margin-block: 0 0.5em;
  background: none;
  border: 0;
  border-bottom: 1px solid var(--color--black);
  padding-inline-end: 1.5em;
  background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/></svg>');
  background-repeat: no-repeat;
  background-position: right 4px;
}
select:focus {
  outline: none;
}
footer {
  margin-block-start: 1em;
}
</style>
