<template>
  <v-container class="my-16">
    <h2 class="mb-0">Selected works</h2>
    <p class="mb-10 text-secondary">Since 2022 - Present</p>

    <v-tabs dark class="rounded-lg">
      <v-tab> Projects </v-tab>
      <v-tab> Design </v-tab>

      <v-tab-item class="mt-3">
        <CodingWorks />
      </v-tab-item>

      <v-tab-item class="mt-6">
        <DesignWorks />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import CodingWorks from "../components/CodingWorks.vue";
import DesignWorks from "../components/DesignWorks.vue"

export default {
  components: {
    CodingWorks,
    DesignWorks
  },
}

</script>

<style>
.theme--light.v-tabs-items {
  background: transparent !important;
}

.theme--dark.v-tabs > .v-tabs-bar,
.theme--light.v-tabs > .v-tabs-bar {
  background: transparent !important;
}
</style>
