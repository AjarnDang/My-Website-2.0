<template>
  <v-container class="my-16">
    <h2 class="mb-0">Selected works</h2>
    <p class="mb-10 text-secondary">Since 2022 - Present</p>

    <v-tabs dark class="rounded-lg">
      <v-tab> Projects </v-tab>
      <v-tab> UX / UI Design </v-tab>
      <v-tab> Graphic Design </v-tab>

      <v-tab-item class="mt-3">
        <CodingWorks />
      </v-tab-item>

      <v-tab-item class="mt-6">
        <DesignWorks />
      </v-tab-item>

      <v-tab-item class="mt-6">
        <GraphicWorks />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import GraphicWorks from '@/components/GraphicWorks.vue';
import CodingWorks from "../components/CodingWorks.vue";
import DesignWorks from "../components/DesignWorks.vue";

export default {
  components: {
    CodingWorks,
    DesignWorks,
    GraphicWorks
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

.v-application .primary {
  background-color: var(--primary) !important;
  border-color: var(--primary) !important;
  color: var(--white) !important;
}

.theme--light.v-pagination .v-pagination__item {
  background-color: var(--white);
  color: var(--text);
}
</style>
