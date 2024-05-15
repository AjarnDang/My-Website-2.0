<template>
    <v-container class="my-16">
      <h2>All you need.</h2>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(skin, index) in filteredSkins" :key="index">
          <p>{{ skin.displayName }} - Tier: {{ tierName }}</p>
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
        weaponSkins: [], // Data from the first API
        tiers: [], // Data from the second API
        filteredSkins: [], // Skins with displayName "RGX 11z Pro"
        tierName: "", // Name of the tier "Exclusive Edition"
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        try {
          const [weaponRes, tierRes] = await Promise.all([
            axios.get('https://valorant-api.com/v1/weapons/skins'),
            axios.get('https://valorant-api.com/v1/contenttiers')
          ]);
  
          if (weaponRes.data.status === 200 && tierRes.data.status === 200) {
            this.weaponSkins = weaponRes.data.data;
            this.tiers = tierRes.data.data;
            this.filterData();
          }
        } catch (e) {
          console.log(e);
        }
      },
      filterData() {
        this.filteredSkins = this.weaponSkins.filter(skin => skin.displayName.includes("RGX 11z Pro"));
        const targetTier = this.tiers.find(tier => tier.displayName === "Exclusive Edition");
        this.tierName = targetTier ? targetTier.displayName : 'Unknown';
      }
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here if needed */
  </style>
  