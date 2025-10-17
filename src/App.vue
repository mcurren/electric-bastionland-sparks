<script setup>
import BoroughSparks from '@/BoroughSparks.vue'
import UndergroundSparks from '@/UndergroundSparks.vue'
import BastiardSparks from '@/BastiardSparks.vue'
</script>

<template>
  <header>
    <h1>Electric Bastionland Sparks</h1>
  </header>
  <main>
    <BoroughSparks />
    <UndergroundSparks />
    <BastiardSparks />
  </main>
  <footer>
    <p>
      For
      <a
        href="https://bastionlandpress.com/products/electric-bastionland-hardback-book"
        target="_blank"
        title="Buy Electric Bastionland"
        rel="noopener noreferrer"
        >Electric Bastionland</a
      >
      RPG by
      <a
        href="https://www.bastionland.com/"
        target="_blank"
        title="Bastionland Blog"
        rel="noopener noreferrer"
        >Chris McDowall</a
      >.
    </p>
    <p>
      App built by
      <a
        href="https://curren.me/labs"
        target="_blank"
        rel="noopener noreferrer"
        title="&Curren Labs"
        >michaelopolis</a
      >.
    </p>
  </footer>
</template>

<style scoped>
h1 {
  text-align: center;
}
footer {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-block-start: clamp(1rem, 4vw, 2.5rem);
}
footer p {
  margin: 0;
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
  --color--black: rgb(37 37 37);
  --color--almost-white: rgb(249 249 249);
}
html {
  font-size: 16px;
  background: var(--color--black);
  box-sizing: border-box;
  padding: 1rem;
  & * {
    box-sizing: inherit;
  }
}
body {
  font-family: var(--system-ui);
  color: var(--color--black);
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
  border-bottom: 2px solid var(--color--black);
  padding: 0.3625em 0.25em;
  cursor: pointer;
  font-size: var(--font--small);
  font-family: inherit;
  line-height: 1;
  text-transform: lowercase;
  transition: all 0.3s;
  &:hover,
  &.active {
    background: var(--color--black);
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
  color: var(--color--black);
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
a {
  color: var(--color--black);
  transition: color 0.3s;
  &:hover {
    color: rgb(209 55 44);
  }
}
.spark-panel {
  border: 3px solid var(--color--black);
  border-radius: 2rem;
  background: var(--color--black);
  overflow: hidden;
  /* max-width: 45rem; */
  container-type: inline-size;
}
.spark-panel__title {
  padding: clamp(0.5rem, 2vw, 1.5rem);
  background: var(--color--black);
  color: white;
  margin-block: 0;
  text-align: center;
  letter-spacing: 0.065em;
  font-weight: 400;
}
.spark-panel__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  overflow: hidden;
  background: var(--color--almost-white);
  height: 100%;

  @container (width > 600px) {
    grid-template-columns: 1fr 1fr;
  }
}
.spark-panel__grid__col {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
}
</style>
