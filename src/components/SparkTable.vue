<script setup>
import { reactive, onMounted } from 'vue'
import { rollTable } from '../helpers/utils.js'
const props = defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  columnOneName: {
    type: [String, Boolean],
    default: false,
  },
  columnTwoName: {
    type: [String, Boolean],
    default: false,
  },
  tableOne: {
    type: Array,
    required: true,
  },
  tableTwo: {
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
const sparks = reactive({
  sparkOne: false,
  sparkTwo: false,
})
function rollSparks() {
  sparks.sparkOne = rollTable(props.tableOne)
  sparks.sparkTwo = rollTable(props.tableTwo)
}
onMounted(() => {
  if (props.autoPopulate) {
    rollSparks()
  }
})
</script>
<template>
  <article class="spark-table">
    <h3 v-if="label">{{ label }}</h3>
    <section v-if="sparks.sparkOne && sparks.sparkTwo">
      <dl>
        <dt v-if="columnOneName">{{ columnOneName }}</dt>
        <dd>{{ sparks.sparkOne }}</dd>
      </dl>
      <dl>
        <dt v-if="columnTwoName">{{ columnTwoName }}</dt>
        <dd>{{ sparks.sparkTwo }}</dd>
      </dl>
    </section>
    <footer v-if="hasButton">
      <button @click="rollSparks">Roll new Sparks</button>
    </footer>
  </article>
</template>
<style scoped>
article {
  background: #f3f3f3;
  padding: clamp(0.5rem, 2vw, 1rem);
  text-align: center;
}
h3,
section {
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
}
h3 {
  margin-block-start: 0;
}
dl {
  margin: 0;
}
dt {
  font-size: var(--font--small);
  margin-block-end: 0.5em;
}
dd {
  font-size: var(--font--medium);
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
}
footer {
  margin-block-start: 1rem;
}
</style>
