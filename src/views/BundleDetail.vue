<template>
    <v-container class="my-16">
  
      <div class="d-flex justify-content-between align-center flex-wrap mb-5">
          <h2>{{ cleanedDisplayName }}</h2>
        <a href="/bundle" class="text-decoration-none text-white">
          <i class="fa-solid fa-arrow-left mr-1"></i> Back to Shop
        </a>
      </div>
      
      <img :src="detail.displayIcon" alt="Image" v-if="detail.displayIcon" class="w-100 rounded-lg">
      <!-- <p>{{ detail.description }}</p> -->
      <h3 class="mt-10">All Weapon Skins</h3>
      <v-row>
        <v-col
          cols="6"
          sm="6"
          md="4"
          v-for="(skin, index) in matchingSkins"
          :key="index"
        >
        <div class="card bg-transparent shadow-none bg-text p-4 card-weapon">
            <img
              :src="skin.displayIcon"
              class="white--text align-end mt-2 mb-5"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="auto"
              width="100%"
            />
  
            <div class="card-body p-0 text-white card-weapon-detail">
              <div>
                <h6 class="mb-0">{{ skin.displayName }}</h6>
                <p class="mb-0 text-primary">1650 VP</p>
              </div>
            </div>
          </div>
          
        </v-col>
      </v-row>
      
      <h3 class="mt-10">Buddies</h3>
      <v-row>
        <v-col
          lg="4"
          md="6"
          sm="6"
          cols="6"
          v-for="(buddy, index) in matchingBuddies"
          :key="index"
        >
          <v-img
            :src="buddy.displayIcon"
            class="rounded-lg w-100"
            height="200"
          ></v-img>
          <p class="mt-3 text-secondary">{{ buddy.displayName }}</p>
        </v-col>
      </v-row>
      <h3 class="mt-10">Sprays</h3>
      <v-row>
        <v-col
          cols="6"
          sm="6"
          md="4"
          v-for="(spray, index) in matchingSprays"
          :key="index"
        >
          <v-img
            :src="spray.displayIcon"
            class="rounded-lg w-100"
            height="200"
          ></v-img>
          <p class="mt-3 text-secondary">{{ spray.displayName }}</p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    name: 'BundleDetail',
    data() {
      return {
        detail: null,
        matchingSkins: [],
        matchingBuddies: [],
        matchingSprays: [],
      };
    },
    mounted() {
      this.fetchDetail();
    },
    methods: {
      async fetchDetail() {
        const displayName = this.$route.params.displayName;
        try {
          const [bundleRes, skinRes, buddyRes, sprayRes] = await Promise.all([
            axios.get("https://valorant-api.com/v1/bundles"),
            axios.get("https://valorant-api.com/v1/weapons/skins"),
            axios.get("https://valorant-api.com/v1/buddies"),
            axios.get("https://valorant-api.com/v1/sprays"),
          ]);
          
          if (bundleRes.data.status === 200 && skinRes.data.status === 200 && buddyRes.data.status === 200 && sprayRes.data.status === 200) {
            this.detail = bundleRes.data.data.find(bundle => bundle.displayName === displayName);
            const skinDisplayNames = skinRes.data.data.map(skin => skin.displayName);
            this.matchingSkins = skinRes.data.data.filter(skin => skin.displayName.includes(displayName));
            this.matchingBuddies = buddyRes.data.data.filter(buddy => skinDisplayNames.includes(buddy.displayName));
            this.matchingSprays = sprayRes.data.data.filter(spray => skinDisplayNames.includes(spray.displayName));
          }
        } catch (error) {
          console.error(error);
        }
      },
      getCleanedDisplayName(displayName) {
        // Remove "Altitude " from displayName
        return displayName.replace("Altitude ", "");
      }
    },
    computed: {
      cleanedDisplayName() {
        if (this.detail) {
          return this.getCleanedDisplayName(this.detail.displayName);
        } else {
          return "";
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add styles as needed */
  </style>