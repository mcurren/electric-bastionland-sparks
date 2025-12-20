<script setup>
import { ref } from 'vue'
import { rollTable } from '@/helpers/utils.js'
import SparkTable from '@/components/SparkTable.vue'
import TemplateTable from '@/components/TemplateTable.vue'
import NameTable from '@/components/NameTable.vue'

import { bastiardPeopleSparks, bastiardPeopleTemplates } from '@/data/bastiardsPeople'
import { bastiardMockeriesSparks, bastiardMockeriesTemplates } from '@/data/bastiardsMockeries'
import { bastiardMachinesSparks, bastiardMachinesTemplates } from '@/data/bastiardsMachines'
import { bastiardAliensSparks, bastiardAliensTemplates } from '@/data/bastiardsAliens'
import {
  bastiardMonstrositiesSparks,
  bastiardMonstrositiesTemplates,
} from '@/data/bastiardsMonstrosities'
import { bastiardNames } from '@/data/bastiardsNames'

const titles = ['Bastionite', 'Bastionese', 'Bastiard', 'Bastionian', 'Bastionborn']
let title = ref('Bastiard')
let type = ref('people')
function setType(newType) {
  type.value = newType
  title.value = rollTable(titles)
}
</script>

<template>
  <section class="spark-panel">
    <h2 class="spark-panel__title">
      <span>{{ title }}</span> <span>{{ type }}</span>
    </h2>
    <nav>
      <button @click="setType('people')" :class="{ active: type === 'people' }" role="button">
        People
      </button>
      <button @click="setType('mockeries')" :class="{ active: type === 'mockeries' }" role="button">
        Mockeries
      </button>
      <button @click="setType('machines')" :class="{ active: type === 'machines' }" role="button">
        Machines
      </button>
      <button @click="setType('aliens')" :class="{ active: type === 'aliens' }" role="button">
        Aliens
      </button>
      <button
        @click="setType('monstrosities')"
        :class="{ active: type === 'monstrosities' }"
        role="button"
      >
        Monstrosities
      </button>
    </nav>
    <div class="spark-panel__grid" v-if="type === 'people'">
      <div class="spark-panel__grid__col">
        <NameTable label="Name: " :table="bastiardNames" :has-button="true" />
        <SparkTable
          label="Traits"
          columnOneName="Manner"
          columnTwoName="Drive"
          :tableOne="bastiardPeopleSparks[0]"
          :tableTwo="bastiardPeopleSparks[1]"
        />
      </div>
      <div class="spark-panel__grid__col">
        <TemplateTable label="People Template" :templates="bastiardPeopleTemplates" />
      </div>
    </div>
    <div class="spark-panel__grid" v-if="type === 'mockeries'">
      <div class="spark-panel__grid__col">
        <NameTable label="Name: " :table="bastiardNames" :has-button="true" />
        <SparkTable
          label="Traits"
          columnOneName="Type"
          columnTwoName="Talent"
          :tableOne="bastiardMockeriesSparks[0]"
          :tableTwo="bastiardMockeriesSparks[1]"
        />
      </div>
      <div class="spark-panel__grid__col">
        <TemplateTable label="Mockery Template" :templates="bastiardMockeriesTemplates" />
      </div>
    </div>
    <div class="spark-panel__grid" v-if="type === 'machines'">
      <div class="spark-panel__grid__col">
        <NameTable label="Name: " :table="bastiardNames" :has-button="true" />
        <SparkTable
          label="Traits"
          columnOneName="Visual Prompt"
          columnTwoName="Character"
          :tableOne="bastiardMachinesSparks[0]"
          :tableTwo="bastiardMachinesSparks[1]"
        />
      </div>
      <div class="spark-panel__grid__col">
        <TemplateTable label="Machine Template" :templates="bastiardMachinesTemplates" />
      </div>
    </div>
    <div class="spark-panel__grid" v-if="type === 'aliens'">
      <div class="spark-panel__grid__col">
        <NameTable label="Name: " :table="bastiardNames" :has-button="true" />
        <SparkTable
          label="Traits"
          columnOneName="Prefix"
          columnTwoName="Suffix"
          :tableOne="bastiardAliensSparks[0]"
          :tableTwo="bastiardAliensSparks[1]"
        />
      </div>
      <div class="spark-panel__grid__col">
        <TemplateTable label="Alien Template" :templates="bastiardAliensTemplates" />
      </div>
    </div>
    <div class="spark-panel__grid" v-if="type === 'monstrosities'">
      <div class="spark-panel__grid__col">
        <NameTable label="Name: " :table="bastiardNames" :has-button="true" />
        <SparkTable
          label="Traits"
          columnOneName="Origin"
          columnTwoName="Modifier"
          :tableOne="bastiardMonstrositiesSparks[0]"
          :tableTwo="bastiardMonstrositiesSparks[1]"
        />
        <SparkTable
          columnOneName="Theme"
          columnTwoName="Danger"
          :tableOne="bastiardMonstrositiesSparks[2]"
          :tableTwo="bastiardMonstrositiesSparks[3]"
        />
      </div>
      <div class="spark-panel__grid__col">
        <TemplateTable label="Monstrosity Template" :templates="bastiardMonstrositiesTemplates" />
      </div>
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
h2 span {
  text-transform: capitalize;
}
h3 {
  margin: 0.5em 0 0;
  text-align: center;
}
</style>
