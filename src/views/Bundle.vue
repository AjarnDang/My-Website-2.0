<template>
  <v-container class="my-16">
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(item, index) in filteredBundles"
          :key="index"
        >
          <img
            :src="item.displayIcon"
            class="d-block w-100 carousel-image-2"
            alt="img-features"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2>{{ item.displayName }}</h2>
            <p>Exclusive {{ item.description }} Bundle</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h3 class="mt-16 mb-0">
      Get your favorite
      <h3 class="d-inline text-primary">VCT Team</h3>
    </h3>

    <v-sheet
      class="mx-auto shadow-none mt-5"
      elevation="8"
      color="transparent"
      dark
    >
      <v-slide-group v-model="model" active-class="success" show-arrows>
        <v-slide-item v-for="(item, index) in vctBundles" :key="index">
          <v-card
            :color="dark"
            class="pa-1 ma-3 bottom-gradient"
            height="auto"
            width="250"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-img
                :src="item.displayIcon"
                class="w-100 rounded-lg mt-3"
                height="150"
              ></v-img>
              <v-card-text class="px-0 pb-0 text-center">
                <p class="mb-0 weapon-name text-secondary">
                  {{ item.displayName }}
                </p>
              </v-card-text>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <h3 class="mt-16 mb-10">All Bundles</h3>
    <v-row>
      <v-col
        cols="6"
        sm="6"
        md="4"
        v-for="(item, index) in allBundles"
        :key="index"
      >
        <router-link :to="{ name: 'BundleDetail', params: { uuid: item.uuid } }">
          <v-img
            :src="item.displayIcon"
            class="rounded-lg w-100"
            height="200"
          ></v-img>
          <p class="mt-3 text-secondary">{{ item.displayName }} Bundle</p>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "AllProduct",
  data() {
    return {
      info: [], // Initialize as an empty array
    };
  },
  mounted() {
    this.getBundle();
  },
  methods: {
    async getBundle() {
      try {
        const res = await axios.get("https://valorant-api.com/v1/bundles");
        if (res.data.status === 200) {
          this.info = res.data.data; // Store all data
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    filteredBundles() {
      return this.info.filter(
        (item) =>
          item.displayName.includes("Arcane") ||
          item.displayName.includes("Champions") ||
          item.displayName.includes("XERØFANG")
      );
    },
    vctBundles() {
      return this.info.filter((item) => item.displayName.includes("VCT"));
    },
    allBundles() {
      // Exclude items that are in filteredBundles or vctBundles
      const filteredDisplayNames = new Set([
        ...this.filteredBundles.map((item) => item.displayName),
        ...this.vctBundles.map((item) => item.displayName),
      ]);

      return this.info.filter(
        (item) => !filteredDisplayNames.has(item.displayName)
      );
    },
  },
};
</script>

<style>
.carousel-image-2 {
  height: 500px;
  object-fit: cover;
}

.v-application .elevation-8 {
  box-shadow: none !important;
}

.theme--dark.v-sheet {
  background: transparent !important;
  box-shadow: none !important;
}
</style>
