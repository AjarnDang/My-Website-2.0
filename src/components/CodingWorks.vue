<template>
  <div>
    <v-col
      cols="12"
      class="mb-3 px-0 rounded-lg"
      v-for="(item, index) in paginatedCodingWorks"
      :key="index"
    >
      <v-card class="mx-auto bg-text" max-width="100%" outlined>
        <v-list-item three-line>

          <v-list-item-content>
            <div class="text-overline mb-4">{{ item.no }}</div>

            <v-list-item-title class="text-h5 mb-2">
              {{ item.name }}
            </v-list-item-title>

            <v-list-item-subtitle class="text-white">
              {{ item.desc}}
            </v-list-item-subtitle>

            <v-list-item-subtitle class="text-secondary mt-2">
             {{ item.created}}
            </v-list-item-subtitle>

          </v-list-item-content>

          <v-list-item-avatar tile size="80" class="rounded-lg">
            <v-img :src="item.img"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn  v-if="item.showLink" :href="item.link" target="_blank" rounded-lg text class="bg-primary ml-2 mb-2 px-4 d-flex align-items-center"
            >SEE MORE <i class="fa-solid fa-arrow-up-right-from-square ml-2 text-dark"></i></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      :total-visible="7"
      @input="onPageChange"
    ></v-pagination>
  </div>
</template>

<script>
import { coding } from './WorksData';

export default {
  name: "Works",
  data() {
    return {
      coding: coding,
      itemsPerPage: 6, // Adjust this as needed
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.coding.length / this.itemsPerPage);
    },
    paginatedCodingWorks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.coding.slice(start, end);
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style>
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
