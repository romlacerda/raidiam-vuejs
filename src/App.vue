<script>
import BarChart from './components/BarChart';
import Select from './components/Select';
import { getParticipants } from './api/Openbanking';

export default {
  name: 'App',
  data() {
    return {
      selectedOrganisation: '',
      participants: [],
    }
  },
  components: {
    BarChart,
    Select,
  },
  async mounted() {
    this.participants = await getParticipants();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <Select :selectedOrganisation="selectedOrganisation.OrganisationId" :participants="participants" />
  <BarChart :data="[selectedOrganisation.LegalEntityName, selectedOrganisation.CountryOfRegistration]" />
</template>

