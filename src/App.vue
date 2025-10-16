<script setup>
import BoroughSparks from '@/BoroughSparks.vue'
import BastiardSparks from '@/BastiardSparks.vue'
</script>

<template>
  <h1>Electric Bastionland Sparks</h1>
  <main>
    <BoroughSparks />
    <BastiardSparks />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>

<style lang="scss">
/**
 * Global Styles
 */
:root {
  --system-ui:
    'Gill Sans', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  --font--xxlarge: min(max(2.5rem, 6vw), 60px);
  --font--xlarge: min(max(1.5rem, 5vw), 30px);
  --font--larger: min(max(1.3625rem, 4vw), 24px);
  --font--large: min(max(1.25rem, 3.5vw), 22px);
  --font--medium: min(max(1.125rem, 3vw), 20px);
  --font--small: min(max(1rem, 2.5vw), 18px);
  --font--xsmall: min(max(0.875rem, 2vw), 16px);
}
html {
  font-size: 16px;
  background: black;
  box-sizing: border-box;
  padding: 1rem;
  & * {
    box-sizing: inherit;
  }
}
body {
  font-family: var(--system-ui);
  color: #222;
  margin: 0;
  padding: clamp(1rem, 4vw, 2.5rem);
  background: white;
  border-radius: 5vw;
  min-height: calc(100vh - 4vw);
}
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(40rem, 100%), 1fr));
  gap: clamp(1rem, 4vw, 2rem);
  /* max-width: calc(90rem + 2rem); */
  margin-inline: auto;
}
button {
  background: none transparent;
  border: 0;
  border-bottom: 2px solid black;
  padding: 0.3625em 0.25em;
  cursor: pointer;
  font-size: var(--font--small);
  font-family: inherit;
  line-height: 1;
  text-transform: lowercase;
  transition: all 0.3s;
  &:hover,
  &.active {
    background: black;
    color: white;
  }
}
h1,
h2,
h3,
h4,
dt {
  font-variant: small-caps;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: black;
}
h1 {
  font-size: var(--font--xxlarge);
  margin-block: 0 1em;
}
h2 {
  font-size: var(--font--xlarge);
}
h3 {
  font-size: var(--font--larger);
}
h4 {
  font-size: var(--font--large);
}
p,
li {
  font-size: var(--font--medium);
  line-height: 1.3;
}
.spark-panel {
  border: 3px solid black;
  border-radius: 2rem;
  overflow: hidden;
  background: #f9f9f9;
  /* max-width: 45rem; */
  container-type: inline-size;
}
.spark-panel__title {
  padding: clamp(0.5rem, 2vw, 1.5rem);
  background: black;
  color: white;
  margin-block: 0 clamp(1rem, 3vw, 1.5rem);
  text-align: center;
  letter-spacing: 0.065em;
  font-weight: 400;
}
.spark-panel__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  margin: clamp(1rem, 3vw, 1.5rem);
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  overflow: hidden;
}
@container (width > 600px) {
  .spark-panel__grid {
    grid-template-columns: 1fr 1fr;
  }
}
.spark-panel__grid__col {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
}
</style>
