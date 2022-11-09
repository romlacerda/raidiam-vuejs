
<script>
export default {
  name: 'Select',
  props: ['selectedOrganisation', 'participants'],
  data() {
    return {
      loading: true,
    }
  },
  watch: {
    participants: {
      handler(val) {
        if (val.length > 0) {
          this.loading = false;
        }
      },
    }
  },
  computed: {
    selected() {
      return this.selectedOrganisation;
    }
  }
}
</script>

<style>
</style>

<template>
  <p v-if="loading">Loading...</p>
  <select 
    v-else
    v-model="selected"
  >
    <option 
      v-for="(participant, idx) in participants" 
      :key="idx"
      :value="participant.OrganisationId"
    >
      {{ participant.RegisteredName }}
    </option>
  </select>
</template>

