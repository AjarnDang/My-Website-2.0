<template>
  <div>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-6"
        v-for="(item, index) in paginatedImages"
        :key="index"
      >
        <div
          class="image-container"
          type="button"
          :data-bs-toggle="'modal'"
          :data-bs-target="'#modalImage' + index"
        >
          <img class="image-gallery rounded-lg" :src="item.img" alt="" />
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          :id="'modalImage' + index"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content bg-text">
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="d-flex justify-content-between align-start">
                      <h1>{{ item.caption }}</h1>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i class="fa-solid fa-xmark fa-2xl"></i>
                      </button>
                    </div>
                    <div>
                      <v-chip-group active-class="primary--text" column dark>
                        <v-chip>
                          {{ item.tag }}
                        </v-chip>
                        <v-chip>
                          {{ item.tool }}
                        </v-chip>
                      </v-chip-group>
                      <img
                        :src="item.img"
                        width="100%"
                        height="auto"
                        class="rounded-lg mt-4"
                      />
                      <!-- <p class="mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Doloribus, dolore accusantium perspiciatis eum
                        dicta doloremque dignissimos, fuga quaerat facere
                        explicabo excepturi est provident quis! Voluptas a
                        architecto sint nulla temporibus.
                      </p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-pagination
      class="mt-8"
      v-model="currentPage"
      :length="totalPages"
      :total-visible="7"
      @input="onPageChange"
    ></v-pagination>
  </div>
</template>

<script>
import { images } from "./WorksData";

export default {
  name: "Works",

  data() {
    return {
      images, // Use the imported images array
      itemsPerPage: 16, // Adjust the number of items per page as needed
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.images.length / this.itemsPerPage);
    },
    paginatedImages() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.images.slice(start, end);
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
.image-gallery {
  width: 100%;
  min-height: 200px;
  height: 400px;
  object-fit: cover;
  object-position: 0% 0%;
  transition: 0.5s ease;
  backface-visibility: hidden;
  opacity: 1;
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

@media only screen and (max-width: 964px) {
  .image-gallery {
    height: 250px;
  }
}
</style>
